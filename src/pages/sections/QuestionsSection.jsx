import Section from '../../components/Section.jsx';
import QuestionBlock from '../../components/QuestionBlock.jsx';
import ChartCard from '../../components/ChartCard.jsx';
import DataTable from '../../components/DataTable.jsx';
import Callout from '../../components/Callout.jsx';
import StatCard from '../../components/StatCard.jsx';
import { QuestionChips, QuestionSidebar } from '../../components/QuestionNav.jsx';
import useActiveSection from '../../components/useActiveSection.js';

import CategoryBarChart from '../../charts/CategoryBarChart.jsx';
import ConstructionLineChart from '../../charts/ConstructionLineChart.jsx';
import GroupedBarChart from '../../charts/GroupedBarChart.jsx';
import BoxPlotChart from '../../charts/BoxPlotChart.jsx';
import RegressionScatter from '../../charts/RegressionScatter.jsx';
import { BRAND, NEIGHBOURHOOD_COLORS, ROOM_TYPE_COLORS, VERIFICATION_COLORS } from '../../charts/palette.js';

import { questions } from '../../data/overview.js';
import { roomTypes, roomTypesChart, roomTypesInterpretation } from '../../data/roomTypes.js';
import { neighbourhoodChart, neighbourhoodInterpretation, neighbourhoodListings } from '../../data/neighbourhood.js';
import { avgPriceByGroup, avgPriceChart, avgPriceInterpretation } from '../../data/pricing.js';
import { constructionChart, constructionInterpretation, constructionSeries, constructionStats } from '../../data/construction.js';
import { topHosts, topHostsChart, topHostsInterpretation, topHostsIntro, topHostsLimitation } from '../../data/hosts.js';
import {
  verificationBarChart, verificationBoxChart, verificationBoxplot, verificationInterpretation, verificationReview,
} from '../../data/verification.js';
import { priceFeeChart, priceFeeInterpretation, priceFeeLine, priceFeePoints, priceFeeStats } from '../../data/priceServiceFee.js';
import { reviewChart, reviewHueOrder, reviewInterpretation, reviewRateTable, reviewXOrder } from '../../data/reviews.js';
import { availabilityChart, availabilityInterpretation, availabilityLine, availabilityPoints, availabilityStats } from '../../data/availability.js';

const fmt = (n) => n.toLocaleString('en-US');
const f6 = (n) => n.toFixed(6);
const usd2 = (v) => `$${v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const Q = Object.fromEntries(questions.map((q, i) => [q.id, { ...q, number: i + 1 }]));

function TwoCol({ children }) {
  return <div className="grid grid-cols-[minmax(0,1fr)] gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)] xl:items-start">{children}</div>;
}

function StatRow({ children }) {
  return <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</div>;
}

function Q1() {
  return (
    <QuestionBlock id="q1" number={1} question={Q.q1.text}>
      <TwoCol>
        <DataTable
          title="Listings by room type"
          columns={[
            { key: 'roomType', label: 'Room type', strong: true },
            { key: 'listingCount', label: 'Listings', align: 'right', format: fmt },
          ]}
          rows={roomTypes}
        />
        <ChartCard title={roomTypesChart.title}>
          <CategoryBarChart data={roomTypes} xKey="roomType" yKey="listingCount" xLabel={roomTypesChart.xLabel} yLabel={roomTypesChart.yLabel} tickAngle={15} colors={ROOM_TYPE_COLORS} />
        </ChartCard>
      </TwoCol>
      <Callout paragraphs={roomTypesInterpretation} />
    </QuestionBlock>
  );
}

function Q2() {
  return (
    <QuestionBlock id="q2" number={2} question={Q.q2.text}>
      <TwoCol>
        <DataTable
          title="Listings by neighbourhood group"
          columns={[
            { key: 'group', label: 'Neighbourhood group', strong: true },
            { key: 'listingCount', label: 'Listings', align: 'right', format: fmt },
          ]}
          rows={neighbourhoodListings}
        />
        <ChartCard title={neighbourhoodChart.title}>
          <CategoryBarChart data={neighbourhoodListings} xKey="group" yKey="listingCount" xLabel={neighbourhoodChart.xLabel} yLabel={neighbourhoodChart.yLabel} tickAngle={25} colors={NEIGHBOURHOOD_COLORS} />
        </ChartCard>
      </TwoCol>
      <Callout paragraphs={neighbourhoodInterpretation} />
    </QuestionBlock>
  );
}

function Q3() {
  return (
    <QuestionBlock id="q3" number={3} question={Q.q3.text}>
      <ChartCard title={avgPriceChart.title}>
        <CategoryBarChart
          data={avgPriceByGroup}
          xKey="group"
          yKey="averagePrice"
          xLabel={avgPriceChart.xLabel}
          yLabel={avgPriceChart.yLabel}
          labelFormat={usd2}
          yTickFormat={(v) => `$${v}`}
          yDomain={[0, avgPriceChart.yMax]}
          yTicks={[0, 100, 200, 300, 400, 500, 600, 700]}
          colors={NEIGHBOURHOOD_COLORS}
          tooltipRows={(p, c) => [
            ['Average listing price', usd2(p.value), c],
            ['Listings with a price', fmt(p.payload.listingCount)],
          ]}
          tickAngle={25}
        />
      </ChartCard>
      <DataTable
        title="Average listing price by neighbourhood group"
        columns={[
          { key: 'group', label: 'Neighbourhood group', strong: true },
          { key: 'averagePrice', label: 'Average price ($)', align: 'right', format: f6 },
          { key: 'listingCount', label: 'Listings', align: 'right', format: fmt },
        ]}
        rows={avgPriceByGroup}
      />
      <Callout paragraphs={avgPriceInterpretation} />
    </QuestionBlock>
  );
}

function Q4() {
  return (
    <QuestionBlock id="q4" number={4} question={Q.q4.text}>
      <ChartCard title={constructionChart.title} caption="Hover a point to see the average listing price for that construction year.">
        <ConstructionLineChart data={constructionSeries} xLabel={constructionChart.xLabel} yLabel={constructionChart.yLabel} />
      </ChartCard>
      <StatRow>
        <StatCard label="Pearson correlation" value={constructionStats.pearson} sub="Construction year vs price" accent />
        <StatCard label="Listings analysed" value={constructionStats.listingsUsed} sub="With both construction year and price" />
      </StatRow>
      <Callout paragraphs={constructionInterpretation} />
    </QuestionBlock>
  );
}

function Q5() {
  return (
    <QuestionBlock id="q5" number={5} question={Q.q5.text}>
      <p className="max-w-3xl text-[15px] leading-relaxed text-ink-2">{topHostsIntro}</p>
      <ChartCard title={topHostsChart.title}>
        <CategoryBarChart
          data={topHosts}
          xKey="hostName"
          yKey="calculatedHostListingsCount"
          xLabel={topHostsChart.xLabel}
          yLabel={topHostsChart.yLabel}
          tickAngle={65}
          xTickHeight={118}
          height={460}
          yDomain={[0, 350]}
          yTicks={[0, 50, 100, 150, 200, 250, 300, 350]}
          color={BRAND.coral}
          tooltipRows={(p, c) => [
            ['Calculated host listings', fmt(p.value), c],
            ['Host IDs', fmt(p.payload.hostIdsInDataset)],
            ['Listings in dataset', fmt(p.payload.listingsInDataset)],
          ]}
        />
      </ChartCard>
      <DataTable
        title="Top 10 host names"
        columns={[
          { key: 'rank', label: 'Rank', align: 'right', format: (_, __, i) => i + 1 },
          { key: 'hostName', label: 'Host name', strong: true },
          { key: 'calculatedHostListingsCount', label: 'Calculated host listings', align: 'right', format: (v) => v.toFixed(1) },
          { key: 'hostIdsInDataset', label: 'Host IDs', align: 'right', format: fmt },
          { key: 'listingsInDataset', label: 'Listings in dataset', align: 'right', format: fmt },
        ]}
        rows={topHosts}
      />
      <Callout paragraphs={topHostsInterpretation} />
      <Callout variant="limitation" paragraphs={[topHostsLimitation]} />
    </QuestionBlock>
  );
}

function Q6() {
  return (
    <QuestionBlock id="q6" number={6} question={Q.q6.text}>
      <DataTable
        title="Review rate by host verification status"
        columns={[
          { key: 'status', label: 'Verification status', strong: true },
          { key: 'mean', label: 'Average review rate', align: 'right', format: f6 },
          { key: 'count', label: 'Listings', align: 'right', format: fmt },
        ]}
        rows={verificationReview}
      />
      <div className="grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-[repeat(2,minmax(0,1fr))]">
        <ChartCard title={verificationBarChart.title}>
          <CategoryBarChart
            data={verificationReview}
            xKey="status"
            yKey="mean"
            xLabel={verificationBarChart.xLabel}
            yLabel={verificationBarChart.yLabel}
            labelFormat={(v) => v.toFixed(2)}
            yTickFormat={(v) => v.toFixed(1)}
            yDomain={verificationBarChart.yDomain}
            yTicks={[0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4]}
            colors={VERIFICATION_COLORS}
            tooltipRows={(p, c) => [
              ['Average review rate', f6(p.value), c],
              ['Listings', fmt(p.payload.count)],
            ]}
          />
        </ChartCard>
        <ChartCard
          title={verificationBoxChart.title}
          caption="Boxes span the 25th to 75th percentile with the median marked; whiskers extend to 1.5× the interquartile range."
        >
          <BoxPlotChart boxes={verificationBoxplot} xLabel={verificationBoxChart.xLabel} yLabel={verificationBoxChart.yLabel} />
        </ChartCard>
      </div>
      <Callout paragraphs={verificationInterpretation} />
    </QuestionBlock>
  );
}

function Q7() {
  return (
    <QuestionBlock id="q7" number={7} question={Q.q7.text}>
      <StatRow>
        <StatCard label="Pearson correlation" value={priceFeeStats.pearson} sub="Listing price vs service fee" accent />
        <StatCard label="Listings analysed" value={priceFeeStats.listingsUsed} sub="With both price and service fee" />
      </StatRow>
      <ChartCard title={priceFeeChart.title} caption="Each point is a listing; the line shows the fitted linear trend.">
        <RegressionScatter
          points={priceFeePoints}
          line={priceFeeLine}
          alpha={0.8}
          radius={3.5}
          pointColor={BRAND.coral}
          lineColor={BRAND.dark}
          xLabel={priceFeeChart.xLabel}
          yLabel={priceFeeChart.yLabel}
          xDomain={[0, 1250]}
          yDomain={[0, 250]}
        />
      </ChartCard>
      <Callout paragraphs={priceFeeInterpretation} />
    </QuestionBlock>
  );
}

function Q8() {
  return (
    <QuestionBlock id="q8" number={8} question={Q.q8.text}>
      <ChartCard title={reviewChart.title} caption="Bronx and Staten Island have no hotel-room listings.">
        <GroupedBarChart
          rows={reviewRateTable}
          xOrder={reviewXOrder}
          hueOrder={reviewHueOrder}
          xLabel={reviewChart.xLabel}
          yLabel={reviewChart.yLabel}
          legendTitle="Room type"
        />
      </ChartCard>
      <DataTable
        title="Average review rate by neighbourhood group and room type"
        dense
        columns={[
          { key: 'group', label: 'Neighbourhood group', strong: true, format: (v, r, i) => (i === 0 || reviewRateTable[i - 1].group !== v ? v : '') },
          { key: 'roomType', label: 'Room type' },
          { key: 'averageReviewRate', label: 'Average review rate', align: 'right', format: f6 },
          { key: 'listingCount', label: 'Listings', align: 'right', format: fmt },
        ]}
        rows={reviewRateTable}
      />
      <Callout paragraphs={reviewInterpretation} />
    </QuestionBlock>
  );
}

function Q9() {
  return (
    <QuestionBlock id="q9" number={9} question={Q.q9.text}>
      <ChartCard
        title={availabilityChart.title}
        caption="Only listings with availability between 0 and 365 days are included. The line shows the fitted linear trend."
      >
        <RegressionScatter
          points={availabilityPoints}
          line={availabilityLine}
          alpha={0.15}
          radius={2.8}
          pointColor={BRAND.teal}
          lineColor={BRAND.coral}
          xLabel={availabilityChart.xLabel}
          yLabel={availabilityChart.yLabel}
          xDomain={[-10, 345]}
          yDomain={[-10, 380]}
        />
      </ChartCard>
      <StatRow>
        <StatCard label="Pearson correlation" value={availabilityStats.pearson} sub="Host listings count vs annual availability" accent />
        <StatCard label="Listings analysed" value={availabilityStats.validListings} sub="Availability between 0 and 365 days" />
      </StatRow>
      <Callout paragraphs={availabilityInterpretation} />
    </QuestionBlock>
  );
}

export default function QuestionsSection() {
  const active = useActiveSection(questions.map((q) => q.id), 160);
  return (
    <Section
      id="questions"
      eyebrow="Analysis"
      title="Research Questions"
      intro="Nine questions about the New York City Airbnb market, each answered with a chart, the underlying figures and a short interpretation."
    >
      <QuestionChips active={active} />
      <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside><QuestionSidebar active={active} /></aside>
        <div className="min-w-0">
          <Q1 />
          <Q2 />
          <Q3 />
          <Q4 />
          <Q5 />
          <Q6 />
          <Q7 />
          <Q8 />
          <Q9 />
        </div>
      </div>
    </Section>
  );
}

import OverviewSection from './sections/OverviewSection.jsx';
import DataSection from './sections/DataSection.jsx';
import EdaSection from './sections/EdaSection.jsx';
import QuestionsSection from './sections/QuestionsSection.jsx';
import { ConclusionSection, FindingsSection, LimitationsSection } from './sections/ClosingSections.jsx';

export default function Home() {
  return (
    <>
      <OverviewSection />
      <DataSection />
      <EdaSection />
      <QuestionsSection />
      <FindingsSection />
      <LimitationsSection />
      <ConclusionSection />
    </>
  );
}

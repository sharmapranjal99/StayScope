// Source: notebook cells 0, 1, 2, 17 (markdown). Text reproduced verbatim.

export const projectTitle = 'Airbnb Hotel Booking Analysis';
export const brandName = 'StayScope';

export const problemStatement = [
  'The hospitality industry has undergone a significant transformation with the rise of online platforms facilitating short-term lodging and tourism. Leading this revolution is Airbnb, Inc., a pioneering American company that has reshaped travel accommodation through its innovative online marketplace. Established in 2008 in San Francisco, California, Airbnb provides a diverse range of lodging options, offering guests a unique and personalized experience. Unlike traditional hospitality providers, Airbnb operates on a commission-based model, facilitating transactions between hosts and guests without owning the properties listed on its platform.',
  "This research analysis delves into the New York City Airbnb dataset to extract meaningful insights. Through rigorous data cleaning, exploratory analysis, and visualization techniques, the study aims to illuminate the dynamics of the city's lodging market. By discerning factors influencing listing availability, pricing strategies, and overall customer satisfaction, the research contributes to a deeper understanding of Airbnb's operations in one of the world's most dynamic urban environments. These insights hold significance for stakeholders and enthusiasts seeking to navigate the evolving landscape of short-term accommodation.",
];

// Objectives are quoted from the problem statement (cell 0) and questions intro (cell 1); nothing added.
export const objectives = [
  'Extract meaningful insights from the New York City Airbnb dataset.',
  'Apply rigorous data cleaning, exploratory analysis, and visualization techniques.',
  "Illuminate the dynamics of the city's lodging market.",
  'Discern factors influencing listing availability, pricing strategies, and overall customer satisfaction.',
];

export const questionsIntro =
  'This project is aimed to uncover some insights from the Airbnb Open Data. The following questions would be answered from the data.';

// Cell 1 — exact notebook wording.
export const questions = [
  { id: 'q1', short: 'Property types', text: 'What are the different property types in the Dataset?' },
  { id: 'q2', short: 'Listings by group', text: 'Which neighborhood group has the highest number of listings?' },
  { id: 'q3', short: 'Average price', text: 'Which neighborhoods group have the highest average prices for Airbnb listings?' },
  { id: 'q4', short: 'Construction year', text: 'Is there a relationship between the construction year of property and price?' },
  { id: 'q5', short: 'Top 10 hosts', text: 'Who are the top 10 hosts by calculated host listing count?' },
  { id: 'q6', short: 'Host verification', text: 'Are hosts with verified identities more likely to receive positive reviews?' },
  { id: 'q7', short: 'Price & service fee', text: 'Is there a correlation between the price of a listing and its service fee?' },
  { id: 'q8', short: 'Review rates', text: 'What is the average review rate number (e.g., stars) for listings, and does it vary based on the neighborhood group and room type?' },
  { id: 'q9', short: 'Availability', text: 'Are hosts with a higher calculated host listings count more likely to maintain higher availability throughout the year?' },
];

export const dataWranglingIntro =
  'Data wrangling, a crucial phase in the data analysis process, involves preparing and cleaning raw data to make it suitable for analysis. This involves various tasks such as handling missing values, removing duplicates, and transforming data into a consistent format. Effective data wrangling ensures that the data is reliable and ready for exploration, enabling meaningful insights to be derived from it.';

export const edaIntro =
  "Exploratory Data Analysis (EDA) is a vital phase in data analysis, involving the examination and visualization of data to uncover patterns, trends, and insights. In the context of an Airbnb data analysis project, EDA allows researchers to gain a comprehensive understanding of the dataset's characteristics, distribution, and relationships between variables. Through techniques such as summary statistics, data visualization, and correlation analysis, EDA sets the stage for further investigation and hypothesis testing, guiding subsequent analytical decisions.";

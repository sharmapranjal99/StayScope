# StayScope – Airbnb Hotel Booking Analysis

**An Interactive Data Analytics Project | New York City Airbnb Open Data**

🌐 **Live Website:** [https://stay-scope.vercel.app/](https://stay-scope.vercel.app/)

## About the Project

StayScope is a data analytics project that explores Airbnb listings in New York City to understand the factors influencing listing distribution, pricing, room types, host activity, availability, and customer reviews.

The project uses a Jupyter Notebook for data cleaning, exploratory data analysis (EDA), visualization, and answering nine research questions. The analytical findings are then presented through an interactive, responsive website built using React.

The website acts as a visual presentation layer for the analysis performed in the notebook, making the findings easier to explore and understand.

## Project Objectives

- Understand the distribution of Airbnb listings across New York City neighbourhoods.
- Analyze room types and their distribution.
- Explore pricing patterns and service-related charges.
- Examine host activity and listing characteristics.
- Study availability and customer review patterns.
- Identify meaningful trends through data visualization.
- Present analytical findings in an interactive format.

## Project Workflow

1. **Data Collection:** Load the New York City Airbnb dataset using Excel and Python.
2. **Data Cleaning:** Inspect missing values, inconsistent entries, and data quality issues.
3. **Exploratory Data Analysis:** Examine distributions, summary statistics, and relationships between variables.
4. **Research Questions:** Perform analysis to answer nine project-specific research questions.
5. **Data Visualization:** Create charts and graphs to communicate patterns and findings.
6. **Insights and Conclusion:** Summarize key observations, limitations, and conclusions.
7. **Interactive Presentation:** Display the verified analytical results through the StayScope website.

## Jupyter Notebook

The notebook is the primary analytical component of this project.

**Notebook:** `Airbnb_Hotel_Booking_Analysis_Corrected.ipynb`

It contains:
- Dataset inspection and understanding
- Data preprocessing and cleaning
- Missing-value and data-quality analysis
- Exploratory Data Analysis (EDA)
- Statistical summaries and visualizations
- Analysis of all nine research questions
- Key findings and interpretations
- Limitations and final conclusion

## Website Features

- Interactive dashboard-style presentation
- Nine research question sections
- Data visualizations and analytical summaries
- Responsive layout for desktop, tablet, and mobile
- Airbnb-inspired color palette and branding
- Interactive charts, tables, and navigation

## Technology Stack

| Component | Technologies |
|---|---|
| Data Analysis | Python, Jupyter Notebook |
| Data Processing | Pandas, NumPy |
| Visualization | Matplotlib, Seaborn |
| Frontend | React 18, Vite 6 |
| Charts | Recharts, Custom SVG |
| Styling | Tailwind CSS 4 |
| Icons | Lucide React |

## Project Structure

```text
StayScope/
│
├── public/                         # Logo and static assets
├── src/
│   ├── data/                       # Verified analytical data
│   ├── charts/                     # Chart components
│   ├── components/                 # Reusable UI components
│   ├── pages/                      # Website pages and sections
│   └── styles/                     # Styling and theme
│
├── Airbnb_Hotel_Booking_Analysis_Corrected.ipynb
├── 1776250134-P4-Airbnb Hotel Booking Analysis.xlsx
├── README.md
├── AUDIT_REPORT.md
├── BRANDING_REPORT.md
└── VERIFICATION_REPORT.md
```

## Run the Project Locally

Clone the repository:

```bash
git clone https://github.com/sharmapranjal99/StayScope.git
cd StayScope
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Architecture

StayScope is a frontend-only application. It does not use a backend, database, or external API.

The Jupyter Notebook performs the actual data analysis, while the React website presents the resulting verified values, charts, and insights in an accessible and interactive format.

## Documentation

- `AUDIT_REPORT.md` – Analytical accuracy and consistency audit.
- `BRANDING_REPORT.md` – Branding and visual theme details.
- `VERIFICATION_REPORT.md` – Notebook-to-website verification details.

## Conclusion

StayScope combines data analytics with interactive web development to transform raw Airbnb listing data into meaningful insights.

The project demonstrates how data cleaning, exploratory analysis, statistical interpretation, and visualization can be combined to build an informative and user-friendly analytics experience.

---

**Developed as an academic Data Analytics Project.**

# SkyShield Airlines – Power BI Risk Dashboard Design

This document defines the layout and visuals for the SkyShield Airlines cyber risk dashboard built in Power BI.

## 1. Import Data

1. Open Power BI Desktop
2. Click **Get Data → Text/CSV**
3. Import `08-dashboard/risk_heatmap_data.csv`
4. Ensure column types:
   - Likelihood, Impact, Residual Risk Score → Whole Number or Decimal
   - Risk ID, Asset ID, Risk Severity (Bucket) → Text

## 2. Page Layout

Create a report page with:

- **Top-left:** Risk Heatmap (Likelihood vs. Impact)
- **Top-right:** Risk Table (sortable)
- **Bottom:** KPI cards or summary visuals

### 2.1 Heatmap Visual

Recommended: **Scatter Chart** configured as a pseudo-heatmap

- Visual: **Scatter Chart**
- X-axis: `Likelihood`
- Y-axis: `Impact`
- Details / Legend: `Risk ID`
- Tooltip: `Risk ID`, `Asset ID`, `Residual Risk Score`, `Risk Severity (Bucket)`

Color formatting:

- Use `Risk Severity (Bucket)` as Legend
- Map:
  - Low → Green
  - Medium → Yellow
  - High → Red

Axis:

- X-Axis: from 1 to 5 (integer steps)
- Y-Axis: from 1 to 5 (integer steps, reverse if preferred so 5 is at top)
- Add titles: "Likelihood" (X) and "Impact" (Y)

### 2.2 Risk Table Visual

Visual: **Table**

Columns:
- Risk ID
- Asset ID
- Likelihood
- Impact
- Residual Risk Score
- Risk Severity (Bucket)

Enable sorting on:
- Residual Risk Score (descending)
- Risk Severity (Bucket)

### 2.3 KPI Cards

Add **Card** visuals to show:

- Count of High risks:
  - If you later add any High severity, use a measure:
    - e.g., `High Risk Count = COUNTROWS(FILTER(Risks, Risks[Risk Severity (Bucket)] = "High"))`
- Count of Medium risks
- Count of Low risks

### 2.4 Filters / Slicers (Optional)

Add slicers for:

- `Risk Severity (Bucket)`
- `Asset ID`

This allows leadership to:
- Filter to Medium+ only
- Focus on specific systems (e.g., IAM, Dispatch, Loyalty DB)

### 2.5 Export

- Publish to Power BI Service
- Export to **PDF** 



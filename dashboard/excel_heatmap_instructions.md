# SkyShield Airlines – Excel / Sheets Risk Heatmap Instructions

This guide explains how to build a risk heatmap in Excel or Google Sheets using `risk_heatmap_data.csv`.

## 1. Import Data

1. Open Excel (or Google Sheets)
2. Go to **Data → From Text/CSV** (Sheets: File → Import → Upload)
3. Select `08-dashboard/risk_heatmap_data.csv`
4. Confirm headers are recognized correctly

You should see columns:
- Risk ID
- Asset ID
- Likelihood
- Impact
- Residual Risk Score
- Risk Severity (Bucket)
- Plot X (Likelihood)
- Plot Y (Impact)

## 2. Create a 5×5 Grid for Heatmap

On a new sheet named `Heatmap`:

1. In cells `B2:F2`, add Likelihood labels: 1, 2, 3, 4, 5
2. In cells `A3:A7`, add Impact labels: 5, 4, 3, 2, 1 (top-down)

You should now have a 5×5 grid where:
- Columns = Likelihood
- Rows = Impact (5 at top, 1 at bottom)

## 3. Plot Risks into the Grid

Option 1 (manual, simple):

- For each risk (R01–R06), look at `Plot X` and `Plot Y`
- Find the matching cell (Likelihood = X, Impact = Y)
- Type the Risk ID into that cell (e.g., "R01")

## 4. Apply Conditional Formatting

1. Select the inner 5×5 grid (without labels)
2. In Excel: Home → Conditional Formatting → New Rule → Use a formula
3. Example formulas (assuming risks text like "R01, R04" and you want to color by highest severity present):
   - This is easier if you map severity separately, but for now use a simple gradient:
   - Use `Color Scale` and map from green (low) → yellow (mid) → red (high) based on a helper value

Simpler approach:
- Maintain a separate table mapping Risk ID → Severity:
  - Low = 1, Medium = 2, High = 3
- For each grid cell, use `MAX()` over the severities of risks present (if you go formula-heavy)
- Apply a 3 color scale on that numeric value

## 5. Label Risks & Add Legend

- Add a small legend below:
  - 🟢 = Low
  - 🟡 = Medium
  - 🔴 = High


This view can now be exported to PDF/pasted into slides

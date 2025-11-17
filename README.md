# SkyShield Airlines: Cybersecurity Governance Program  
**Enterprise-Style GRC Simulation | Risk, Compliance, Vendor Governance & Dashboards**

This repository contains a full cybersecurity governance, risk, and compliance (GRC) program simulation for a fictional airline, SkyShield Airlines. It demonstrates framework alignment, risk modeling, policies, vendor management, and exception tracking.

## Project Scope

| Area | Deliverable |
|-------|-------------|
| Asset Inventory | CIA scoring, criticality flags |
| Classification | Full data sensitivity criteria |
| Risk Register | FAIR-lite scoring + residual assessment |
| Threat Model | Realistic airline scenarios |
| Heatmap | CSV → Python → PNG/SVG |
| Policy Library | IR, VRM, Privacy, Access, Logging, VM |
| Vendors | Third-party risk register + scoring |
| Exceptions | Formal exception governance + status |
| Dashboard | Next.js + Tailwind executive UI |
| Docs Portal | MkDocs Material professional site |

---

## Repo Structure

airline-security-governance-framework/
- asset-inventory: asset register & classification
- policies: formal security governance policies
- risk-register: risk scoring, heatmap data & script
- exception-register: exceptions & vendor risk logs
- dashboard: python heatmap code + exports
- docs: full MKDocs documentation site
- web: Next.js dashboard prototype

---

## Governance Artifacts

| Category | File |
|----------|------|
| CIA & classification | `asset-inventory/asset_register.xlsx` |
| Classification rules | `asset-inventory/classification_criteria.md` |
| Risk register | `risk-register/risk_register.xlsx` |
| Threat model | `risk-register/threat_vulnerability_model.md` |
| Heatmap | `dashboard/risk_heatmap.py` |
| Vendors | `exception-register/vendor_risk_register.xlsx` |
| Exceptions | `exception-register/exceptions_log.xlsx` |

---

## Dashboard Demo  
A Next.js + Tailwind dashboard visualizing:

- Key risk metrics  
- Vendor residual risk  
- Exception countdowns  
- Residual risk summaries  

Run locally:

```bash
cd web
npm install
npm run dev
```


## Live Docs Site

The MkDocs Material documentation contains full narrative, methodology, and policy library

Run locally:

```bash
mkdocs serve
```

## Future Enhancements (Backlog)

- Add dedicated /risks, /vendors, and /exceptions pages with filtering and drill-down
- Integrate CSV/JSON data ingestion instead of static objects
- Add authentication + role-based dashboards (analyst vs. executive)
- Connect to cloud storage for evidence and audit artifacts

## Author
- Name: Sarah Ouda
- Email: sar9h.ouda@gmail.com / sho10@duke.edu
- Website: https://www.saraho.org/
- Project: https://github.com/sar9ho/airline-security-governance-framework
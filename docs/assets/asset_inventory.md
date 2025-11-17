# Asset Inventory

The full asset register is maintained in `02-asset-inventory/asset_register.xlsx`

Key critical assets:

| Asset ID | Name                             | Type        | Data Classification | Critical Asset | Notes |
|----------|----------------------------------|-------------|---------------------|----------------|-------|
| A01      | Customer Booking Web App         | Technical   | Confidential        | Yes            | Public-facing portal |
| A02      | Loyalty Rewards Database         | Data        | Restricted          | Yes            | Contains PII + stored value |
| A03      | HR/Payroll SaaS                  | Vendor      | Confidential        | Maybe          | Employee PII via SaaS provider |
| A04      | Identity & Access Mgmt Platform  | Technical   | Restricted          | Yes            | MFA + SSO; single point of failure |
| A05      | Airport Ops Dispatch System      | OT Technical| Restricted          | Yes            | Safety-critical operations |
| A06      | Security Logs & SIEM Platform    | Data        | Restricted          | Yes            | IR and forensics backbone |

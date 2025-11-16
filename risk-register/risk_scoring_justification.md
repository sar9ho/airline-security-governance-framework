# SkyShield Airlines - Risk Scoring Justification

This document records the rationale behind the Likelihood and Impact scoring for each risk entry. It is based on FAIR-lite analysis using observable industry data, asset criticality, and threat/vulnerability modeling.

---

## R01 - Account Takeover of Customer Booking Portal (A01)

**Likelihood = 4 (Likely)**  
- Credential stuffing is globally widespread and automated.
- Customer-facing system exposed to internet.
- Airline/ticketing sector historically targeted.

**Impact = 4 (Major)**  
- Lost revenue + fraudulent purchases + support cost.
- Brand trust erosion.
- Potential loyalty data exposure.

**Inherent Risk Score = 16 (High)**

---

## R02 – Loyalty Database Exfiltration (A02)

**Likelihood = 3 (Possible)**  
- Database is not public facing, requires lateral movement.
- Insider or compromised privileged accounts viable.

**Impact = 5 (Catastrophic)**  
- Contains PII AND stored-value assets.
- Regulatory, legal, and brand consequences.

**Inherent Risk Score = 15 (High)**

---

## R03 – Workforce SaaS Vendor Breach (A03)

**Likelihood = 3 (Possible)**  
- Vendor breaches are rising; dependent on external controls.

**Impact = 4 (Major)**  
- Exposure of employee data + compliance violations.

**Inherent Risk Score = 12 (Medium)**

---

## R04 – IAM Privilege Escalation (A04)

**Likelihood = 3 (Possible)**  
- IAM system is hardened but configuration drift risk exists.

**Impact = 5 (Catastrophic)**  
- Total compromise blast radius across multiple critical assets.

**Inherent Risk Score = 15 (High)**

---

## R05 – Airport Dispatch System Downtime (A05)

**Likelihood = 2 (Uncommon)**  
- OT systems typically isolated; fewer access vectors.

**Impact = 5 (Catastrophic)**  
- Operational & safety disruption → regulatory involvement.

**Inherent Risk Score = 10 (Medium)**

---

## R06 – Log Integrity or Availability Failure (A06)

**Likelihood = 2 (Uncommon)**  
- Logging stack hardened but corruption risk remains.

**Impact = 4 (Major)**  
- Legal hold & forensic failure; hampers incident response.

**Inherent Risk Score = 8 (Medium)**

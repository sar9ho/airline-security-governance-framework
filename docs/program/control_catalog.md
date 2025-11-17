# SkyShield Control Catalog

This catalog defines the core cybersecurity controls used to protect SkyShield Airlines information assets. Controls are grouped into functional domains and map to risk-based requirements.

This document **summarizes** controls — granular implementation settings live in secure system-level standards.

---

## Control Categories

| Category | Description |
|----------|-------------|
| AC | Access Control |
| VM | Vulnerability & Patch Management |
| LG | Logging & Monitoring |
| IR | Incident Response |
| DP | Data Protection & Privacy |
| VR | Vendor & Third-Party Risk |
| CO | Operational Continuity & Resilience |

---

## Control List

| ID | Category | Control Statement |
|----|----------|-------------------|
| AC-01 | Access | Use least privilege for all user and service accounts |
| AC-02 | Access | Enforce MFA for privileged and remote access |
| AC-03 | Access | Annual entitlement review and immediate termination revocation |
| VM-01 | Vulnerability | Monthly vulnerability scanning for all assets |
| VM-02 | Vulnerability | Critical vulnerabilities remediated within 7 days |
| LG-01 | Logging | Security logs centralized into SIEM with NTP sync |
| LG-02 | Logging | Privileged activity and failed authentication must be logged |
| IR-01 | Incident Response | Incidents must follow NIST 800-61 lifecycle |
| IR-02 | Incident Response | Post-incident reviews required within 5 business days |
| DP-01 | Data Protection | Data classified using SkyShield taxonomy |
| DP-02 | Data Protection | Encryption required in transit & at rest for Restricted data |
| VR-01 | Vendor | Vendor assessments conducted pre-onboarding and annually |
| VR-02 | Vendor | SaaS vendors must provide SOC2 or ISO-27001 evidence |
| CO-01 | Continuity | Critical assets require defined RTO/RPO objectives |
| CO-02 | Continuity | Backup & recovery testing conducted at least annually |

---

## Maturity Notes
Current maturity target: **Level 3 — Defined & Measured**

Future goal: **Level 4 — Automated & Preventative**


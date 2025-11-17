# Framework Mapping Matrix

This document shows how SkyShield Airlines controls align to industry frameworks, enabling compliance readiness and audit traceability.

Referenced frameworks:  
- **NIST Cybersecurity Framework (CSF)**  
- **ISO/IEC 27001:2022 Annex A**  
- **CIS Critical Security Controls v8**

---

## Control-to-Framework Crosswalk

| Control ID | NIST CSF | ISO 27001 Annex A | CIS v8 | Notes |
|-------------|-----------|-------------------|--------|-------|
| AC-01 | PR.AC-4 | A.9.1.2 | 6.3 | Role-based access principles |
| AC-02 | PR.AC-7 | A.9.4.2 | 6.5 | MFA required for privileged accounts |
| AC-03 | PR.AC-1 | A.5.18 | 5.3 | Offboarding access removal |
| VM-01 | PR.IP-12 | A.8.8 | 7.1 | Monthly scans |
| VM-02 | PR.IP-12 | A.8.8 | 7.2 | SLA-driven remediation |
| LG-01 | DE.CM-1 | A.8.15 | 8.2 | Centralized monitoring |
| LG-02 | DE.AE-3 | A.8.16 | 8.2 | Administrative event logging |
| IR-01 | RS.MI-1 | A.5.24–A.5.30 | 17.1 | Full IR plan alignment |
| IR-02 | RS.IM-1 | A.5.31 | 17.2 | Mandatory post-incident review |
| DP-01 | PR.DS-1 | A.5.12 | 3.1 | Data classification |
| DP-02 | PR.DS-2 | A.8.24 | 4.4 | Encryption requirements |
| VR-01 | ID.SC-1 | A.5.22 | 15.1 | Vendor assessment required |
| VR-02 | ID.SC-4 | A.5.23 | 15.2 | Evidence-based assurance |
| CO-01 | ID.BE-5 | A.5.29 | 11.1 | RTO/RPO defined |
| CO-02 | RS.RP-1 | A.8.13 | 11.6 | Recovery testing |

---

## Maturity Roadmap Snapshot

| Stage | Description | Target Date |
|--------|-------------|--------------|
| Level 2 → 3 | Documented, repeatable controls | In progress |
| Level 3 → 4 | Monitoring + automation | 12–18 months |
| Level 4 → 5 | Predictive self-healing | Future horizon |

---

## Evidence Sources

- SIEM dashboards  
- Access review reports  
- Vendor assessments  
- Incident summaries  
- Audit artifacts  
- Controls testing records  


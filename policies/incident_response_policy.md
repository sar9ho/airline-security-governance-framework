# SkyShield Airlines — Incident Response Policy

## 1. Purpose
The purpose of this Incident Response (IR) Policy is to ensure that cybersecurity incidents are detected, reported, analyzed, contained, eradicated, and recovered from in a structured, timely, and repeatable manner, minimizing business impact to SkyShield Airlines

## 2. Scope
This policy applies to all SkyShield Airlines employees, contractors, systems, applications, networks, and data assets, whether on-premise or cloud-hosted

## 3. Policy Statements

- IR-01: SkyShield shall maintain and routinely update an Incident Response Plan (IRP) aligned to NIST Special Publication 800-61 Rev.2
- IR-02: All suspected or confirmed security incidents must be reported within 15 minutes to the Security Operations function via the designated reporting channel (e.g., security@skyshield)
- IR-03: Incidents shall be classified by severity and potential business impact (see Section 5)
- IR-04: Incident handling must follow the NIST-defined lifecycle:
  1. Preparation  
  2. Detection & Analysis  
  3. Containment  
  4. Eradication  
  5. Recovery  
  6. Lessons Learned
- IR-05: Only authorized personnel may perform forensic evidence collection or system modifications during active investigations
- IR-06: Post-incident “Lessons Learned” reviews must occur within 5 business days for all Medium+ incidents and must include documented improvements

## 4. Roles & Responsibilities

| Role | Responsibility |
|------|----------------|
| Security Operations Lead | Primary owner of IRP, lead coordinator |
| IR Response Team | Performs triage, analysis, containment & recovery |
| Asset Owners | Provide system access and business context |
| Communications/PR | Approves external messaging & media responses |
| Legal & Compliance | Assesses regulatory obligations and notification |
| HR | Coordinates if insiders or employees involved |

## 5. Incident Severity Classification

| Level | Description | Required Response Time | Notification Requirements |
|--------|-------------|-------------------------|---------------------------|
| **Low (S1)** | Minimal operational impact | Within 4 hours | Security only |
| **Medium (S2)** | Disruption or minor data exposure | Within 1 hour | Security + IT + Asset Owner |
| **High (S3)** | PII/financial data compromise, major downtime | Within 30 min | Execs + Legal + Risk + Vendor (if applicable) |
| **Critical (S4)** | Safety, regulatory, or public impact | Immediate | Board-level + Regulators + PR |

## 6. Evidence Handling

- Chain of custody must be preserved
- Logs, images, and artifacts must be stored in secure evidence repository
- Time synchronization (NTP) is mandatory for log sources

## 7. Communications Protocol
- No employee may communicate externally without PR + Legal approval
- Reporter confidentiality is protected

## 8. Exceptions
Any deviation must be documented in the Exception Register and approved by Security Leadership

## 9. References
- NIST 800-61 Rev.2  
- NIST CSF RS  
- ISO 27001 Annex A.16  

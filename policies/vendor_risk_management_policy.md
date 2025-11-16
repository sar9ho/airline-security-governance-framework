# SkyShield Airlines — Vendor & Third-Party Risk Management Policy

## 1. Purpose
To ensure third-party service providers handling SkyShield systems or data meet security, privacy, and compliance requirements appropriate to the risk associated with their services

## 2. Scope
Applies to all third-party vendors, managed service providers, contractors, SaaS/PaaS/IaaS services, and data processors that store, process, or transmit SkyShield data or provide critical operational capabilities

## 3. Policy Statements

- VRM-01: All vendors must undergo a security risk assessment prior to onboarding and at least annually thereafter
- VRM-02: Vendors processing **Confidential** or **Restricted** data must provide proof of security certifications (e.g., SOC2, ISO 27001, PCI DSS, FedRAMP if applicable)
- VRM-03: Vendor contracts must include:
  - Data protection clauses and breach notification requirements (≤ 48 hours)
  - Right-to-audit, security questionnaire rights, and SLA terms
  - Data location, retention, and deletion requirements.
- VRM-04: Vendors must support MFA, encryption in transit and at rest, and secure development practices
- VRM-05: High-risk vendors must be recorded in the Vendor Risk Register and assigned a Risk Owner
- VRM-06: If a vendor fails security expectations, compensating controls or exit plans must be documented

## 4. Risk Tiering Model

| Tier | Criteria | Requirements |
|------|----------|--------------|
| **Low** | No sensitive data, non-critical operations | Basic contract + annual review |
| **Medium** | Internal/Confidential data or operational dependency | Security questionnaire + SLA verification |
| **High** | Restricted data or critical business dependency | SOC2/ISO proof, pen test report, data flow mapping, annual onsite or virtual review |

## 5. Continuous Monitoring Controls

- Breach/news alerts
- Certificate expiration checks
- SLA availability monitoring

## 6. Termination Requirements

- Data must be returned or securely deleted within 30 days
- Access credentials must be revoked immediately
- Destruction certificates must be retained

## 7. References
- NIST CSF ID.SC  
- ISO 27001 Annex A.15  
- CIS Control 15 (Service Provider Management)  

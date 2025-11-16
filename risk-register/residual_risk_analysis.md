# SkyShield Airlines - Residual Risk Analysis

This document evaluates the strength of current controls for each risk and calculates residual risk using the formula:

Residual Risk = Inherent Risk × (1 - (Control Strength / 5))

---

## R01 - Account Takeover (A01)

**Current Controls:**
- MFA enforced
- Bot detection and IP throttling
- User anomaly alerts
- Known compromised credential screening (optional)

**Control Strength Score:** 4  
**Residual Risk Score:** 16 × (1 - 4/5) = 3.2 → **Low**

**Explanation:** Controls are layered, automated, and monitored.

---

## R02 - Loyalty DB Exfiltration (A02)

**Current Controls:**
- Encryption at rest and in transit
- RBAC with least privilege
- No direct internet access
- Security event monitoring

**Control Strength Score:** 3  
**Residual Risk Score:** 15 × (1 - 3/5) = 6 → **Medium**

**Explanation:** Good baseline security, but insider/privileged risk remains.

---

## R03 - HR/Payroll SaaS Breach (A03)

**Current Controls:**
- Vendor SOC2 & ISO certifications
- Contract-based audit rights
- SSO enforcement

**Control Strength Score:** 3  
**Residual Risk Score:** 12 × (1 - 3/5) = 4.8 → **Low**

**Explanation:** Controls strong but dependent on vendor posture.

---

## R04 - IAM Privilege Escalation (A04)

**Current Controls:**
- MFA, SSO, conditional access
- Privileged access workflows
- Configuration logging
- Quarterly entitlement reviews (manual)

**Control Strength Score:** 3  
**Residual Risk Score:** 15 × (1 - 3/5) = 6 → **Medium**

**Explanation:** Critical system — reviews not yet automated.

---

## R05 - Airport Dispatch Outage (A05)

**Current Controls:**
- Network segmentation
- Offline manual fallbacks
- Physical access controls

**Control Strength Score:** 2  
**Residual Risk Score:** 10 × (1 - 2/5) = 6 → **Medium**

**Explanation:** Lack of hot failover and redundancy is risk driver.

---

## R06 - Log Tampering (A06)

**Current Controls:**
- Immutable log configuration
- Restricted access to SIEM
- Hashing and backup strategy

**Control Strength Score:** 4  
**Residual Risk Score:** 8 × (1 - 4/5) = 1.6 → **Low**

**Explanation:** High integrity controls significantly reduce risk.

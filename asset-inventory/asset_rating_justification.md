# SkyShield Airlines – Asset Rating Justification Log

This document supports and explains the assigned Data Classification and CIA (Confidentiality, Integrity, Availability) ratings for each asset. Each justification must reference the criteria defined in `classification_criteria.md`.

---

## A01 – Customer Booking Web App
- **Data Classification:** Confidential  
  - Contains customer profile data but does not itself store full PII records (those are in A02).  
- **Availability: High**  
  - Defined as mission-critical: downtime directly impacts sales and customer service.  
- **Confidentiality: High**
  - Compromise leads to credential reuse attacks and potential identity fraud.  
- **Integrity: High**
  - Booking errors cause financial loss, operational routing problems, and customer disputes.

---

## A02 – Loyalty Rewards Database
- **Data Classification:** Restricted  
  - Contains PII + stored-value balances → meets Restricted criteria per §1 definition.  
- **Availability: High**
  - Required to complete booking and redemption transactions.  
- **Confidentiality: High**
  - Exposure leads to identity theft, fraud, and PCI/regulatory implications.  
- **Integrity: High**
  - Incorrect balances = direct financial loss and customer claim liabilities.

---

## A03 – HR/Payroll SaaS (Workday-like)
- **Data Classification:** Confidential  
  - Contains employee personal and compensation data but not financial instruments.  
- **Availability: Medium**
  - Temporary outages tolerated; payroll can be delayed and still resolved.  
- **Confidentiality: High**
  - Exposure results in privacy breach, HR risk, and potential regulatory action.  
- **Integrity: High**
  - Incorrect salaries, tax data, or employment records create legal exposure.

---

## A04 – Identity & Access Management (IAM)
- **Data Classification:** Restricted  
  - Controls credentials and authentication → meets Restricted criteria.  
- **Availability: High**
  - Outage locks users out of all dependent platforms.  
- **Confidentiality: High**
  - Exposure compromises all downstream assets (single point of failure).  
- **Integrity: High**
  - Tampering enables privilege escalation and impersonation.

---

## A05 – Airport Ops Dispatch System
- **Data Classification:** Restricted  
  - Direct operational + potential safety impact → meets Restricted criteria.  
- **Availability: High**
  - Required for ground and flight operations; outage has physical impacts.  
- **Confidentiality: High**
  - Exposure may reveal sensitive schedules and operational routing info.  
- **Integrity: High**
  - Incorrect routing could cause safety, compliance, or scheduling failures.

---

## A06 – Security Logs & SIEM Platform
- **Data Classification:** Restricted  
  - Logs contain usernames, IPs, device info, session tokens or security events.  
- **Availability: Medium**
  - Investigation delays occur but can operate temporarily without full availability.  
- **Confidentiality: High**
  - Disclosure enables attackers to map defenses and identify vulnerabilities.  
- **Integrity: High**
  - Altered logs destroy forensic reliability and legal admissibility.

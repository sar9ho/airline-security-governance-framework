# SkyShield Airlines – Data Classification & Criticality Criteria

This document defines the rules used to determine Data Classification and CIA (Confidentiality, Integrity, Availability) Criticality for SkyShield Airlines assets. All assigned values must reflect these criteria and be defensible to auditors.

---

## 1. Data Classification Levels

| Level | Description | Examples |
|--------|-------------|-----------|
| **Public** | Information approved for unrestricted release | Marketing pages, public FAQs |
| **Internal** | Non-sensitive business information meant only for employees | Internal documentation, training materials |
| **Confidential** | Sensitive business information or limited personal data, unauthorized access causes business risk | Employee info, internal application data, financial reports |
| **Restricted** | Highly sensitive data whose exposure causes major legal, financial, safety, or operational harm | PII, credentials, tokens, flight ops, payment data |

---

## 2. CIA Criticality Rating Criteria

### 2.1 Confidentiality Impact

| Rating | Definition | Indicators |
|--------|------------|------------|
| Low | Minimal impact if disclosed | Info already shared broadly internally |
| Medium | Noticeable business, contractual, or trust impact | Proprietary methods, internal logs |
| High | Regulatory, safety, or financial impact | PII, credentials, operational data, auth systems |

### 2.2 Integrity Impact

| Rating | Definition | Indicators |
|--------|------------|------------|
| Low | Incorrect data causes inconvenience only | Minor UI display issues |
| Medium | Incorrect data causes workflow disruption | Incorrect HR or scheduling info |
| High | Incorrect data causes financial, legal, or safety harm | Flight routing, identity changes, loyalty balances |

### 2.3 Availability Impact

| Rating | Definition | Indicators |
|--------|------------|------------|
| Low | Temporary loss tolerated; workaround exists | Non-critical internal systems |
| Medium | Business disruption but recoverable | HR portal, non-critical analytics |
| High | Operational halt, safety issue, or major outage | Booking, IAM, dispatch, SIEM, payment systems |

---

## 3. Crown Jewel Criteria
An asset is designated **Critical ("Yes")** if it meets any of the following:

- Supports **core revenue operations**
- Hosts **restricted or regulated data**
- Is a **single point of failure**
- Has **direct safety or legal impact**
- Loss impacts **customer trust or brand reputation**


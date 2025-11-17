# Exception Register Overview

The SkyShield Airlines Exception Register records all formally accepted deviations from policies, standards, configurations, timelines, and controls. Exceptions are time-bound, risk-assessed, approved by the appropriate authority, and monitored until closure.

The full detailed spreadsheet lives here:  
`07-exception-register/exceptions_log.xlsx`

---

## Exception Governance Principles

- Exceptions **do not equal permission** — they are **temporary risk acceptances**
- Must include compensating controls
- Must have a defined expiration date
- Cannot auto-renew without formal review
- Must state an accountable **Risk Owner**
- Must map to a **relevant Risk ID** (R01–Rxx)

---

## Current Exception Summary

| Exception ID | Asset | Description | Temporary | Expiration | Residual Risk | Status | Notes |
|--------------|--------|-------------|-----------|------------|----------------|--------|--------|
| **E01** | A01 | Critical patch delay due to release freeze | Yes | 2025-03-31 | Medium | Approved | Must be patched before next release |
| **E02** | A03 | HR retention extension for audit backlog | Yes | 2025-06-01 | Medium | Pending | Needs formal legal justification |
| **E03** | ADM-GRP | Temporary MFA bypass for automation | Yes | 2025-02-28 | High | Approved – Urgent | Must convert to service account |
| **E04** | A05 | Legacy OT encryption non-compliance | No | 2025-09-01 | High | Approved – Conditional | Q3 upgrade mandated |

---

## Exception Review Cadence

| Risk Level | Review Frequency | Authority |
|------------|------------------|------------|
| Low | Annually | Control Owner |
| Medium | Semi-annual | Security Management |
| High | Quarterly | CISO or Delegate |
| Critical | Monthly | CISO + COO |

---

## Closure Requirements

An exception can be closed only when:

1. The original root cause is eliminated, **or**
2. A compensating control is upgraded to an **equal or stronger permanent control**, **or**
3. The asset is **decommissioned**, and risk no longer applies

Documentation must include:  
Closure Date • Final Evidence • Updated Risk Score • Ticket/PR link • Sign-off Owner

---

## Related Documentation

- `policies/access_control_policy.md`
- `policies/vulnerability_management_policy.md`
- `governance/vendor_risk.md`

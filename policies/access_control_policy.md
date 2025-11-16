# SkyShield Airlines – Access Control Policy

## 1. Purpose
To ensure that access to SkyShield Airlines information systems is granted on a least-privilege, need-to-know basis and is appropriately authenticated, authorized, and reviewed

## 2. Scope
Applies to all employees, contractors, systems, and applications that store, process, or transmit SkyShield data

## 3. Policy Statements

- AC-01: All users must authenticate using unique identifiers; shared accounts are prohibited except for approved service accounts
- AC-02: Multi-Factor Authentication (MFA) is required for:
  - Administrative access to any production system
  - Remote access to internal resources
  - Access to Restricted data (see classification_criteria.md)
- AC-03: Access to Critical Assets (see asset_register.xlsx) must be role-based and approved by the appropriate asset owner
- AC-04: Privileged access must be reviewed at least quarterly; access that is no longer required must be revoked within 24 hours
- AC-05: Default credentials must be changed prior to deployment
- AC-06: Terminated or transferred users must have access removed or updated within one business day

## 4. Roles & Responsibilities

- Security Team: Defines access standards, monitors for violations
- Asset Owners: Approve and review access to systems under their ownership
- HR: Notifies IT/Security of joins/moves/leaves

## 5. Exceptions
Any deviation from this policy must be recorded in the Exception Register and approved by the Security Lead

## 6. References
- NIST CSF PR.AC
- ISO 27001 Annex A.9 (Access Control)

# SkyShield Airlines - Logging & Monitoring Policy

## 1. Purpose
To ensure that security-relevant events are logged, protected, and monitored to support detection, investigation, and response activities

## 2. Scope
Applies to all production systems, applications, and network components that support SkyShield operations

## 3. Policy Statements

- LM-01: All Critical Assets must generate logs for authentication, authorization, configuration changes, and security events
- LM-02: Logs from Critical Assets must be centralized into the Security Logs & SIEM Platform (asset A06)
- LM-03: Time synchronization (e.g., NTP) must be enabled on all logging sources
- LM-04: Logs must be retained for a minimum of 12 months for security investigations, unless superseded by regulatory requirements
- LM-05: Access to log data must be restricted to authorized personnel; log alteration or deletion is prohibited outside controlled processes
- LM-06: Security alerts must be triaged according to documented incident response procedures

## 4. Roles & Responsibilities

- Security Team: Owns SIEM configuration and alerting rules
- System Owners: Ensure their systems generate required logs
- Engineering: Implements logging libraries and forwarders

## 5. Exceptions
Exceptions must be recorded in the Exception Register with a documented business justification and compensating controls

## 6. References
- NIST CSF DE.CM, PR.PT
- ISO 27001 Annex A.12.4 (Logging and monitoring)

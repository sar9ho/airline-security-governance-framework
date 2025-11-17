# Logging & Monitoring Policy
**Version:** 1.0  
**Owner:** Security Operations  
**Standard Alignment:** NIST CSF DE, ISO 27001 Annex A.12, A.14  

## 1. Purpose
To ensure that system, application, cloud, and network activity is logged, retained, and monitored for security threats, investigations, and operational troubleshooting.

## 2. Scope
All production systems, endpoints, SaaS platforms, cloud services, and OT environments.

## 3. Policy Statements
- LM-01: All critical systems must generate security-relevant logs.
- LM-02: Logs must be centrally aggregated into the SIEM platform.
- LM-03: Time synchronization must be enabled via NTP.
- LM-04: Log retention must be a minimum of 12 months (hot or warm).
- LM-05: Privileged activity, failed logins, configuration changes, and data exports must be logged.
- LM-06: Alerting thresholds must be tuned quarterly to reduce false positives.

## 4. Log Review
- Daily for critical security alerts  
- Weekly for notable events  
- Monthly for compliance review  

## 5. References
- MITRE ATT&CK Detection Use Cases

export type RiskSeverity = 'Low' | 'Medium' | 'High';

export interface Risk {
  id: string;
  assetId: string;
  description: string;
  likelihood: number;
  impact: number;
  inherentScore: number;
  residualScore: number;
  severity: RiskSeverity;
}

export const risks: Risk[] = [
  {
    id: 'R01',
    assetId: 'A01',
    description: 'Account takeover via automated credential stuffing',
    likelihood: 4,
    impact: 4,
    inherentScore: 16,
    residualScore: 3.2,
    severity: 'Low',
  },
  {
    id: 'R02',
    assetId: 'A02',
    description: 'Unauthorized exfiltration of loyalty data',
    likelihood: 3,
    impact: 5,
    inherentScore: 15,
    residualScore: 6,
    severity: 'Medium',
  },
  {
    id: 'R03',
    assetId: 'A03',
    description: 'SaaS vendor compromise of HR platform',
    likelihood: 3,
    impact: 4,
    inherentScore: 12,
    residualScore: 4.8,
    severity: 'Low',
  },
  {
    id: 'R04',
    assetId: 'A04',
    description: 'Privilege escalation in IAM platform',
    likelihood: 3,
    impact: 5,
    inherentScore: 15,
    residualScore: 6,
    severity: 'Medium',
  },
  {
    id: 'R05',
    assetId: 'A05',
    description: 'Cyber/ops disruption of airport dispatch system',
    likelihood: 2,
    impact: 5,
    inherentScore: 10,
    residualScore: 6,
    severity: 'Medium',
  },
  {
    id: 'R06',
    assetId: 'A06',
    description: 'Log tampering or loss impacting forensics',
    likelihood: 2,
    impact: 4,
    inherentScore: 8,
    residualScore: 1.6,
    severity: 'Low',
  },
];

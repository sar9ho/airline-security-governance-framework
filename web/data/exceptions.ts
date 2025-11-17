export interface Exception {
  id: string;
  assetId: string;
  description: string;
  expiry: string;
  residualRisk: 'Low' | 'Medium' | 'High';
  status: string;
}

export const exceptions: Exception[] = [
  {
    id: 'E01',
    assetId: 'A01',
    description: 'Critical patch delayed due to production freeze',
    expiry: '2025-03-31',
    residualRisk: 'Medium',
    status: 'Approved',
  },
  {
    id: 'E02',
    assetId: 'A03',
    description: 'Retention extended 24 months for audit backlog',
    expiry: '2025-06-01',
    residualRisk: 'Medium',
    status: 'Pending',
  },
  {
    id: 'E03',
    assetId: 'ADM-GRP',
    description: 'Temporary MFA bypass for automation script',
    expiry: '2025-02-28',
    residualRisk: 'High',
    status: 'Approved – Urgent',
  },
  {
    id: 'E04',
    assetId: 'A05',
    description: 'Legacy OT encryption below standard; upgrade planned',
    expiry: '2025-09-01',
    residualRisk: 'High',
    status: 'Approved – Conditional',
  },
];

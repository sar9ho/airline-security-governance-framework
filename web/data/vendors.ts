export interface Vendor {
  id: string;
  name: string;
  service: string;
  tier: 'Low' | 'Medium' | 'High' | 'Critical';
  dataClassification: string;
  residualRisk: 'Low' | 'Medium' | 'High';
}

export const vendors: Vendor[] = [
  {
    id: 'V01',
    name: 'WorkForceCloud Inc.',
    service: 'HR & Payroll SaaS (A03)',
    tier: 'High',
    dataClassification: 'Confidential',
    residualRisk: 'Medium',
  },
  {
    id: 'V02',
    name: 'AuthSecure Identity Services',
    service: 'Identity & Access Management (A04)',
    tier: 'Critical',
    dataClassification: 'Restricted',
    residualRisk: 'Medium',
  },
  {
    id: 'V03',
    name: 'FlyMetrics Data Analytics',
    service: 'Customer revenue analytics',
    tier: 'Medium',
    dataClassification: 'Confidential',
    residualRisk: 'Low',
  },
  {
    id: 'V04',
    name: 'SkyOps CommLink',
    service: 'Ground ops messaging & dispatch',
    tier: 'Critical',
    dataClassification: 'Restricted',
    residualRisk: 'High',
  },
];

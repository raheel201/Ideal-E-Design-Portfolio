export type BondType = 'interest' | 'maturity';

export interface Bond {
  id: string;
  type: BondType;
  company: string;
  amount: string;
  maturityDate?: string;
  interestRate?: number;
}

export interface BondPortfolio {
  id: string;
  bonds: Bond[];
  totalValue: string;
  totalInterest: string;
}
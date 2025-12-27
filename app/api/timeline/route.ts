import { NextResponse } from 'next/server';

type TimelineMarking = {
  id: string;
  positionTop: string;
  cardsPositionTop?: string;
  eventDate: string;
  eventAmount: string;
  bonds: Array<{
    id: string;
    type: 'interest' | 'maturity';
    company: string;
    amount: string;
  }>;
};

const timelineMarkings: TimelineMarking[] = [
  {
    id: '1',
    positionTop: '121px',
    cardsPositionTop: '101px',
    eventDate: '22 Jan 2025',
    eventAmount: '49,127.00',
    bonds: [
      {
        id: '1',
        type: 'interest',
        company: '7.5% POWER FINANCE CORPORATION LIMITED 01/Aug/2026',
        amount: '27,117.00',
      },
      {
        id: '2',
        type: 'maturity',
        company: '7.5% POWER FINANCE CORPORATION LIMITED 01/Aug/2026',
        amount: '27,117.00',
      },
    ],
  },
  {
    id: '2',
    positionTop: '551px',
    cardsPositionTop: '531px',
    eventDate: '28 Dec 2025',
    eventAmount: '1,51,993.00',
    bonds: [
      {
        id: '4',
        type: 'maturity',
        company: '0% EDELWEISS FINANCIAL SERVICES LIMITED 01/Feb/2027',
        amount: '1,51,993.00',
      },
    ],
  },
  {
    id: '3',
    positionTop: '956px',
    cardsPositionTop: '936px',
    eventDate: '01 Feb 2026',
    eventAmount: '49,127.00',
    bonds: [
      {
        id: '5',
        type: 'interest',
        company: '7.5% POWER FINANCE CORPORATION LIMITED 01/Aug/2026',
        amount: '49,127.00',
      },
    ],
  },
  {
    id: '4',
    positionTop: '1176px',
    cardsPositionTop: '1156px',
    eventDate: '01 Aug 2026',
    eventAmount: '1,51,993.00',
    bonds: [
      {
        id: '7',
        type: 'maturity',
        company: '7.5% POWER FINANCE CORPORATION LIMITED 01/Aug/2026',
        amount: '1,51,993.00',
      },
      {
        id: '8',
        type: 'interest',
        company: '7.5% POWER FINANCE CORPORATION LIMITED 01/Aug/2026',
        amount: '27,117.00',
      },
    ],
  },
];

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: timelineMarkings,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch timeline data' },
      { status: 500 }
    );
  }
}

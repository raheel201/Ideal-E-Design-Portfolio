'use client';

import Image from 'next/image';
import TimelineEvent from './TimelineEvent';

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

export default function CashflowTimeline() {
  return (
    <main className="flex-1 bg-white">
      <div className="p-8 max-w-6xl mx-auto">
        <div className="relative flex flex-col items-center gap-[779px]">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-425 bg-gray-300" />

          {/* Timeline Markings */}
          {timelineMarkings.map((marking, index) => (
            <TimelineEvent
              key={marking.id}
              positionTop={marking.cardsPositionTop || marking.positionTop}
              eventDate={marking.eventDate}
              eventAmount={marking.eventAmount}
              bonds={marking.bonds}
              align={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}

          {/* Progress bar */}
          {timelineMarkings.map((marking) => (
            <div key={`mark-${marking.id}`} className="absolute left-1/2 transform -translate-x-1/2 z-20" style={{ top: marking.positionTop }}>
              <Image src="/assets/round-mark.svg" alt="Mark" width={18} height={18} />
            </div>
          ))}

          {/* 2025 Section */}
          <div className="relative z-10 h-16.5 w-57.5 flex flex-col justify-center">
            <div className="bg-[#0C4580] text-white px-2 py-2.5 rounded-lg text-center">
              <div className="text-md font-semibold">2025</div>
              <div className="text-sm">Total Payouts: ₹ 2,01,120.00</div>
            </div>
            <div className='h-2 absolute top-16.25 w-full bg-white'></div>
          </div>

          {/* 2026 Section */}
          <div className="relative z-10 h-16.5 w-57.5 flex flex-col justify-center">
            <div className='h-2 absolute bottom-16.25 w-full bg-white'></div>
            <div className="bg-[#0C4580] text-white px-2 py-2.5 rounded-lg text-center">
              <div className="text-md font-semibold">2026</div>
              <div className="text-sm">Total Payouts: ₹ 2,01,120.00</div>
            </div>
            <div className='h-2 absolute top-16.25 w-full bg-white'></div>

          </div>

          {/* Last Section */}
          <div className="relative flex flex-col z-10 h-16.5 w-57.5">
            <div className='h-2 absolute bottom-16.25 w-full bg-white'></div>
            <div className="bg-[#0C4580] text-white px-2 py-2.5 rounded-lg text-center">
             <Image src="/assets/flag-icon.svg" alt="Infinity" width={25} height={24} className="mx-auto py-2 mb-1" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

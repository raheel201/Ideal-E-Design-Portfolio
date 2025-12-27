'use client';

import { useEffect, useState } from 'react';
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

export default function CashflowTimeline() {
  const [timelineMarkings, setTimelineMarkings] = useState<TimelineMarking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTimeline = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/timeline');
        
        if (!response.ok) {
          throw new Error('Failed to fetch timeline data');
        }

        const result = await response.json();
        setTimelineMarkings(result.data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setTimelineMarkings([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTimeline();
  }, []);

  if (loading) {
    return (
      <main className="flex-1 bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg font-semibold text-[#002C59] mb-2">Loading timeline...</div>
          <div className="text-sm text-gray-500">Fetching your cashflow data</div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex-1 bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg font-semibold text-red-600 mb-2">Error</div>
          <div className="text-sm text-gray-500">{error}</div>
        </div>
      </main>
    );
  }

  return (
    <main className="mt-20 bg-white overflow-auto">
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
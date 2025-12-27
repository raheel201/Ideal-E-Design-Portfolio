'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Sidebar from '@/app/_components/Sidebar';
import Header from '@/app/_components/Header';

const tabs = [
  { id: 'summary', label: 'Active Portfolio Summary', path: '/summary' },
  { id: 'details', label: 'Portfolio Details', path: '/details' },
  { id: 'cashflow', label: 'Cashflow Timeline', path: '/cashflow' },
  { id: 'add', label: 'Add Bonds', path: '/add' },
  { id: 'matured', label: 'Matured Bonds', path: '/matured' },
];

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(() => {
    const tab = tabs.find((t) => t.path === pathname);
    return tab?.id || 'summary';
  });

  return (
    <div className="h-screen overflow-hidden flex bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        {children}
      </div>
    </div>
  );
}
'use client';

import Image from 'next/image';

type SidebarItem = {
  id: string;
  icon: string;
  label: string;
};

const sidebarItems: SidebarItem[] = [
    { id: 'dashboard', icon: '/assets/dashboard-icon.svg', label: 'Dashboard' },
    { id: 'portfolio', icon: '/assets/portfolio-icon.svg', label: 'Portfolio' },
  { id: 'money', icon: '/assets/money-bag.svg', label: 'Finance' },
  { id: 'settings', icon: '/assets/Vector.svg', label: 'Settings' },
];

export default function Sidebar() {

  return (
    <aside className="flex flex-col items-center py-23.75 gap-4.5 bg-primary">
      {sidebarItems.map((item) => (
        <button
          key={item.id}
          disabled
          className={`relative p-3 transition-all duration-200 cursor-default ${
            item.id === 'portfolio'
              ? 'bg-white'
              : ''
          }`}
          title={item.label}
        >
          <Image
            src={item.icon}
            alt={item.label}
            width={20}
            height={20}
            className="w-5 h-5"
          />
        </button>
      ))}
    </aside>
  );
}
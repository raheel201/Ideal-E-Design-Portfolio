'use client';

import { useState } from 'react';
import Image from 'next/image';

type NavTab = {
  id: string;
  label: string;
};

const navTabs: NavTab[] = [
  { id: 'summary', label: 'Active Portfolio Summary' },
  { id: 'details', label: 'Portfolio Details' },
  { id: 'cashflow', label: 'Cashflow Timeline' },
  { id: 'bonds', label: 'Add Bonds' },
];

export default function Header() {
  const [activeTab, setActiveTab] = useState('cashflow');

  return (
    <header className="flex-1 relative top-18.5">
      <div className="flex items-center justify-between px-5 pt-6 pb-3">
        <h1 className="text-xl text-gray-900">My <span className="font-semibold">Portfolio</span> </h1>
        
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600"><span className="font-semibold text-gray-900">Your RM: </span>Sanjay Singhania</span>
          <button className="hover:bg-gray-100 rounded-full">
            <Image src="/assets/phone-icon.svg" alt="Phone" width={14} height={14} />
          </button>
          <button className="hover:bg-gray-100 rounded-full">
            <Image src="/assets/whatsapp-icon.svg" alt="WhatsApp" width={14} height={14} />
          </button>
        </div>
      </div>

      <div className="flex items-center pb-0 border-b-4 mx-5 border-gray-200">
        <nav className="flex gap-8">
          {navTabs.map((tab) => (
            <div key={tab.id} className="relative">
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`text-sm py-2.75 ${tab.id === 'bonds' ? 'flex items-center gap-2 text-[#EF4822]' : ''} font-semibold transition-colors whitespace-nowrap ${
                  activeTab === tab.id && tab.id === 'bonds' ? 'text-[#EF4822]'
                  : activeTab === tab.id && tab.id !== 'bonds'
                    ? 'text-[#002C59]'
                    : 'text-[#666666] hover:text-gray-900'
                }`}
              >
                {tab.id === 'bonds' && (<Image src="/assets/plus-icon.svg" alt="Add" width={16} height={16} />)}
                {tab.label}
              </button>
              {activeTab === tab.id && (
                <div 
                  className={`absolute -bottom-1 left-0 right-0 h-1 rounded-lg ${
                    tab.id === 'bonds' ? 'bg-[#EF4822]' : 'bg-[#002C59]'
                  }`}
                />
              )}
            </div>
          ))}
        </nav>

        <div className="ml-auto relative">
          <button
            onClick={() => setActiveTab('matured')}
            className={`text-sm py-2.75 font-semibold transition-colors whitespace-nowrap ${
              activeTab === 'matured'
                ? 'text-[#002C59]'
                : 'text-[#666666] hover:text-gray-900'
            }`}
          >
            Matured Bonds
          </button>
          {activeTab === 'matured' && (
            <div className="absolute -bottom-1 left-0 right-0 h-1 rounded-lg bg-[#002C59]" />
          )}
        </div>
      </div>

      <div className="flex items-center justify-between px-5 py-4 gap-8">
        <div className="flex items-center justify-between w-full gap-8">
          {/* Dropdown */}
          <div className="flex items-center gap-3 w-62.5 h-10 relative">
            <select 
              className="px-4 py-2 pr-10 border w-full border-gray-300 rounded text-sm bg-white cursor-pointer hover:border-gray-400 focus:outline-none appearance-none"
              disabled
            >
              <option>All Bond Types</option>
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <Image src="/assets/arrow-down.svg" alt="Dropdown" width={14} height={16} />
            </div>
          </div>

          {/* Date Range */}
          <div className="flex items-center gap-6">
            <span className="text-sm">View Between Date Range</span>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center w-62.5 h-10 gap-2 border border-gray-300 rounded px-3 py-2">
                <input 
                  type="text"
                  placeholder="From Date"
                  className="text-sm w-full text-gray-600 bg-white focus:outline-none"
                  disabled
                />
                <Image src="/assets/calendar-icon.svg" alt="Calendar" width={14} height={15} />
              </div>
              
              <div className="flex items-center w-62.5 h-10 gap-2 border border-gray-300 rounded px-3 py-2">
                <input 
                  type="text"
                  placeholder="To Date"
                  className="text-sm w-full text-gray-600 bg-white focus:outline-none"
                  disabled
                />
                <Image src="/assets/calendar-icon.svg" alt="Calendar" width={14} height={15} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

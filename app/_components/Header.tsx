'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import CustomDropdown from '../(portfolio)/_components/common/CustomDropdown';
import CustomDatePicker from '../(portfolio)/_components/common/CustomDatePicker';

type NavTab = {
  id: string;
  label: string;
  path: string;
};

const navTabs: NavTab[] = [
  { id: 'summary', label: 'Active Portfolio Summary', path: '/portfolio/summary' },
  { id: 'details', label: 'Portfolio Details', path: '/portfolio/details' },
  { id: 'cashflow', label: 'Cashflow Timeline', path: '/portfolio/cashflow' },
  { id: 'add', label: 'Add Bonds', path: '/portfolio/add' },
];

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const router = useRouter();
  const [selectedBondType, setSelectedBondType] = useState('all');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const bondTypeOptions = [
    { id: 'all', label: 'All Bond Types' },
    { id: 'government', label: 'Government Bonds' },
    { id: 'corporate', label: 'Corporate Bonds' },
    { id: 'municipal', label: 'Municipal Bonds' },
    { id: 'treasury', label: 'Treasury Bonds' },
  ];

  const handleTabClick = (tab: NavTab) => {
    setActiveTab(tab.id);
    router.push(tab.path);
  };

  const handleMaturedBondsClick = () => {
    setActiveTab('matured');
    router.push('/portfolio/matured');
  };

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
                onClick={() => handleTabClick(tab)}
                className={`text-sm py-2.75 ${tab.id === 'add' ? 'flex items-center gap-2 text-[#EF4822]' : ''} font-semibold transition-colors whitespace-nowrap ${
                  activeTab === tab.id && tab.id === 'add' ? 'text-[#EF4822]'
                  : activeTab === tab.id && tab.id !== 'add'
                    ? 'text-[#002C59]'
                    : 'text-[#666666] hover:text-gray-900'
                }`}
              >
                {tab.id === 'add' && (<Image src="/assets/plus-icon.svg" alt="Add" width={16} height={16} />)}
                {tab.label}
              </button>
              {activeTab === tab.id && (
                <div 
                  className={`absolute -bottom-1 left-0 right-0 h-1 rounded-lg ${
                    tab.id === 'add' ? 'bg-[#EF4822]' : 'bg-[#002C59]'
                  }`}
                />
              )}
            </div>
          ))}
        </nav>

        <div className="ml-auto relative">
          <button
            onClick={handleMaturedBondsClick}
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
          <CustomDropdown
            options={bondTypeOptions}
            selectedValue={selectedBondType}
            onChange={setSelectedBondType}
            placeholder="All Bond Types"
          />

          {/* Date Range */}
          <div className="flex items-center gap-6">
            <span className="text-sm">View Between Date Range</span>
            
            <div className="flex items-center gap-4">
              <CustomDatePicker
                selectedDate={fromDate}
                onChange={setFromDate}
                placeholder="From Date"
              />
              
              <CustomDatePicker
                selectedDate={toDate}
                onChange={setToDate}
                placeholder="To Date"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
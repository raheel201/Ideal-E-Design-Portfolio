'use client';

import { useState } from 'react';
import Image from 'next/image';

interface DropdownOption {
  id: string;
  label: string;
}

interface CustomDropdownProps {
  options: DropdownOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function CustomDropdown({
  options,
  selectedValue,
  onChange,
  placeholder = 'Select an option',
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find((opt) => opt.id === selectedValue);

  return (
    <div className="relative w-62.5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-10 px-4 py-2 border border-gray-300 rounded text-sm bg-white text-gray-700 font-medium flex items-center justify-between hover:border-gray-400 transition-colors focus:outline-none focus:ring-1 focus:ring-[#002C59]"
      >
        <span>{selectedOption?.label || placeholder}</span>
        <Image
          src="/assets/arrow-down.svg"
          alt="Dropdown"
          width={14}
          height={16}
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-50">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => {
                onChange(option.id);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                selectedValue === option.id
                  ? 'bg-[#002C59] text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
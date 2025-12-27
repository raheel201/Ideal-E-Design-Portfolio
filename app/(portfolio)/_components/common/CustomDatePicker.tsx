'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface CustomDatePickerProps {
  selectedDate: string;
  onChange: (date: string) => void;
  placeholder?: string;
}

export default function CustomDatePicker({
  selectedDate,
  onChange,
  placeholder = 'Select Date',
}: CustomDatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const pickerRef = useRef<HTMLDivElement>(null);

  // Close picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handleDateClick = (day: number) => {
    const selected = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const dateString = selected.toISOString().split('T')[0];
    onChange(dateString);
    setIsOpen(false);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);
  const days = [];

  // Empty cells for days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // Days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const monthYear = currentMonth.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  const displayDate = selectedDate
    ? new Date(selectedDate).toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
    : placeholder;

  return (
    <div className="relative w-62.5" ref={pickerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-10 px-3 py-2 border border-gray-300 rounded text-sm bg-white text-gray-700 font-medium flex items-center gap-2 hover:border-gray-400 transition-colors focus:outline-none focus:ring-1 focus:ring-[#002C59]"
      >
        <span className="flex-1 text-left">{displayDate}</span>
        <Image src="/assets/calendar-icon.svg" alt="Calendar" width={14} height={15} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-50 p-4 w-80">
          {/* Month/Year Navigation */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handlePrevMonth}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
            >
              <span className="text-lg text-[#002C59]">←</span>
            </button>
            <span className="text-sm font-semibold text-gray-800">{monthYear}</span>
            <button
              onClick={handleNextMonth}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
            >
              <span className="text-lg text-[#002C59]">→</span>
            </button>
          </div>

          {/* Days of week header */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div
                key={day}
                className="text-center text-xs font-semibold text-gray-600 py-1"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, index) => (
              <button
                key={index}
                onClick={() => day && handleDateClick(day)}
                disabled={day === null}
                className={`py-1.5 text-sm rounded transition-colors ${
                  day === null
                    ? 'bg-transparent'
                    : selectedDate ===
                      new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
                        .toISOString()
                        .split('T')[0]
                    ? 'bg-[#002C59] text-white font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
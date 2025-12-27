import Image from 'next/image';

type Bond = {
    id: string;
    type: 'interest' | 'maturity';
    company: string;
    amount: string;
};

type TimelineEventProps = {
    positionTop: string;
    eventDate: string;
    eventAmount: string;
    bonds: Bond[];
    align?: 'left' | 'right';
};

export default function TimelineEvent({ positionTop, eventDate, eventAmount, bonds, align = 'left' }: TimelineEventProps) {
    const alignmentStyle = align === 'left' 
        ? { top: positionTop, left: 'calc(50% - 260px)' }
        : { top: positionTop, right: 'calc(50% - 328px)' };
    
    return (
        <div className="absolute z-20" style={alignmentStyle}>
            {/* Date Card */}
            <div className="border border-[#9BC1E3] h-[65px] w-[230px] rounded-lg py-3 px-4 bg-white flex items-start mb-4 relative">
                <div className='flex flex-col gap-0.5'>
                    <div className=" items-center flex gap-2">
                        <Image src="/assets/blue-calendar.svg" alt="Date" width={14} height={15} className=" shrink-0" />
                        <div className="text-sm font-semibold mt-0.25 text-[#0C4580]">{eventDate}</div>
                    </div>
                    <div className="text-sm"><span className='font-semibold'>Total Payouts: ₹</span> {eventAmount}</div>
                </div>
                {/* Triangle pointer - reversed for right alignment */}
                <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 6 6" 
                    className={`absolute top-7.25 transform -translate-y-1/2 fill-[#9BC1E3] ${align === 'left' ? '-right-4.5' : '-left-4.5'}`}
                    style={align === 'right' ? { transform: 'scaleX(-1)' } : {}}
                >
                    <polygon points="0,0 6,3 0,6" />
                </svg>
            </div>

            {/* Vertical connecting line from date card to bond cards */}
            <div 
                className={`absolute ${bonds.length === 1 ? 'h-[94px]' : 'h-[265px]'} bg-[#E1E6E8] z-30`} 
                style={{ 
                    width: '1px',
                    [align === 'left' ? 'right' : 'left']: '96px',
                    top: '65px'
                }} 
            />

            {/* Bond Cards */}
            <div className="space-y-4">
                {bonds.map((bond) => (
                    <div key={bond.id} className="relative">
                        <div 
                            className="border w-[300px] h-[155px] relative top-4 border-[#E1E6E8] rounded-lg p-5 bg-white" 
                            style={{ 
                                borderWidth: '1px',
                                [align === 'left' ? 'right' : 'left']: '144px'
                            }}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <span
                                    className={`px-3 py-1.5 rounded text-white text-center text-xs w-[125px] h-[30px] font-semibold whitespace-nowrap ${bond.type === 'interest' ? 'bg-[#008C3B]' : 'bg-purple-600'
                                        }`}
                                >
                                    {bond.type === 'interest' ? 'Interest Payout' : 'Maturity Payout'}
                                </span>
                                <button className="text-gray-400 hover:text-gray-600 ml-auto">
                                    <Image src="/assets/circle-info.svg" alt="Info" width={16} height={16} />
                                </button>
                            </div>
                            <div className="text-sm font-semibold mb-2 leading-tight">{bond.company}</div>
                            <div className="text-sm">
                                <span className="font-semibold">Amount: ₹ </span>{bond.amount}
                            </div>
                        </div>
                        {/* Horizontal connecting line from bond card to vertical line */}
                        <div 
                            className="absolute top-1/2 transform -translate-y-1/2 w-12 bg-[#E1E6E8] z-30" 
                            style={{ 
                                height: '1px',
                                [align === 'left' ? 'right' : 'left']: '96px'
                            }} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
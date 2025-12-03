import { Search, RefreshCw, Filter, ChevronDown } from 'lucide-react';

interface P2PFiltersProps {
  amountFilter: string;
  setAmountFilter: (amount: string) => void;
  paymentFilter: string;
  setPaymentFilter: (payment: string) => void;
  paymentOptions: string[];
}

export default function P2PFilters({
  amountFilter,
  setAmountFilter,
  paymentFilter,
  setPaymentFilter,
  paymentOptions
}: P2PFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
      {/* Amount Input */}
      <div className="relative w-full sm:w-48">
        <div className="flex items-center bg-slate-800/50 rounded-md border border-slate-700">
          <span className="px-2 text-slate-400 text-xs">GH¢</span>
          <input
            type="number"
            value={amountFilter}
            onChange={(e) => setAmountFilter(e.target.value)}
            placeholder="Enter Amount"
            className="flex-1 bg-transparent px-2 py-1.5 outline-none text-xs text-white placeholder-slate-500"
          />
          <Search className="w-3 h-3 text-slate-400 mr-2" />
        </div>
      </div>


      <div className="relative w-full sm:w-48">
        <select
          value={paymentFilter}
          onChange={(e) => setPaymentFilter(e.target.value)}
          className="w-full bg-slate-800/50 border border-slate-700 rounded-md px-2 py-1.5 text-xs text-white appearance-none cursor-pointer"
        >
          {paymentOptions.map((option) => (
            <option key={option} value={option} className="bg-slate-800">
              {option}
            </option>
          ))}
        </select>
        <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>


      <div className="flex gap-2 sm:gap-3">
  
        <button className="flex items-center justify-center gap-1.5 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 rounded-md px-3 py-1.5 text-xs text-slate-400 transition-colors flex-1 sm:flex-none">
          <RefreshCw className="w-3 h-3" />
          <span className="hidden sm:inline">Refresh</span>
        </button>

  
        <button className="flex items-center justify-center gap-1.5 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 rounded-md px-3 py-1.5 text-xs text-slate-400 transition-colors flex-1 sm:flex-none">
          <Filter className="w-3 h-3" />
          <span className="hidden sm:inline">Filter</span>
        </button>
      </div>
    </div>
  );
}
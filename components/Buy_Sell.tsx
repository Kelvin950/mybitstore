import { useState } from "react";
import {Currency ,PaymentMethod} from "@/lib/types"
import { ChevronDown, Wallet, Smartphone, Building2, CreditCard, Plus } from 'lucide-react';
export default function Buy_Sell(){
const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');
  const [fromAmount, setFromAmount] = useState<string>('0.00');
  const [toAmount, setToAmount] = useState<string>('0.00');
  const [fromCurrency, setFromCurrency] = useState<Currency>({
    symbol: 'USD',
    name: 'US Dollar',
    icon: '💵'
  });
  const [toCurrency, setToCurrency] = useState<Currency>({
    symbol: 'BTC',
    name: 'Bitcoin',
    icon: '₿'
  });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<string>('eziepay');

  const paymentMethods: PaymentMethod[] = [
    { id: 'eziepay', name: 'Eziepay Global Wallet', icon: <Wallet className="w-4 h-4" /> },
    { id: 'mtn', name: 'MTN MOMO', icon: <Smartphone className="w-4 h-4" /> },
    { id: 'vodafone', name: 'Vodafone Cash', icon: <CreditCard className="w-4 h-4" /> },
    { id: 'bank', name: 'Bank Transfer', icon: <Building2 className="w-4 h-4" /> },
  ];

    return <>
      <div className="mt-12 glass-effect rounded-3xl p-8 shadow-2xl animate-slide-in" style={{ animationDelay: '0.2s' }}>
          {/* Tabs */}
          <div className="flex space-x-2 mb-8">
            <button
              onClick={() => setActiveTab('buy')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'buy'
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 shadow-lg shadow-indigo-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Buy
            </button>
            <button
              onClick={() => setActiveTab('sell')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                activeTab === 'sell'
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 shadow-lg shadow-indigo-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Sell
            </button>
          </div>

          {/* Currency Inputs */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* From */}
            <div>
              <label className="block text-sm text-slate-400 mb-3 font-medium">I want to buy</label>
              <div className="relative">
                <div className="flex items-center bg-slate-800/50 rounded-xl border border-slate-700 hover:border-indigo-500/50 transition-colors">
                  <div className="flex items-center space-x-2 px-4 py-3 border-r border-slate-700 cursor-pointer hover:bg-slate-700/30 transition-colors rounded-l-xl">
                    <span className="text-2xl">{fromCurrency.icon}</span>
                    <span className="font-semibold">{fromCurrency.symbol}</span>
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  </div>
                  <input
                    type="number"
                    value={fromAmount}
                    onChange={(e) => setFromAmount(e.target.value)}
                    className="flex-1 bg-transparent px-4 py-3 outline-none text-lg mono"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div className="mt-2 text-sm text-slate-500 mono">200-29,500 USD</div>
            </div>

            {/* To */}
            <div>
              <label className="block text-sm text-slate-400 mb-3 font-medium">I will receive</label>
              <div className="relative">
                <div className="flex items-center bg-slate-800/50 rounded-xl border border-slate-700 hover:border-indigo-500/50 transition-colors">
                  <div className="flex items-center space-x-2 px-4 py-3 border-r border-slate-700 cursor-pointer hover:bg-slate-700/30 transition-colors rounded-l-xl">
                    <span className="text-2xl">{toCurrency.icon}</span>
                    <span className="font-semibold">{toCurrency.symbol}</span>
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  </div>
                  <input
                    type="number"
                    value={toAmount}
                    onChange={(e) => setToAmount(e.target.value)}
                    className="flex-1 bg-transparent px-4 py-3 outline-none text-lg mono"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div className="mt-2 text-sm text-slate-500 mono">1 USDT ≈ 12.06 GHS</div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-8">
            <label className="block text-sm text-slate-400 mb-4 font-medium">Payment Services</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedPayment(method.id)}
                  className={`payment-btn flex items-center justify-center space-x-2 px-4 py-3.5 rounded-xl border bg-slate-800/30 ${
                    selectedPayment === method.id
                      ? 'active'
                      : 'border-slate-700 hover:border-slate-600'
                  }`}
                >
                  {method.icon}
                  <span className="text-sm font-medium">{method.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Buy Button */}
          <button className="w-full py-4 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:via-indigo-400 hover:to-purple-500 rounded-xl font-bold text-lg shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all hover:scale-[1.02] shimmer">
            Buy
          </button>
        </div>

    
    </>


}
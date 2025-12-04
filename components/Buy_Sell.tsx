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

    return <div className=" max-w-4xl mx-auto px-6">
      <div className="bg-[#212740] glass-effect rounded-2xl p-6 shadow-2xl animate-slide-in" style={{ animationDelay: '0.2s' }}>
          {/* Tabs */}
          <div className="flex justify-start mb-6">
            <div className="flex space-x-6">
              <button
                onClick={() => setActiveTab('buy')}
                className={`px-2 py-1.5 font-medium transition-all text-sm border-b-2 ${
                  activeTab === 'buy'
                    ? 'border-blue-500 text-white'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                Buy
              </button>
              <button
                onClick={() => setActiveTab('sell')}
                className={`px-2 py-1.5 font-medium transition-all text-sm border-b-2 ${
                  activeTab === 'sell'
                    ? 'border-blue-500 text-white'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                Sell
              </button>
            </div>
          </div>

    
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
     
            <div>
              <label className="block text-xs text-slate-400 mb-2 font-medium">I want to buy</label>
              <div className="relative">
                <div className="flex items-center bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                  <div className="flex items-center space-x-2 px-3 py-2.5 border-r border-slate-700 cursor-pointer hover:bg-slate-700/30 transition-colors rounded-l-xl">
                    <span className="text-lg">{fromCurrency.icon}</span>
                    <span className="font-medium text-sm">{fromCurrency.symbol}</span>
                    <ChevronDown className="w-3 h-3 text-slate-400" />
                  </div>
                  <input
                    type="number"
                    value={fromAmount}
                    onChange={(e) => setFromAmount(e.target.value)}
                    className="flex-1 bg-transparent px-3 py-2.5 outline-none text-sm mono"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div className="mt-1 text-xs text-slate-500 mono">200-29,500 USD</div>
            </div>

     
            <div>
              <label className="block text-xs text-slate-400 mb-2 font-medium">I will receive</label>
              <div className="relative">
                <div className="flex items-center bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                  <div className="flex items-center space-x-2 px-3 py-2.5 border-r border-slate-700 cursor-pointer hover:bg-slate-700/30 transition-colors rounded-l-xl">
                    <span className="text-lg">{toCurrency.icon}</span>
                    <span className="font-medium text-sm">{toCurrency.symbol}</span>
                    <ChevronDown className="w-3 h-3 text-slate-400" />
                  </div>
                  <input
                    type="number"
                    value={toAmount}
                    onChange={(e) => setToAmount(e.target.value)}
                    className="flex-1 bg-transparent px-3 py-2.5 outline-none text-sm mono"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div className="mt-1 text-xs text-slate-500 mono">1 USDT ≈ 12.06 GHS</div>
            </div>
          </div>

     
          <div className="mb-6">
            <label className="block text-xs text-slate-400 mb-3 font-medium">Payment Services</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedPayment(method.id)}
                  className={`payment-btn flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border text-center transition-all ${
                    selectedPayment === method.id
                      ? 'active border-blue-500 bg-blue-500/10 text-blue-400'
                      : 'border-slate-700 hover:border-slate-600 bg-slate-800/30 text-slate-300 hover:text-white'
                  }`}
                >
                  {method.icon}
                  <span className="text-sm font-medium">{method.name}</span>
                </button>
              ))}
            </div>
          </div>

         
          <div className="flex justify-start">
            <button className="px-6 py-2 rounded-md font-medium transition-all text-sm bg-blue-600 text-white hover:bg-blue-700">
              {activeTab === 'buy' ? 'Buy' : 'Sell'}
            </button>
          </div>
        </div>
      </div>
}
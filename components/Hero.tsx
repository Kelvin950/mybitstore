
import { ChevronDown, Wallet, Smartphone, Building2, CreditCard, Plus } from 'lucide-react';
export default function Hero(){

    return <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 animate-slide-in">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent leading-tight">
              Just Click To Buy
            </h1>
            <p className="text-xl text-slate-400 font-light tracking-wide">
              Using Various Payment Method
            </p>
          </div>

          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-glow"></div>
            <div className="relative">
              <div className="w-64 h-64 relative">
                <Wallet className="w-32 h-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-400" />
                <CreditCard className="w-20 h-20 absolute top-8 right-8 text-purple-400 rotate-12" />
                <Smartphone className="w-16 h-16 absolute bottom-12 left-8 text-blue-400 -rotate-12" />
              </div>
            </div>
          </div>
        </div>
        </div>

}
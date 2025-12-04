import { Wallet, Smartphone, CreditCard } from 'lucide-react';

export default function HowToBuy(){
    return <div className="max-w-4xl mx-auto px-6 py-8 animate-slide-in" style={{ animationDelay: '0.4s' }}>
        <h2 className="text-2xl font-bold mb-8 text-center">How to Buy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Create a account', icon: Smartphone },
            { title: 'Verify KYC and Add payment method', icon: CreditCard },
            { title: 'Funds account', icon: Wallet }
          ].map((step, index) => (
            <div
              key={index}
              className="glass-effect bg-[#212740] rounded-xl p-6 text-center group hover:scale-105 transition-all"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <step.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-sm font-medium text-slate-300">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
}
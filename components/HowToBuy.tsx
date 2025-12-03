import { ChevronDown, Wallet, Smartphone, Building2, CreditCard, Plus } from 'lucide-react';
export default function HowToBuy(){
    return  <div className="mt-20 animate-slide-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-bold mb-12">How to Buy</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Create a account', icon: Smartphone, color: 'indigo' },
              { title: 'Verify KYC and Add payment method', icon: CreditCard, color: 'purple' },
              { title: 'Funds account', icon: Wallet, color: 'blue' }
            ].map((step, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all cursor-pointer group"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-${step.color}-500/30 group-hover:shadow-${step.color}-500/50 transition-all group-hover:scale-110`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
            ))}
          </div>
        </div>

}
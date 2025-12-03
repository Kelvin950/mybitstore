 import { ChevronDown, Wallet, Smartphone, Building2, CreditCard, Plus } from 'lucide-react';
 import { useState } from 'react';
 
 const faqItems = [
    'How to create an account on Mybitstore',
    'How to verify your identity',
    'How to make your first purchase',
    'Understanding transaction fees',
    'Security best practices',
    'Withdrawal processing times'
  ];

export default function FAQ(){

      const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    return  <div className="mt-20 animate-slide-in" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-3xl font-bold mb-12">FAQ</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {faqItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                className="glass-effect rounded-xl p-5 text-left hover:border-indigo-500/50 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 group-hover:text-white transition-colors">{item}</span>
                  <Plus className={`w-5 h-5 text-slate-400 transition-all ${expandedFaq === index ? 'rotate-45' : ''}`} />
                </div>
                {expandedFaq === index && (
                  <div className="mt-4 text-slate-400 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
    
}
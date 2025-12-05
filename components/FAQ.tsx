import { Plus } from 'lucide-react';
import { useState } from 'react';
import { Card } from "@/components/ui/card";
 
const faqItems = [
  'How to create an account on Mybitstore',
  'How to create an account on Mybitstore', 
  'How to create an account on Mybitstore',
  'How to create an account on Mybitstore',
  'How to create an account on Mybitstore',
  'How to create an account on Mybitstore'
];

export default function FAQ(){
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  return <div className=" max-w-4xl mx-auto px-6 py-8 animate-slide-in" style={{ animationDelay: '0.6s' }}>
    <h2 className="text-2xl font-bold mb-8 text-center">FAQ</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {faqItems.map((item, index) => (
        <Card
          key={index}
          onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
          className="glass-effect bg-[#212740] border-slate-700 hover:border-blue-500/50 transition-all group cursor-pointer py-4 gap-0"
        >
          <div className="flex items-center justify-between w-full px-6">
            <span className="text-slate-300 group-hover:text-white transition-colors text-sm">{item}</span>
            <Plus className={`w-4 h-4 text-slate-400 transition-all ${expandedFaq === index ? 'rotate-45' : ''}`} />
          </div>
          {expandedFaq === index && (
            <div className="px-6 pt-3 text-slate-400 text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          )}
        </Card>
      ))}
    </div>
  </div>
}
import { Button } from "@/components/ui/button";

interface TableItemProps {
  id: string;
  name: string;
  txCount: number;
  successRate: number;
  priceGHS: string;
  quantity: string;
  limits: string;
  paymentMethods: string[];
  activeTab: 'buy' | 'sell';
}

export default function TableItem({

  name,
  txCount,
  successRate,
  priceGHS,
  quantity,
  limits,
  paymentMethods,
  activeTab
}: TableItemProps) {
  return (
    <div className="grid grid-cols-12 gap-4 items-center py-4 border-b border-slate-700">

      <div className="col-span-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#254cb2] flex items-center justify-center text-slate-300">
          {name.charAt(0).toUpperCase()}
        </div>
        <div>
          <div className="font-medium text-white">{name}</div>
          <div className="text-xs text-slate-400">{txCount} Transactions | {successRate}%</div>
        </div>
      </div>

  
      <div className="col-span-2 text-lg font-semibold text-white">{priceGHS}</div>

 
      <div className="col-span-3 text-sm text-slate-400">
        <div>{quantity}</div>
        <div className="mt-1">Limits {limits}</div>
      </div>


      <div className="col-span-2 text-sm text-slate-400">
        {paymentMethods.map((method, index) => (
          <div key={index} className="truncate"><span className="text-red-300">|</span> {method}</div>
        ))}
      </div>

 
      <div className="col-span-1 flex justify-end">
        <Button className="bg-[#2db288] hover:bg-[#27a77a] text-white">
          {activeTab === 'buy' ? 'Buy' : 'Sell'}
        </Button>
      </div>
    </div>
  );
}
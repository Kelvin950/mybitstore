import { useState } from 'react';
import TableItem from './TableItem';

interface TradeOffer {
  id: string;
  name: string;
  txCount: number;
  successRate: number;
  priceGHS: string;
  quantity: string;
  limits: string;
  paymentMethods: string[];
}

interface P2PTableProps {
  offers: TradeOffer[];
  selectedCrypto: string;
  activeTab: 'buy' | 'sell';
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export default function P2PTable({
  offers,
  selectedCrypto,
  activeTab,
  currentPage,
  setCurrentPage
}: P2PTableProps) {
  const itemsPerPage = 7;
  const totalPages = Math.ceil(offers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOffers = offers.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
 
      <div className="mt-6 border-t border-slate-700 pt-4 overflow-x-auto">
        {/* Table Header */}
        <div className="min-w-[800px] text-slate-400 text-sm grid grid-cols-12 gap-4 px-2">
          <div className="col-span-4">Advertisers</div>
          <div className="col-span-2">Price</div>
          <div className="col-span-3">Available/Limit</div>
          <div className="col-span-2">Payment</div>
          <div className="col-span-1">Trade</div>
        </div>

   
        <div className="mt-4 space-y-2 min-w-[800px]">
          {paginatedOffers.map((offer) => (
            <div key={offer.id} className="px-2">
              <TableItem
                id={offer.id}
                name={offer.name}
                txCount={offer.txCount}
                successRate={offer.successRate}
                priceGHS={offer.priceGHS}
                quantity={offer.quantity}
                limits={offer.limits}
                paymentMethods={offer.paymentMethods}
                activeTab={activeTab}
              />
            </div>
          ))}
        </div>
      </div>


      <div className="mt-6 flex items-center justify-center">
        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-transparent border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors text-sm"
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-8 md:w-10 h-8 md:h-10 rounded-full flex items-center justify-center transition-colors text-sm ${
                currentPage === i + 1 
                  ? "bg-white text-black" 
                  : "bg-transparent border border-slate-700 text-slate-400 hover:text-white"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-transparent border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors text-sm"
          >
            &gt;
          </button>
        </div>
      </div>
    </>
  );
}
"use client"
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import P2PHero from './P2P/P2PHero';
import P2PControls from './P2P/P2PControls';
import P2PFilters from './P2P/P2PFilters';
import P2PTable from './P2P/P2PTable';

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

export default function P2PTrading() {
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');
  const [selectedCrypto, setSelectedCrypto] = useState('USDT');

  const [amountFilter, setAmountFilter] = useState('');
  const [paymentFilter, setPaymentFilter] = useState('All Payments');
  const [currentPage, setCurrentPage] = useState(1);

  const cryptoOptions = ['USDT', 'BTC', 'ETH'];

  const paymentOptions = ['All Payments', 'MTN Mobile Money', 'Vodafone Cash', 'Bank Transfer', 'AirtelTigo Money'];

  const offers: TradeOffer[] = [
    {
      id: '1',
      name: 'Sam',
      txCount: 367,
      successRate: 97.34,
      priceGHS: 'GH¢11.56',
      quantity: 'Quantity: 100.00 USDT',
      limits: '50.00 - 400.00 GHS',
      paymentMethods: ['MTN Mobile Money', 'Vodafone Cash']
    },
    {
      id: '2',
      name: 'Sam',
      txCount: 367,
      successRate: 97.34,
      priceGHS: 'GH¢11.56',
      quantity: 'Quantity: 100.00 USDT',
      limits: '50.00 - 400.00 GHS',
      paymentMethods: ['MTN Mobile Money', 'Vodafone Cash']
    },
    {
      id: '3',
      name: 'Sam',
      txCount: 367,
      successRate: 97.34,
      priceGHS: 'GH¢11.56',
      quantity: 'Quantity: 100.00 USDT',
      limits: '50.00 - 400.00 GHS',
      paymentMethods: ['MTN Mobile Money', 'Vodafone Cash']
    },
    {
      id: '4',
      name: 'Sam',
      txCount: 367,
      successRate: 97.34,
      priceGHS: 'GH¢11.56',
      quantity: 'Quantity: 100.00 USDT',
      limits: '50.00 - 400.00 GHS',
      paymentMethods: ['MTN Mobile Money', 'Vodafone Cash']
    },
    {
      id: '5',
      name: 'Sam',
      txCount: 367,
      successRate: 97.34,
      priceGHS: 'GH¢11.56',
      quantity: 'Quantity: 100.00 USDT',
      limits: '50.00 - 400.00 GHS',
      paymentMethods: ['MTN Mobile Money', 'Vodafone Cash']
    },
    {
      id: '6',
      name: 'Sam',
      txCount: 367,
      successRate: 97.34,
      priceGHS: 'GH¢11.56',
      quantity: 'Quantity: 100.00 USDT',
      limits: '50.00 - 400.00 GHS',
      paymentMethods: ['MTN Mobile Money', 'Vodafone Cash']
    },
    {
      id: '7',
      name: 'Alex',
      txCount: 245,
      successRate: 95.12,
      priceGHS: 'GH¢11.58',
      quantity: 'Quantity: 200.00 USDT',
      limits: '100.00 - 500.00 GHS',
      paymentMethods: ['Bank Transfer', 'AirtelTigo Money']
    },
    {
      id: '8',
      name: 'John',
      txCount: 189,
      successRate: 98.45,
      priceGHS: 'GH¢11.55',
      quantity: 'Quantity: 150.00 USDT',
      limits: '75.00 - 300.00 GHS',
      paymentMethods: ['MTN Mobile Money']
    },
    {
      id: '9',
      name: 'Mary',
      txCount: 156,
      successRate: 96.78,
      priceGHS: 'GH¢11.57',
      quantity: 'Quantity: 80.00 USDT',
      limits: '40.00 - 200.00 GHS',
      paymentMethods: ['Vodafone Cash', 'Bank Transfer']
    },
    {
      id: '10',
      name: 'David',
      txCount: 423,
      successRate: 99.12,
      priceGHS: 'GH¢11.54',
      quantity: 'Quantity: 300.00 USDT',
      limits: '150.00 - 800.00 GHS',
      paymentMethods: ['MTN Mobile Money', 'Vodafone Cash', 'Bank Transfer']
    }
  ];

  return (
    <div className="min-h-screen  py-6">

      <P2PHero />


      <div className="max-w-6xl mx-auto px-6 mt-6">
        <Card className="bg-[#212740] border-slate-700">
          <CardContent className="p-6">
     
            <div className="space-y-6 mb-8">
      
              <P2PControls
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                selectedCrypto={selectedCrypto}
                setSelectedCrypto={setSelectedCrypto}
                cryptoOptions={cryptoOptions}
              />

   
              <P2PFilters
                amountFilter={amountFilter}
                setAmountFilter={setAmountFilter}
                paymentFilter={paymentFilter}
                setPaymentFilter={setPaymentFilter}
                paymentOptions={paymentOptions}
              />
            </div>

 
            <P2PTable
              offers={offers}
              selectedCrypto={selectedCrypto}
              activeTab={activeTab}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
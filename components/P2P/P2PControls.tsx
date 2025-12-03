interface P2PControlsProps {
  activeTab: 'buy' | 'sell';
  setActiveTab: (tab: 'buy' | 'sell') => void;
  selectedCrypto: string;
  setSelectedCrypto: (crypto: string) => void;
  cryptoOptions: string[];
}

export default function P2PControls({
  activeTab,
  setActiveTab,
  selectedCrypto,
  setSelectedCrypto,
  cryptoOptions
}: P2PControlsProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">

      <div className="flex space-x-1 bg-slate-800/30 rounded-lg p-0.5">
        <button
          onClick={() => setActiveTab('buy')}
          className={`px-3 py-1.5 rounded-md font-medium transition-all text-xs ${
            activeTab === 'buy'
              ? 'bg-green-600 text-white'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setActiveTab('sell')}
          className={`px-3 py-1.5 rounded-md font-medium transition-all text-xs ${
            activeTab === 'sell'
              ? 'bg-green-600 text-white'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Sell
        </button>
      </div>

    
      <div className="flex gap-2 flex-wrap">
        {cryptoOptions.map((crypto) => (
          <button
            key={crypto}
            onClick={() => setSelectedCrypto(crypto)}
            className={`px-3 py-1.5 rounded-md border transition-all text-xs ${
              selectedCrypto === crypto
                ? 'border-green-500 bg-green-500/10 text-green-400'
                : 'border-slate-600 text-slate-400 hover:border-slate-500'
            }`}
          >
            {crypto === 'USDT' && '⚪'} {crypto === 'BTC' && '🟡'} {crypto === 'ETH' && '🔷'} {crypto}
          </button>
        ))}
      </div>
    </div>
  );
}
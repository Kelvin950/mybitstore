import { MessageCircle, Twitter, Instagram, Play } from 'lucide-react';

export default function Footer() {
  const companyLinks = [
    'About Us',
    'Privacy',
    'User Teams', 
    'Reward Terms'
  ];

  const productLinks = [
    'Buy & Sell Bitcoin',
    'Buy & Sell USDT',
    'OTC Trade',
    'Become Affiliate',
    'Exchange Gift Cards'
  ];

  const helpLinks = [
    'Support',
    'FAQ',
    'Blog',
    'Fees & Rates'
  ];

  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 mt-16">
      <div className="max-w-4xl mx-auto px-6 py-12">
   
        <div className="mb-8">
          <div className="flex items-center justify-between flex-col md:flex-row gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <span className="text-xl font-bold">M</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Mybitstore</span>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors">
                <Play className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

   
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-xs text-slate-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-xs text-slate-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Help</h3>
            <ul className="space-y-3">
              {helpLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-xs text-slate-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>


        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <a href="#" className="flex items-center space-x-3 bg-slate-800/50 rounded-lg px-4 py-2 hover:bg-slate-800 transition-colors">
            <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">P</span>
            </div>
            <div>
              <div className="text-xs text-slate-400">GET IT ON</div>
              <div className="text-sm font-medium text-white">Google Play</div>
            </div>
          </a>
          
          <a href="#" className="flex items-center space-x-3 bg-slate-800/50 rounded-lg px-4 py-2 hover:bg-slate-800 transition-colors">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <span className="text-black text-xs font-bold">🍎</span>
            </div>
            <div>
              <div className="text-xs text-slate-400">Download on the</div>
              <div className="text-sm font-medium text-white">App Store</div>
            </div>
          </a>
        </div>


        <div className="border-t border-slate-800 pt-6">
          <p className="text-xs text-slate-400 text-center">
            © 2022 Mybitstore, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
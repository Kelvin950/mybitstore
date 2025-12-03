import { Card, CardContent } from "@/components/ui/card";

export default function P2PHero() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl text-[#fff] font-bold mb-2">Explore 2000+ P2P offers</h1>
              <p className="text-slate-400 text-sm">Using Various Payment Method</p>
            </div>
            <div className="flex-shrink-0">
         
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <div className="relative">
                  <div className="w-8 h-8 bg-purple-600 rounded-md transform rotate-12"></div>
                  <div className="absolute top-0 left-2 w-6 h-6 bg-blue-500 rounded-md"></div>
                  <div className="absolute -top-1 left-4 w-4 h-4 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
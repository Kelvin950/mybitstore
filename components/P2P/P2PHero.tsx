import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function P2PHero() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      <Card className="bg-[#212740] border-slate-700">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl text-[#fff] font-bold mb-2">Explore 2000+ P2P offers</h1>
              <p className="text-slate-400 text-sm">Using Various Payment Method</p>
            </div>
            <div className="flex-shrink-0">
         
              <div className="w-16 h-16  rounded-lg flex items-center justify-center">
                <div className="">
                 <Image src="/images/image4.png" width={500} height={300} alt='hero' />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
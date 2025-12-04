
import {ChevronDown} from "lucide-react"
import { Button } from "@/components/ui/button"

import Link from "next/link"
import Image from "next/image"
export default function NavBar(){

    return <nav className=" top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 sm:space-x-12">
              <Link href="/" className="flex items-center">
                <Image
                  src="https://www.mybitstore.com/_next/static/media/mbs-logo.c8407159.svg" 
                  alt="Mybitstore Logo" 
                  width={150}
                  height={50}
                  className=""
                />
              </Link>
              
              <div className="hidden md:flex items-center space-x-8">
                <Button className="bg-transparent border-none shadow-none text-slate-300 hover:text-white transition-colors flex items-center space-x-1 group">
                  <span>Buy Crypto</span>
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </Button>
                <Link href="/p2p">
                  <Button className="bg-transparent border-none shadow-none text-slate-300 hover:text-white transition-colors">P2P Trading</Button>
                </Link>
                <Button className="bg-transparent border-none shadow-none text-slate-300 hover:text-white transition-colors">Earn</Button>
                <Button className="bg-transparent border-none shadow-none text-slate-300 hover:text-white transition-colors">Blog</Button>
              </div>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button className="bg-transparent border-none shadow-none px-3 sm:px-6 py-2 text-xs sm:text-sm text-slate-300 hover:text-white transition-colors">
                Login
              </Button>
              <Button className="px-3 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm bg-blue-600 hover:scale-105">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

}
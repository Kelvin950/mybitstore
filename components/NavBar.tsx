
import {ChevronDown} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function NavBar(){

    return <nav className="border-b border-slate-700/50 backdrop-blur-xl bg-slate-900/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-12">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/30">
                  <span className="text-xl font-bold">M</span>
                </div>
                <span className="text-2xl font-bold tracking-tight">Mybitstore</span>
              </Link>
              
              <div className="hidden md:flex items-center space-x-8">
                <Button className="text-slate-300 hover:text-white transition-colors flex items-center space-x-1 group">
                  <span>Buy Crypto</span>
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </Button>
                <Link href="/p2p">
                  <Button className="text-slate-300 hover:text-white transition-colors">P2P Trading</Button>
                </Link>
                <Button className="text-slate-300 hover:text-white transition-colors">Earn</Button>
                <Button className="text-slate-300 hover:text-white transition-colors">Blog</Button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button className="px-6 py-2 text-slate-300 hover:text-white transition-colors">
                Login
              </Button>
              <Button className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 rounded-lg font-medium shadow-lg shadow-indigo-500/30 transition-all hover:shadow-indigo-500/50 hover:scale-105">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

}
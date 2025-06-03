"use client"

import PageTemplate from "@/components/page-template"
import { Flame, Skull, TrendingUp } from "lucide-react"

export default function DegenZonePage() {
  return (
    <PageTemplate title="Degen Zone">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">😈</span>
        <p className="text-gray-300">
          Welcome to the Degen Zone! This is where you'll find the most volatile and high-risk, high-reward tokens.
          Trade at your own risk!
        </p>
      </div>

      <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4 mb-6">
        <div className="flex items-start gap-3">
          <Skull className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium text-sm mb-1">Extreme Risk Warning</h4>
            <p className="text-xs text-gray-300">
              Tokens in the Degen Zone are extremely volatile and carry a high risk of significant or total loss. Only
              trade with funds you can afford to lose completely. Many of these tokens have no utility or long-term
              value.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-[#252542] border border-gray-800 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Flame className="h-5 w-5 text-orange-400" />
            <h3 className="font-medium">Highest Volatility</h3>
          </div>
          <div className="space-y-2 mt-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-[#1a1a2e] p-3 rounded-lg flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                  <div>
                    <div className="font-medium">DEGEN{i}</div>
                    <div className="text-xs text-orange-400">Volatility: {90 + i}%</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={i % 2 === 0 ? "text-green-400" : "text-red-400"}>
                    {i % 2 === 0 ? "+" : "-"}
                    {Math.floor(Math.random() * 500)}%
                  </div>
                  <button className="bg-[#2F80ED] hover:bg-[#2D74D6] text-white px-3 py-1 rounded-md text-xs font-medium mt-1">
                    Trade
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#252542] border border-gray-800 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-5 w-5 text-green-400" />
            <h3 className="font-medium">Biggest Gainers (24h)</h3>
          </div>
          <div className="space-y-2 mt-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-[#1a1a2e] p-3 rounded-lg flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                  <div>
                    <div className="font-medium">MOON{i}</div>
                    <div className="text-xs text-gray-400">Vol: ${(Math.random() * 100000).toFixed(0)}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-400">+{Math.floor(Math.random() * 1000)}%</div>
                  <button className="bg-[#2F80ED] hover:bg-[#2D74D6] text-white px-3 py-1 rounded-md text-xs font-medium mt-1">
                    Trade
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#252542] border border-gray-800 rounded-lg p-4">
        <h3 className="font-medium mb-4">Degen Trading Strategies</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#1a1a2e] p-3 rounded-lg">
            <h4 className="font-medium text-sm mb-2">Snipe New Listings</h4>
            <p className="text-xs text-gray-300">
              Be the first to buy newly listed tokens before they pump. Set up alerts and use our sniper tools to get in
              early.
            </p>
            <button className="bg-[#2F80ED] hover:bg-[#2D74D6] text-white px-3 py-1 rounded-md text-xs font-medium mt-3 w-full">
              Set Up Sniper
            </button>
          </div>

          <div className="bg-[#1a1a2e] p-3 rounded-lg">
            <h4 className="font-medium text-sm mb-2">Leverage Trading</h4>
            <p className="text-xs text-gray-300">
              Amplify your gains (and risks) with leverage trading. Trade with up to 100x leverage on select tokens.
            </p>
            <button className="bg-[#2F80ED] hover:bg-[#2D74D6] text-white px-3 py-1 rounded-md text-xs font-medium mt-3 w-full">
              Trade with Leverage
            </button>
          </div>

          <div className="bg-[#1a1a2e] p-3 rounded-lg">
            <h4 className="font-medium text-sm mb-2">Copy Top Traders</h4>
            <p className="text-xs text-gray-300">
              Follow and automatically copy the trades of successful degen traders. Learn from the best in the game.
            </p>
            <button className="bg-[#2F80ED] hover:bg-[#2D74D6] text-white px-3 py-1 rounded-md text-xs font-medium mt-3 w-full">
              Find Traders
            </button>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}

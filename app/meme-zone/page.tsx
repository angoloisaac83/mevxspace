"use client"

import PageTemplate from "@/components/page-template"
import { Rocket, TrendingUp, AlertTriangle } from "lucide-react"

export default function MemeZonePage() {
  return (
    <PageTemplate title="Meme Zone">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">🤪</span>
        <p className="text-gray-300">
          Welcome to the Meme Zone! Discover and trade the latest meme tokens. These tokens are often highly volatile
          and based on internet culture, jokes, and trends.
        </p>
      </div>

      <div className="bg-[#252542] border border-gray-800 rounded-lg p-4 mb-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium text-sm mb-1">High Risk Warning</h4>
            <p className="text-xs text-gray-300">
              Meme tokens are extremely volatile and speculative. Only invest what you can afford to lose. Always do
              your own research before trading.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-[#252542] border border-gray-800 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-5 w-5 text-green-400" />
            <h3 className="font-medium">Trending Memes</h3>
          </div>
          <div className="space-y-2 mt-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#1a1a2e] p-3 rounded-lg flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                  <div>
                    <div className="font-medium">DOGE{i}</div>
                    <div className="text-xs text-green-400">+{Math.floor(Math.random() * 100)}%</div>
                  </div>
                </div>
                <button className="bg-[#2F80ED] hover:bg-[#2D74D6] text-white px-3 py-1 rounded-md text-xs font-medium">
                  Buy
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#252542] border border-gray-800 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Rocket className="h-5 w-5 text-purple-400" />
            <h3 className="font-medium">New Memes</h3>
          </div>
          <div className="space-y-2 mt-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#1a1a2e] p-3 rounded-lg flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                  <div>
                    <div className="font-medium">PEPE{i}</div>
                    <div className="text-xs text-gray-400">Just launched</div>
                  </div>
                </div>
                <button className="bg-[#2F80ED] hover:bg-[#2D74D6] text-white px-3 py-1 rounded-md text-xs font-medium">
                  Buy
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#252542] border border-gray-800 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-5 w-5 text-red-400" />
            <h3 className="font-medium">High Risk Memes</h3>
          </div>
          <div className="space-y-2 mt-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#1a1a2e] p-3 rounded-lg flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                  <div>
                    <div className="font-medium">MOON{i}</div>
                    <div className="text-xs text-red-400">-{Math.floor(Math.random() * 50)}%</div>
                  </div>
                </div>
                <button className="bg-[#2F80ED] hover:bg-[#2D74D6] text-white px-3 py-1 rounded-md text-xs font-medium">
                  Buy
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#252542] border border-gray-800 rounded-lg p-4">
        <h3 className="font-medium mb-4">Meme Token Calendar</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-[#1a1a2e]">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-400">Token</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-400">Launch Date</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-400">Initial Price</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-400">Current Price</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-400">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="hover:bg-[#1a1a2e]">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                      <span>MEME{i}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">May {10 + i}, 2025</td>
                  <td className="px-4 py-3 text-sm">${(0.0001 * i).toFixed(6)}</td>
                  <td className="px-4 py-3 text-sm">${(0.0001 * i * (Math.random() * 10 + 1)).toFixed(6)}</td>
                  <td className="px-4 py-3">
                    <button className="bg-[#2F80ED] hover:bg-[#2D74D6] text-white px-3 py-1 rounded-md text-xs font-medium">
                      Trade
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageTemplate>
  )
}

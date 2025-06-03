"use client"

import PageTemplate from "@/components/page-template"

export default function NewPairsPage() {
  return (
    <PageTemplate title="New Pairs">
      <p className="text-gray-300 mb-6">
        Discover the newest token pairs added to the market. Be the first to trade these tokens and potentially find
        gems before they gain popularity.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#252542] border border-gray-800 rounded-lg p-4">
          <h3 className="font-medium mb-2">Latest Listings</h3>
          <p className="text-sm text-gray-400 mb-4">These tokens were just added to the market in the last 24 hours.</p>
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#1a1a2e] p-3 rounded-lg flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                  <div>
                    <div className="font-medium">Token #{i}</div>
                    <div className="text-xs text-gray-400">Added 2h ago</div>
                  </div>
                </div>
                <button className="bg-[#2F80ED] hover:bg-[#2D74D6] text-white px-3 py-1 rounded-md text-xs font-medium">
                  Trade
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#252542] border border-gray-800 rounded-lg p-4">
          <h3 className="font-medium mb-2">Upcoming Listings</h3>
          <p className="text-sm text-gray-400 mb-4">
            These tokens are scheduled to be listed soon. Set up alerts to be notified when they go live.
          </p>
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#1a1a2e] p-3 rounded-lg flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                  <div>
                    <div className="font-medium">Upcoming #{i}</div>
                    <div className="text-xs text-gray-400">Listing in 2d</div>
                  </div>
                </div>
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-md text-xs font-medium">
                  Set Alert
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}

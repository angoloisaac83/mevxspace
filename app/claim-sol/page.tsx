"use client"

import PageTemplate from "@/components/page-template"
import { Coins, Gift, Clock, CheckCircle } from "lucide-react"

export default function ClaimSolPage() {
  return (
    <PageTemplate title="Claim SOL">
      <div className="flex items-center gap-2 mb-6">
        <Coins className="h-6 w-6 text-[#2F80ED]" />
        <p className="text-gray-300">
          Complete tasks to earn free SOL. Use it to pay for gas fees or trade tokens on the platform.
        </p>
      </div>

      <div className="bg-[#252542] border border-gray-800 rounded-lg p-4 mb-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="font-medium mb-1">Your SOL Balance</h3>
            <div className="text-3xl font-bold">0.05 SOL</div>
            <div className="text-xs text-gray-400">≈ $7.50</div>
          </div>

          <div className="flex flex-col gap-2">
            <button className="bg-[#2F80ED] hover:bg-[#2D74D6] text-white px-4 py-2 rounded-md text-sm font-medium">
              Claim Daily Reward
            </button>
            <div className="text-xs text-center text-gray-400">Next claim in 12h 30m</div>
          </div>
        </div>

        <div className="bg-[#1a1a2e] p-3 rounded-lg">
          <h4 className="font-medium text-sm mb-2">Claim History</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <Gift className="h-4 w-4 text-[#2F80ED]" />
                <span>Daily Reward</span>
              </div>
              <div className="text-right">
                <div>0.01 SOL</div>
                <div className="text-xs text-gray-400">May 10, 2025</div>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Task Completion</span>
              </div>
              <div className="text-right">
                <div>0.02 SOL</div>
                <div className="text-xs text-gray-400">May 9, 2025</div>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <Gift className="h-4 w-4 text-[#2F80ED]" />
                <span>Daily Reward</span>
              </div>
              <div className="text-right">
                <div>0.01 SOL</div>
                <div className="text-xs text-gray-400">May 9, 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#252542] border border-gray-800 rounded-lg p-4 mb-6">
        <h3 className="font-medium mb-4">Complete Tasks to Earn SOL</h3>
        <div className="space-y-3">
          <div className="bg-[#1a1a2e] p-3 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#2F80ED]/20 rounded-full flex items-center justify-center text-[#2F80ED]">
                  1
                </div>
                <div>
                  <div className="font-medium">Connect Your Wallet</div>
                  <div className="text-xs text-gray-400">Connect your wallet to MEVX</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-sm font-medium">0.01 SOL</div>
                <div className="bg-green-900/30 text-green-400 text-xs px-2 py-1 rounded">Completed</div>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a2e] p-3 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#2F80ED]/20 rounded-full flex items-center justify-center text-[#2F80ED]">
                  2
                </div>
                <div>
                  <div className="font-medium">Complete Your Profile</div>
                  <div className="text-xs text-gray-400">Fill out your profile information</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-sm font-medium">0.02 SOL</div>
                <button className="bg-[#2F80ED] hover:bg-[#2D74D6] text-white px-3 py-1 rounded-md text-xs font-medium">
                  Complete
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a2e] p-3 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#2F80ED]/20 rounded-full flex items-center justify-center text-[#2F80ED]">
                  3
                </div>
                <div>
                  <div className="font-medium">Make Your First Trade</div>
                  <div className="text-xs text-gray-400">Complete a trade on MEVX</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-sm font-medium">0.05 SOL</div>
                <button className="bg-[#2F80ED] hover:bg-[#2D74D6] text-white px-3 py-1 rounded-md text-xs font-medium">
                  Trade Now
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1a2e] p-3 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#2F80ED]/20 rounded-full flex items-center justify-center text-[#2F80ED]">
                  4
                </div>
                <div>
                  <div className="font-medium">Refer a Friend</div>
                  <div className="text-xs text-gray-400">Invite a friend to join MEVX</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-sm font-medium">0.1 SOL</div>
                <button className="bg-[#2F80ED] hover:bg-[#2D74D6] text-white px-3 py-1 rounded-md text-xs font-medium">
                  Get Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#252542] border border-gray-800 rounded-lg p-4">
        <h3 className="font-medium mb-4">Daily Rewards</h3>
        <div className="grid grid-cols-7 gap-2">
          {[1, 2, 3, 4, 5, 6, 7].map((day) => (
            <div
              key={day}
              className={`p-3 rounded-lg text-center ${day < 3 ? "bg-[#2F80ED]/20 border border-[#2F80ED]/30" : "bg-[#1a1a2e] border border-gray-800"}`}
            >
              <div className="font-medium mb-1">Day {day}</div>
              <div className="text-sm">{0.01 * day} SOL</div>
              {day < 3 && (
                <div className="mt-2 text-xs text-green-400 flex items-center justify-center gap-1">
                  <CheckCircle className="h-3 w-3" />
                  <span>Claimed</span>
                </div>
              )}
              {day === 3 && (
                <button className="mt-2 bg-[#2F80ED] hover:bg-[#2D74D6] text-white px-2 py-1 rounded text-xs w-full">
                  Claim
                </button>
              )}
              {day > 3 && (
                <div className="mt-2 text-xs text-gray-400 flex items-center justify-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>Locked</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  )
}

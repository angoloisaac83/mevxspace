"use client"

import type { ReactNode } from "react"
import { useRouter } from "next/navigation"
import { useWalletStore } from "@/lib/wallet-store"
import { motion } from "framer-motion"
import { AlertTriangle } from "lucide-react"

interface PageTemplateProps {
  title: string
  children: ReactNode
  requiresWallet?: boolean
}

export default function PageTemplate({ title, children, requiresWallet = true }: PageTemplateProps) {
  const router = useRouter()
  const { isConnected } = useWalletStore()

  // Redirect if wallet is required but not connected
  if (requiresWallet && !isConnected) {
    return (
      <div className="min-h-screen bg-[#121212] text-white p-4 md:p-8 flex flex-col items-center justify-center">
        <motion.div
          className="bg-[#1a1a1e] border border-red-800/30 rounded-lg p-6 max-w-md w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-lg font-medium mb-2">Wallet Connection Required</h2>
              <p className="text-sm text-gray-300 mb-4">
                You need to connect your wallet to access this feature. Please connect your wallet and try again.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => router.push("/")}
                  className="bg-[#2F80ED] hover:bg-[#2D74D6] text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Return Home
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white p-4 md:p-8">
      <motion.h1
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      <motion.div
        className="bg-[#1a1a1e] border border-gray-800 rounded-lg p-4 md:p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

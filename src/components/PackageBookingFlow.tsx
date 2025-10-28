import { useState } from "react";
import { ArrowLeft, Calendar, Clock, CreditCard, Wallet, Check, Info, ChevronRight } from "lucide-react";

interface PackageBookingFlowProps {
  packageData: {
    id: string;
    name: string;
    duration: string;
    sessions: number;
    coaches: {
      name: string;
      image: string;
      sport: string;
      sessions: number;
    }[];
    price: number;
  };
  onBack: () => void;
  onComplete: () => void;
}

interface PaymentPlan {
  id: string;
  name: string;
  installments: number;
  upfront: number;
  monthly: number;
  total: number;
  savings?: number;
}

export function PackageBookingFlow({ packageData, onBack, onComplete }: PackageBookingFlowProps) {
  const [step, setStep] = useState<"breakdown" | "payment" | "schedule">("breakdown");
  const [selectedPlan, setSelectedPlan] = useState<string>("full");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("");

  // Calculate pricing
  const basePrice = packageData.price;
  const discount = 0.15; // 15% max package discount
  const discountAmount = basePrice * discount;
  const subtotal = basePrice - discountAmount;
  const vat = subtotal * 0.05; // 5% VAT in UAE
  const depositRequired = subtotal * 0.20; // 20% deposit
  const totalPrice = subtotal + vat;

  // Payment plans
  const paymentPlans: PaymentPlan[] = [
    {
      id: "full",
      name: "Pay in Full",
      installments: 1,
      upfront: totalPrice,
      monthly: 0,
      total: totalPrice,
      savings: totalPrice * 0.05 // 5% savings for full payment
    },
    {
      id: "3month",
      name: "3-Month Plan",
      installments: 3,
      upfront: depositRequired,
      monthly: (totalPrice - depositRequired) / 3,
      total: totalPrice + (totalPrice * 0.02) // 2% fee
    },
    {
      id: "6month",
      name: "6-Month Plan",
      installments: 6,
      upfront: depositRequired,
      monthly: (totalPrice - depositRequired) / 6,
      total: totalPrice + (totalPrice * 0.04) // 4% fee
    }
  ];

  const selectedPlanData = paymentPlans.find(p => p.id === selectedPlan);

  return (
    <div className="fixed inset-0 z-50 bg-[#0f0f0f] overflow-y-auto">
      <div className="max-w-md mx-auto min-h-full flex flex-col">
        {/* Header */}
        <div className="flex-shrink-0 bg-gradient-to-b from-[#0f0f0f] to-transparent backdrop-blur-xl border-b border-white/10">
          <div className="px-5 py-5">
            <div className="flex items-center gap-4 mb-4">
              <button
                onClick={step === "breakdown" ? onBack : () => setStep("breakdown")}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5 text-white/60" />
              </button>
              <div>
                <h2 className="text-white mb-1">
                  {step === "breakdown" ? "Package Details" : step === "payment" ? "Payment Options" : "Schedule Sessions"}
                </h2>
                <p className="text-white/40 text-sm">{packageData.name}</p>
              </div>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center gap-2">
              {["breakdown", "payment", "schedule"].map((s, idx) => (
                <div key={s} className="flex items-center flex-1">
                  <div
                    className={`h-1 w-full rounded-full transition-all duration-300 ${
                      s === step
                        ? "bg-[#c6ff00]"
                        : ["breakdown", "payment", "schedule"].indexOf(step) > idx
                        ? "bg-[#c6ff00]/50"
                        : "bg-white/10"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 px-5 py-6 space-y-6">
          {step === "breakdown" && (
            <>
              {/* Package Overview */}
              <div className="bg-gradient-to-br from-[#c6ff00]/10 to-[#c6ff00]/5 rounded-2xl p-5 border border-[#c6ff00]/20">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-white/90 mb-1">{packageData.name}</h3>
                    <p className="text-white/60 text-sm">{packageData.duration} • {packageData.sessions} sessions</p>
                  </div>
                  <div className="text-right">
                    <div className="text-white/40 text-sm line-through">AED {basePrice.toLocaleString()}</div>
                    <div className="text-[#c6ff00]">15% OFF</div>
                  </div>
                </div>
              </div>

              {/* Coaching Team */}
              <div>
                <h3 className="text-white/90 mb-3">Your Coaching Team</h3>
                <div className="space-y-3">
                  {packageData.coaches.map((coach, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10"
                    >
                      <img
                        src={coach.image}
                        alt={coach.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="text-white/90 mb-0.5">{coach.name}</div>
                        <div className="text-white/60 text-sm">{coach.sport}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[#c6ff00]">{coach.sessions}</div>
                        <div className="text-white/40 text-sm">sessions</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Breakdown */}
              <div>
                <h3 className="text-white/90 mb-3">Price Breakdown</h3>
                <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Base Price</span>
                      <span className="text-white/90">AED {basePrice.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#c6ff00]">Package Discount (15%)</span>
                      <span className="text-[#c6ff00]">-AED {discountAmount.toLocaleString()}</span>
                    </div>
                    <div className="h-px bg-white/10" />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Subtotal</span>
                      <span className="text-white/90">AED {subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">VAT (5%)</span>
                      <span className="text-white/90">AED {vat.toFixed(2)}</span>
                    </div>
                    <div className="h-px bg-white/10" />
                    <div className="flex items-center justify-between">
                      <span className="text-white">Total</span>
                      <span className="text-[#c6ff00]">AED {totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  {/* Info Banner */}
                  <div className="px-4 py-3 bg-[#c6ff00]/10 border-t border-[#c6ff00]/20">
                    <div className="flex items-start gap-2 text-sm">
                      <Info className="w-4 h-4 text-[#c6ff00] mt-0.5 flex-shrink-0" />
                      <div className="text-white/60">
                        20% deposit required. Cancellation: 20% fee for cash refunds, 0% fee for in-app token conversion.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div>
                <h3 className="text-white/90 mb-3">What's Included</h3>
                <div className="space-y-2">
                  {[
                    `${packageData.sessions} personalized training sessions`,
                    "4 expert coaches across different disciplines",
                    "Progress tracking and performance analysis",
                    "Nutrition guidance and meal planning",
                    "24/7 chat support with your coaches",
                    "Flexible scheduling via VITA app",
                    "Video analysis of your technique"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-white/60">
                      <Check className="w-4 h-4 text-[#c6ff00] mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => setStep("payment")}
                className="w-full py-4 bg-gradient-to-br from-[#c6ff00] to-[#b5e600] hover:from-[#b5e600] hover:to-[#9fd600] rounded-xl text-black transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 shadow-[0_4px_16px_rgba(198,255,0,0.3)]"
              >
                <span>Continue to Payment</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {step === "payment" && (
            <>
              {/* Payment Plans */}
              <div>
                <h3 className="text-white/90 mb-3">Choose Payment Plan</h3>
                <div className="space-y-3">
                  {paymentPlans.map((plan) => (
                    <button
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                        selectedPlan === plan.id
                          ? "bg-[#c6ff00]/10 border-[#c6ff00]"
                          : "bg-white/5 border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="text-white/90 mb-1">{plan.name}</div>
                          <div className="text-white/60 text-sm">
                            {plan.installments === 1 ? "One-time payment" : `${plan.installments} monthly installments`}
                          </div>
                        </div>
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                            selectedPlan === plan.id
                              ? "border-[#c6ff00] bg-[#c6ff00]"
                              : "border-white/30"
                          }`}
                        >
                          {selectedPlan === plan.id && (
                            <Check className="w-4 h-4 text-black" />
                          )}
                        </div>
                      </div>

                      <div className="space-y-2 text-sm">
                        {plan.installments > 1 && (
                          <div className="flex items-center justify-between text-white/60">
                            <span>Deposit (20%)</span>
                            <span>AED {plan.upfront.toLocaleString()}</span>
                          </div>
                        )}
                        {plan.installments > 1 && (
                          <div className="flex items-center justify-between text-white/60">
                            <span>Monthly Payment</span>
                            <span>AED {plan.monthly.toLocaleString()}</span>
                          </div>
                        )}
                        <div className="flex items-center justify-between">
                          <span className="text-white/90">Total</span>
                          <span className="text-[#c6ff00]">AED {plan.total.toLocaleString()}</span>
                        </div>
                        {plan.savings && (
                          <div className="pt-2 border-t border-white/10">
                            <div className="text-[#c6ff00] text-sm">
                              Save AED {plan.savings.toFixed(0)} with full payment
                            </div>
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h3 className="text-white/90 mb-3">Payment Method</h3>
                <div className="space-y-3">
                  {[
                    { id: "wallet", name: "VITA Wallet", icon: Wallet, balance: "AED 5,240.00" },
                    { id: "card", name: "Credit/Debit Card", icon: CreditCard, balance: "" },
                  ].map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedPaymentMethod(method.id)}
                      className={`w-full p-4 rounded-xl border transition-all duration-300 text-left ${
                        selectedPaymentMethod === method.id
                          ? "bg-[#c6ff00]/10 border-[#c6ff00]"
                          : "bg-white/5 border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                            <method.icon className="w-6 h-6 text-[#c6ff00]" />
                          </div>
                          <div>
                            <div className="text-white/90 mb-0.5">{method.name}</div>
                            {method.balance && (
                              <div className="text-white/60 text-sm">{method.balance}</div>
                            )}
                          </div>
                        </div>
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                            selectedPaymentMethod === method.id
                              ? "border-[#c6ff00] bg-[#c6ff00]"
                              : "border-white/30"
                          }`}
                        >
                          {selectedPaymentMethod === method.id && (
                            <Check className="w-4 h-4 text-black" />
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Summary */}
              {selectedPlanData && (
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="text-white/90 mb-3">Payment Summary</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between text-white/60">
                      <span>Due Today</span>
                      <span className="text-[#c6ff00]">
                        AED {selectedPlanData.upfront.toLocaleString()}
                      </span>
                    </div>
                    {selectedPlanData.installments > 1 && (
                      <>
                        <div className="flex items-center justify-between text-white/60">
                          <span>Remaining ({selectedPlanData.installments - 1} payments)</span>
                          <span>AED {((selectedPlanData.total - selectedPlanData.upfront)).toLocaleString()}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* CTA */}
              <button
                onClick={() => setStep("schedule")}
                disabled={!selectedPaymentMethod}
                className="w-full py-4 bg-gradient-to-br from-[#c6ff00] to-[#b5e600] hover:from-[#b5e600] hover:to-[#9fd600] disabled:from-white/10 disabled:to-white/10 disabled:text-white/30 rounded-xl text-black transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 shadow-[0_4px_16px_rgba(198,255,0,0.3)] disabled:shadow-none"
              >
                <span>Continue to Scheduling</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {step === "schedule" && (
            <>
              <div className="text-center py-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#c6ff00] to-[#b5e600] flex items-center justify-center">
                  <Calendar className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-white/90 mb-2">Ready to Schedule!</h3>
                <p className="text-white/60 text-sm mb-6">
                  You can now book your sessions with each coach individually through their profiles
                </p>
              </div>

              <div className="bg-[#c6ff00]/10 rounded-2xl p-5 border border-[#c6ff00]/20 mb-6">
                <h4 className="text-white/90 mb-3">Next Steps:</h4>
                <div className="space-y-2 text-sm text-white/60">
                  {packageData.coaches.map((coach, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#c6ff00] mt-0.5 flex-shrink-0" />
                      <span>
                        Book {coach.sessions} sessions with {coach.name} ({coach.sport})
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onComplete}
                className="w-full py-4 bg-gradient-to-br from-[#c6ff00] to-[#b5e600] hover:from-[#b5e600] hover:to-[#9fd600] rounded-xl text-black transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 shadow-[0_4px_16px_rgba(198,255,0,0.3)]"
              >
                <span>Complete Purchase</span>
                <Check className="w-5 h-5" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

import { ArrowRight } from "lucide-react";

interface AuthProps {
  onSignUpUser: () => void;
  onSignUpCoach: () => void;
  onLogin: () => void;
}

export function Auth({ onSignUpUser, onSignUpCoach, onLogin }: AuthProps) {
  return (
    <div className="h-screen w-screen bg-[#0f0f0f] relative overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1574772135913-d519461c3996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMGNvYWNoJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzYxNTU0NzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Football coach training"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f]/70 via-[#0f0f0f]/50 to-[#0f0f0f]/90" />
        <div className="absolute inset-0 bg-[#0f0f0f]/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col">
        {/* Logo Section */}
        <div className="flex-1 flex flex-col items-center justify-center px-5">
          <div className="mb-20">
            <h1 
              className="text-white text-7xl tracking-[0.15em] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" 
              style={{ fontWeight: 200 }}
            >
              VIT<span className="inline-block scale-x-[-1] -ml-[0.08em]">Λ</span>
            </h1>
            <p className="text-white/60 text-center mt-5 tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Elite Fitness Training in Dubai
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-md mx-auto w-full px-5 pb-20 space-y-5">
          {/* Sign Up as User */}
          <button
            onClick={onSignUpUser}
            className="w-full bg-[#c6ff00] hover:bg-[#b8f000] text-black py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="tracking-wide">Sign Up as User</span>
            <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
          </button>

          {/* Sign Up as Coach */}
          <button
            onClick={onSignUpCoach}
            className="w-full bg-white/10 hover:bg-white/[0.15] backdrop-blur-md text-white py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 border-2 border-white/20 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="tracking-wide">Sign Up as Coach</span>
            <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
          </button>

          {/* Login Link */}
          <div className="text-center pt-5">
            <button
              onClick={onLogin}
              className="text-white/60 hover:text-[#c6ff00] transition-colors duration-300 tracking-wide"
            >
              Already have an account? <span className="underline underline-offset-4">Log In</span>
            </button>
          </div>
        </div>

        {/* Safe Area Bottom Spacer */}
        <div className="h-[env(safe-area-inset-bottom,0px)]" />
      </div>
    </div>
  );
}

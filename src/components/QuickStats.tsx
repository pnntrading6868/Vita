import { Flame, Footprints, Trophy } from "lucide-react";

export function QuickStats() {
  return (
    <div className="grid grid-cols-3 gap-3 mb-8">
      {/* Calories */}
      <div className="bg-[#c6ff00] rounded-3xl p-5 relative overflow-hidden shadow-lg shadow-[#c6ff00]/20">
        <div className="relative z-10">
          <div className="w-10 h-10 bg-black/10 rounded-xl flex items-center justify-center mb-3">
            <Flame className="w-5 h-5 text-black" strokeWidth={2.5} />
          </div>
          <div className="text-black mb-0.5">730</div>
          <div className="text-black/70 text-xs">Calories</div>
        </div>
        {/* Circular progress decoration */}
        <svg className="absolute -bottom-4 -right-4 w-24 h-24 opacity-10">
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="black"
            strokeWidth="6"
            fill="none"
            strokeDasharray="180 251.2"
            strokeLinecap="round"
            style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
          />
        </svg>
      </div>

      {/* Steps */}
      <div className="bg-[#2b2b2b] rounded-3xl p-5 relative overflow-hidden">
        <div className="relative z-10">
          <div className="w-10 h-10 bg-[#c6ff00]/10 rounded-xl flex items-center justify-center mb-3">
            <Footprints className="w-5 h-5 text-[#c6ff00]" strokeWidth={2.5} />
          </div>
          <div className="text-white mb-0.5">8.2k</div>
          <div className="text-gray-400 text-xs">Steps</div>
        </div>
      </div>

      {/* Streak */}
      <div className="bg-[#2b2b2b] rounded-3xl p-5 relative overflow-hidden">
        <div className="relative z-10">
          <div className="w-10 h-10 bg-[#c6ff00]/10 rounded-xl flex items-center justify-center mb-3">
            <Trophy className="w-5 h-5 text-[#c6ff00]" strokeWidth={2.5} />
          </div>
          <div className="text-white mb-0.5">7</div>
          <div className="text-gray-400 text-xs">Day Streak</div>
        </div>
        {/* Progress arc */}
        <svg className="absolute -bottom-2 -right-2 w-16 h-16 opacity-30">
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="#c6ff00"
            strokeWidth="3"
            fill="none"
            strokeDasharray="110 175.84"
            strokeLinecap="round"
            style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
          />
        </svg>
      </div>
    </div>
  );
}

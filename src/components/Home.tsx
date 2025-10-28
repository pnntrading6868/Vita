import { useState } from "react";
import { Send, Sparkles, ChevronRight, Clock, Dumbbell, Heart, Trophy, X, MapPin, TrendingUp, Star } from "lucide-react";

interface Package {
  id: string;
  title: string;
  duration: string;
  goal: string;
  image: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  coaches: {
    type: string;
    name: string;
    image: string;
    sport: string;
    sessions: number;
    focus: string;
  }[];
  description: string;
  highlights: string[];
  expectedResults: string[];
}

const packages: Package[] = [
  {
    id: "1",
    title: "Get a 6-Pack in 90 Days",
    duration: "90 Days",
    goal: "Sculpted Core & Definition",
    image: "https://images.unsplash.com/photo-1559146039-f3a4ed3e470a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Body Transformation",
    difficulty: "Intermediate",
    coaches: [
      {
        type: "Weight Training",
        name: "Marcus Johnson",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
        sport: "Strength Training",
        sessions: 36,
        focus: "Core strength, compound movements, progressive overload"
      },
      {
        type: "Cardio Coach",
        name: "Ahmed Al-Rashid",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
        sport: "Running & HIIT",
        sessions: 24,
        focus: "Fat burning HIIT, metabolic conditioning, endurance"
      },
      {
        type: "Sports Coach",
        name: "Carlos Rivera",
        image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&h=400&fit=crop",
        sport: "Pickleball",
        sessions: 12,
        focus: "Active recovery, agility, functional movement"
      },
      {
        type: "Recovery Coach",
        name: "Elena Rodriguez",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop",
        sport: "Yoga & Mobility",
        sessions: 18,
        focus: "Flexibility, stress management, muscle recovery"
      }
    ],
    description: "Complete body transformation program designed to reveal your abs through a combination of targeted strength training, high-intensity cardio, strategic sports conditioning, and proper recovery protocols.",
    highlights: [
      "3 strength sessions per week focusing on core and full-body",
      "2-3 HIIT cardio sessions for maximum fat burn",
      "Weekly pickleball sessions for active recovery",
      "2 yoga sessions per week for flexibility and recovery",
      "Personalized nutrition guidance included",
      "Progress tracking and body composition analysis"
    ],
    expectedResults: [
      "Visible abdominal definition within 90 days",
      "10-15% reduction in body fat percentage",
      "Increased core strength and stability",
      "Improved cardiovascular endurance",
      "Enhanced overall athletic performance"
    ]
  },
  {
    id: "2",
    title: "Tennis Mastery for Beginners",
    duration: "60 Days",
    goal: "From Zero to Rally Ready",
    image: "https://images.unsplash.com/photo-1714741980848-5b0b77d2cd68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Sport Specialization",
    difficulty: "Beginner",
    coaches: [
      {
        type: "Tennis Coach",
        name: "Sarah Mitchell",
        image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop",
        sport: "Tennis",
        sessions: 24,
        focus: "Technique fundamentals, footwork, match strategy"
      },
      {
        type: "Strength Coach",
        name: "Marcus Johnson",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
        sport: "Strength Training",
        sessions: 16,
        focus: "Tennis-specific strength, rotational power, injury prevention"
      },
      {
        type: "Cardio Coach",
        name: "Ahmed Al-Rashid",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
        sport: "Running & Conditioning",
        sessions: 12,
        focus: "Court endurance, speed, agility drills"
      },
      {
        type: "Recovery Coach",
        name: "Elena Rodriguez",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop",
        sport: "Yoga & Mobility",
        sessions: 12,
        focus: "Shoulder mobility, flexibility, injury prevention"
      }
    ],
    description: "Comprehensive tennis program that takes complete beginners to confident rally players through expert technique coaching, tennis-specific fitness, and proper recovery protocols.",
    highlights: [
      "4 tennis sessions per week with progressive skill development",
      "2 strength sessions focusing on tennis-specific movements",
      "Weekly cardio conditioning for court endurance",
      "Bi-weekly yoga for flexibility and injury prevention",
      "Video analysis of your technique",
      "Match play practice from week 6"
    ],
    expectedResults: [
      "Master basic strokes (forehand, backhand, serve)",
      "Confident rally ability with proper technique",
      "Understanding of court positioning and strategy",
      "Improved agility and court speed",
      "Ready for recreational match play"
    ]
  },
  {
    id: "3",
    title: "Boxing Journey: Beginner to Fighter",
    duration: "120 Days",
    goal: "Complete Boxing Foundation",
    image: "https://images.unsplash.com/photo-1570312530820-d0f15f33a4a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Combat Sports",
    difficulty: "Beginner",
    coaches: [
      {
        type: "Boxing Coach",
        name: "Jackson Hayes",
        image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&h=400&fit=crop",
        sport: "Boxing",
        sessions: 48,
        focus: "Technique, combinations, defensive skills, sparring"
      },
      {
        type: "Strength Coach",
        name: "Marcus Johnson",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
        sport: "Strength Training",
        sessions: 24,
        focus: "Explosive power, core strength, punching power"
      },
      {
        type: "Cardio Coach",
        name: "Ahmed Al-Rashid",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
        sport: "Running & HIIT",
        sessions: 24,
        focus: "Boxing-specific conditioning, stamina, footwork"
      },
      {
        type: "Recovery Coach",
        name: "Elena Rodriguez",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop",
        sport: "Yoga & Mobility",
        sessions: 20,
        focus: "Recovery, flexibility, mental preparation"
      }
    ],
    description: "Transform from complete beginner to competent boxer with a comprehensive 4-month program covering all aspects of boxing technique, conditioning, and mental preparation.",
    highlights: [
      "4 boxing sessions per week with progressive skill building",
      "2 strength training sessions for explosive power",
      "2 conditioning sessions for boxing-specific endurance",
      "Weekly recovery and flexibility work",
      "Shadowboxing and pad work mastery",
      "Introduction to controlled sparring (month 3+)"
    ],
    expectedResults: [
      "Master fundamental boxing techniques and combinations",
      "Develop powerful, accurate punches",
      "Build boxing-specific conditioning and endurance",
      "Learn defensive skills and head movement",
      "Ready for amateur sparring sessions"
    ]
  },
  {
    id: "4",
    title: "Marathon Ready in 16 Weeks",
    duration: "112 Days",
    goal: "Complete Your First Marathon",
    image: "https://images.unsplash.com/photo-1669806954505-936e77929af6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Endurance",
    difficulty: "Intermediate",
    coaches: [
      {
        type: "Running Coach",
        name: "Ahmed Al-Rashid",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
        sport: "Distance Running",
        sessions: 48,
        focus: "Progressive distance, pace management, race strategy"
      },
      {
        type: "Strength Coach",
        name: "Marcus Johnson",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
        sport: "Strength Training",
        sessions: 16,
        focus: "Running-specific strength, injury prevention, leg power"
      },
      {
        type: "Cross-Training",
        name: "Sophia Park",
        image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&h=400&fit=crop",
        sport: "Swimming & Cycling",
        sessions: 16,
        focus: "Active recovery, aerobic base, low-impact conditioning"
      },
      {
        type: "Recovery Coach",
        name: "Elena Rodriguez",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop",
        sport: "Yoga & Mobility",
        sessions: 16,
        focus: "Recovery, injury prevention, mental preparation"
      }
    ],
    description: "Scientifically-designed 16-week marathon training program that safely builds your endurance from base fitness to race-ready condition with proper recovery protocols.",
    highlights: [
      "4-5 running sessions per week with progressive mileage",
      "Weekly long runs building to 20+ miles",
      "Strength training for injury prevention",
      "Cross-training for active recovery",
      "Tapering strategy for peak race performance",
      "Nutrition and hydration planning"
    ],
    expectedResults: [
      "Complete a full marathon (26.2 miles)",
      "Build sustainable running endurance",
      "Injury-free training progression",
      "Confidence in race-day execution",
      "Lifetime running foundation"
    ]
  },
  {
    id: "5",
    title: "Cyclist Endurance Builder",
    duration: "90 Days",
    goal: "Century Ride Ready",
    image: "https://images.unsplash.com/photo-1626929383617-95c78cc193fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Endurance",
    difficulty: "Intermediate",
    coaches: [
      {
        type: "Cycling Coach",
        name: "Sophia Park",
        image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&h=400&fit=crop",
        sport: "Cycling",
        sessions: 36,
        focus: "Endurance building, climbing technique, pacing strategy"
      },
      {
        type: "Strength Coach",
        name: "Marcus Johnson",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
        sport: "Strength Training",
        sessions: 18,
        focus: "Leg power, core stability, cycling-specific strength"
      },
      {
        type: "Cardio Coach",
        name: "Ahmed Al-Rashid",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
        sport: "Running & HIIT",
        sessions: 12,
        focus: "Cross-training, VO2 max improvement"
      },
      {
        type: "Recovery Coach",
        name: "Elena Rodriguez",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop",
        sport: "Yoga & Mobility",
        sessions: 15,
        focus: "Hip flexibility, lower back care, recovery"
      }
    ],
    description: "Build cycling endurance to complete a 100-mile century ride through structured training, strength work, and proper recovery.",
    highlights: [
      "4 cycling sessions per week with progressive distance",
      "Long rides building to 80+ miles",
      "Strength training for power and injury prevention",
      "Hill climbing technique development",
      "Bike fit optimization guidance",
      "Nutrition and hydration strategies"
    ],
    expectedResults: [
      "Complete a 100-mile century ride",
      "Improved climbing ability",
      "Increased average speed and power output",
      "Better bike handling and efficiency",
      "Reduced fatigue on long rides"
    ]
  },
  {
    id: "6",
    title: "Swimmer's Performance Program",
    duration: "75 Days",
    goal: "Technique & Speed Mastery",
    image: "https://images.unsplash.com/photo-1506833787259-9d3b2eca6cdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Aquatics",
    difficulty: "Intermediate",
    coaches: [
      {
        type: "Swimming Coach",
        name: "Sophia Park",
        image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&h=400&fit=crop",
        sport: "Swimming",
        sessions: 36,
        focus: "Stroke technique, turns, breathing, speed work"
      },
      {
        type: "Strength Coach",
        name: "Marcus Johnson",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
        sport: "Strength Training",
        sessions: 20,
        focus: "Swimming-specific strength, shoulder stability, core power"
      },
      {
        type: "Dryland Coach",
        name: "Ahmed Al-Rashid",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
        sport: "Dryland Training",
        sessions: 15,
        focus: "Cardiovascular conditioning, explosive power"
      },
      {
        type: "Recovery Coach",
        name: "Elena Rodriguez",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop",
        sport: "Yoga & Mobility",
        sessions: 12,
        focus: "Shoulder mobility, flexibility, injury prevention"
      }
    ],
    description: "Elevate your swimming performance with focused technique refinement, strength building, and proper conditioning for competitive or fitness swimming.",
    highlights: [
      "5 pool sessions per week with video analysis",
      "Master all four competitive strokes",
      "Strength training for swimming power",
      "Dryland conditioning for endurance",
      "Flip turn and dive technique",
      "Race strategy and pacing"
    ],
    expectedResults: [
      "Improved stroke efficiency and technique",
      "Faster lap times across all distances",
      "Increased swimming-specific strength",
      "Better underwater work and turns",
      "Competition-ready skills"
    ]
  },
  {
    id: "7",
    title: "Basketball Skills Bootcamp",
    duration: "60 Days",
    goal: "Court Confidence & Skills",
    image: "https://images.unsplash.com/photo-1758798459456-eae18573fb04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Team Sports",
    difficulty: "Beginner",
    coaches: [
      {
        type: "Basketball Coach",
        name: "David Kim",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        sport: "Basketball",
        sessions: 24,
        focus: "Ball handling, shooting, game IQ, team play"
      },
      {
        type: "Strength Coach",
        name: "Marcus Johnson",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
        sport: "Strength Training",
        sessions: 16,
        focus: "Vertical jump, explosive power, lower body strength"
      },
      {
        type: "Conditioning Coach",
        name: "Ahmed Al-Rashid",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
        sport: "HIIT & Agility",
        sessions: 12,
        focus: "Court speed, agility, basketball conditioning"
      },
      {
        type: "Recovery Coach",
        name: "Elena Rodriguez",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop",
        sport: "Yoga & Mobility",
        sessions: 10,
        focus: "Ankle mobility, injury prevention, recovery"
      }
    ],
    description: "Complete basketball skills development program covering fundamentals, conditioning, and game situations to make you a confident player.",
    highlights: [
      "4 basketball sessions per week with skill progressions",
      "Shooting technique and consistency training",
      "Ball handling and dribbling mastery",
      "Strength training for explosiveness",
      "Game situation practice and scrimmages",
      "Court awareness and basketball IQ development"
    ],
    expectedResults: [
      "Confident ball handling and dribbling",
      "Consistent shooting form and accuracy",
      "Improved vertical jump and explosiveness",
      "Better court awareness and decision making",
      "Ready for recreational league play"
    ]
  },
  {
    id: "8",
    title: "Pickleball Excellence Path",
    duration: "45 Days",
    goal: "Tournament Ready Skills",
    image: "https://images.unsplash.com/photo-1666423489426-0c4db69512fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    category: "Racquet Sports",
    difficulty: "Beginner",
    coaches: [
      {
        type: "Pickleball Coach",
        name: "Carlos Rivera",
        image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&h=400&fit=crop",
        sport: "Pickleball",
        sessions: 20,
        focus: "Dinking, serving, third shot strategy, positioning"
      },
      {
        type: "Fitness Coach",
        name: "Marcus Johnson",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
        sport: "Functional Training",
        sessions: 12,
        focus: "Lateral movement, quick reactions, stability"
      },
      {
        type: "Agility Coach",
        name: "Ahmed Al-Rashid",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
        sport: "Agility Training",
        sessions: 10,
        focus: "Court speed, footwork, reaction time"
      },
      {
        type: "Recovery Coach",
        name: "Elena Rodriguez",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop",
        sport: "Yoga & Mobility",
        sessions: 8,
        focus: "Shoulder health, flexibility, mental game"
      }
    ],
    description: "Fast-track your pickleball skills from beginner to tournament-ready with expert coaching in strategy, technique, and conditioning.",
    highlights: [
      "5 pickleball sessions per week with match play",
      "Master the kitchen game and dinking",
      "Serve and return strategies",
      "Doubles positioning and communication",
      "Fitness training for court speed",
      "Tournament preparation and mental game"
    ],
    expectedResults: [
      "Confident in competitive play",
      "Master key pickleball strategies",
      "Improved court positioning and movement",
      "Consistent serves and returns",
      "Ready for local tournament play"
    ]
  }
];

interface HomeProps {
  onNavigateToCoach?: (coachId: string) => void;
  onStartPackage?: (packageId: string) => void;
}

export function Home({ onNavigateToCoach, onStartPackage }: HomeProps) {
  const [aiInput, setAiInput] = useState("");
  const [aiMessages, setAiMessages] = useState<{ role: "user" | "ai"; content: string }[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Dubai Marina");
  const [showLocationSelector, setShowLocationSelector] = useState(false);

  const locations = [
    "Dubai Marina",
    "Downtown Dubai",
    "Jumeirah",
    "Business Bay",
    "DIFC",
    "JBR",
    "Palm Jumeirah",
    "Dubai Hills"
  ];

  const localPromotions = [
    {
      id: "1",
      gym: "FitZone Marina",
      promo: "20% off first month",
      image: "https://images.unsplash.com/photo-1758778932790-da96c9f06969?w=600&h=400&fit=crop",
      distance: "0.8 km"
    },
    {
      id: "2",
      gym: "Elite Performance Center",
      promo: "Free assessment session",
      image: "https://images.unsplash.com/photo-1666478042380-ff2b5bf7dd06?w=600&h=400&fit=crop",
      distance: "1.2 km"
    },
    {
      id: "3",
      gym: "Marina Sports Club",
      promo: "New member special",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
      distance: "1.5 km"
    }
  ];

  const handleCoachClick = (coachName: string) => {
    // Convert coach name to ID format
    const coachId = coachName.toLowerCase().replace(/ /g, "-");
    onNavigateToCoach?.(coachId);
  };

  const handleSendMessage = () => {
    if (!aiInput.trim()) return;

    const userMessage = aiInput;
    setAiMessages([...aiMessages, { role: "user", content: userMessage }]);
    setAiInput("");

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "That's a great goal! Based on your interests, I'd recommend our '6-Pack in 90 Days' program. It combines strength training with HIIT cardio and includes recovery sessions. The cross-training approach ensures you don't plateau and keeps your body adapting.",
        "Excellent question! Cross-training is key to avoiding injuries and plateaus. By working with multiple coaches across different disciplines, you'll develop well-rounded fitness, prevent overuse injuries, and stay motivated with variety.",
        "I can definitely help with that! Looking at your goals, I suggest starting with our beginner programs. They're designed to build a solid foundation before progressing to more advanced training. Which sport interests you most?",
        "Perfect! The packages I've shown you each include 4 specialized coaches who work together on your journey. They communicate to ensure your training is balanced and progressive. You'll have weight training for strength, cardio for endurance, a sport coach for skill and fun, plus recovery work to prevent burnout.",
        "Great mindset! Consistency is more important than intensity when starting. Our programs are designed with progressive overload and proper recovery. You'll see results by showing up and trusting the process. Ready to start your transformation?"
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setAiMessages(prev => [...prev, { role: "ai", content: randomResponse }]);
    }, 1000);
  };

  return (
    <div className="h-full bg-[#0f0f0f] overflow-y-auto relative">
      <div className="max-w-md mx-auto pb-20">

        {/* Location Selector */}
        <div className="px-5 pt-5">
          <button
            onClick={() => setShowLocationSelector(!showLocationSelector)}
            className="w-full p-4 bg-[#1a1a1a] hover:bg-white/[0.07] rounded-xl border border-gray-800/30 flex items-center gap-3 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#c6ff00]/20 to-[#b5e600]/10 flex items-center justify-center border border-[#c6ff00]/30">
              <MapPin className="w-6 h-6 text-[#c6ff00]" />
            </div>
            <div className="flex-1 text-left">
              <div className="text-gray-400 text-sm mb-0.5">Training Location</div>
              <div className="text-white">{selectedLocation}</div>
            </div>
            <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${showLocationSelector ? 'rotate-90' : ''}`} />
          </button>

          {showLocationSelector && (
            <div className="mt-3 p-2 bg-white/5 rounded-xl border border-white/10">
              <div className="space-y-1">
                {locations.map((location) => (
                  <button
                    key={location}
                    onClick={() => {
                      setSelectedLocation(location);
                      setShowLocationSelector(false);
                    }}
                    className={`w-full px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                      selectedLocation === location
                        ? "bg-[#c6ff00] text-black"
                        : "text-white/70 hover:bg-white/10"
                    }`}
                  >
                    {location}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Local Promotions */}
        <div className="px-5 pt-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white">Local Gyms & Offers</h3>
            <TrendingUp className="w-5 h-5 text-[#c6ff00]" />
          </div>
          <div className="flex gap-3 overflow-x-auto pb-3 -mx-5 px-5" style={{ scrollbarWidth: 'none' }}>
            {localPromotions.map((promo) => (
              <div
                key={promo.id}
                className="flex-shrink-0 w-64 bg-[#1a1a1a] rounded-xl border border-gray-800/30 overflow-hidden hover:shadow-[0_4px_16px_rgba(0,0,0,0.4)] transition-all duration-300"
              >
                <div className="relative h-32">
                  <img
                    src={promo.image}
                    alt={promo.gym}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="text-white text-sm mb-0.5">{promo.gym}</div>
                    <div className="flex items-center justify-between">
                      <div className="text-[#c6ff00] text-xs">{promo.promo}</div>
                      <div className="flex items-center gap-1 text-white/60 text-xs">
                        <MapPin className="w-3 h-3" />
                        <span>{promo.distance}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Packages Feed */}
        <div className="px-5 pt-5 pb-5 space-y-5">
          <div>
            <h2 className="text-white mb-1">Built for Progress. Powered by VIT<span className="inline-block scale-x-[-1]">Λ</span>.</h2>
          </div>

          {/* Package Cards */}
          <div className="space-y-5">
            {packages.map((pkg) => (
              <button
                key={pkg.id}
                onClick={() => setSelectedPackage(pkg)}
                className="w-full group"
              >
                <div className="bg-[#1a1a1a] rounded-2xl border border-gray-800/30 overflow-hidden hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-[#c6ff00]/30">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-3 right-3 px-3 py-1.5 bg-[#c6ff00] rounded-lg text-black text-sm">
                      {pkg.duration}
                    </div>

                    {/* Difficulty */}
                    <div className="absolute top-3 left-3 px-3 py-1.5 bg-white/10 backdrop-blur-xl rounded-lg text-white text-sm border border-white/20">
                      {pkg.difficulty}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="text-white mb-1 text-left">{pkg.title}</h3>
                      <p className="text-[#c6ff00] text-sm text-left">{pkg.goal}</p>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <Dumbbell className="w-4 h-4" />
                        <span>{pkg.coaches.length} Coaches</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{pkg.coaches.reduce((sum, c) => sum + c.sessions, 0)} Sessions</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-2 border-t border-black/10">
                      <span className="text-gray-600 text-sm">View Details</span>
                      <ChevronRight className="w-5 h-5 text-[#c6ff00] group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Load More Indicator */}
          <div className="text-center py-8 text-gray-400 text-sm">
            Scroll for more programs...
          </div>
        </div>

        {/* Floating AI Chat Button */}
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-24 right-5 z-20 group"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-[#c6ff00] blur-2xl opacity-50 rounded-full scale-150 group-hover:scale-175 transition-transform duration-300"></div>
            
            {/* Button */}
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#c6ff00] via-[#b5e600] to-[#9fd600] flex items-center justify-center shadow-[0_8px_32px_rgba(198,255,0,0.4)] group-hover:shadow-[0_12px_40px_rgba(198,255,0,0.6)] transition-all duration-300 group-active:scale-95 border-2 border-[#c6ff00]/30">
              <Sparkles className="w-8 h-8 text-black animate-pulse" />
            </div>

            {/* Active indicator */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#c6ff00] rounded-full border-2 border-white animate-pulse"></div>
          </div>
        </button>
      </div>

      {/* Full Screen AI Chat */}
      {isChatOpen && (
        <div className="fixed inset-0 z-50 bg-white animate-fade-in">
          <div className="h-full flex flex-col max-w-md mx-auto">
            {/* Header */}
            <div className="flex-shrink-0 bg-white/80 backdrop-blur-xl border-b border-black/10 shadow-sm">
              <div className="px-5 py-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#c6ff00] blur-xl opacity-40 rounded-full"></div>
                      <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c6ff00] via-[#b5e600] to-[#9fd600] flex items-center justify-center shadow-[0_8px_24px_rgba(198,255,0,0.3)]">
                        <Sparkles className="w-7 h-7 text-[#1a1a1a] animate-pulse" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-[#1a1a1a] mb-1 flex items-center gap-2">
                        <span>VITA AI Guide</span>
                        <div className="px-2 py-0.5 bg-[#c6ff00]/20 rounded-md border border-[#c6ff00]/30">
                          <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 bg-[#c6ff00] rounded-full animate-pulse"></div>
                            <span className="text-[#1a1a1a] text-xs">Active</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-gray-500 text-sm">Your Personal Fitness Assistant</div>
                    </div>
                  </div>
                  
                  {/* Close Button */}
                  <button
                    onClick={() => setIsChatOpen(false)}
                    className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 border border-black/10 flex items-center justify-center transition-all duration-300 active:scale-95"
                  >
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-5 py-6 bg-gray-50">
              {aiMessages.length === 0 ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center space-y-4 max-w-xs">
                    <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-[#c6ff00]/20 to-[#b5e600]/10 flex items-center justify-center border border-[#c6ff00]/20">
                      <Sparkles className="w-10 h-10 text-[#c6ff00]" />
                    </div>
                    <div>
                      <h3 className="text-[#1a1a1a] mb-2">Ready to Transform?</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        I'm your AI fitness guide. Ask me anything about training programs, nutrition, or how to reach your fitness goals!
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {aiMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      {msg.role === "ai" && (
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#c6ff00] to-[#b5e600] flex items-center justify-center flex-shrink-0">
                          <Sparkles className="w-4 h-4 text-[#1a1a1a]" />
                        </div>
                      )}
                      <div
                        className={`max-w-[75%] px-4 py-3 rounded-2xl ${
                          msg.role === "ai"
                            ? "bg-white text-[#1a1a1a] border border-black/10 rounded-tl-sm shadow-sm"
                            : "bg-gradient-to-br from-[#c6ff00] to-[#b5e600] text-[#1a1a1a] rounded-tr-sm"
                        }`}
                      >
                        <div className="text-sm leading-relaxed">{msg.content}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="flex-shrink-0 bg-white/80 backdrop-blur-xl border-t border-black/10 shadow-[0_-4px_16px_rgba(0,0,0,0.05)]">
              <div className="px-5 py-5">
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={aiInput}
                      onChange={(e) => setAiInput(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      placeholder="You ready to go champ?"
                      className="w-full px-5 py-4 bg-gray-50 rounded-2xl border border-black/10 text-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:border-[#c6ff00]/50 focus:bg-white focus:shadow-[0_0_24px_rgba(198,255,0,0.15)] transition-all duration-300"
                    />
                  </div>
                  <button
                    onClick={handleSendMessage}
                    disabled={!aiInput.trim()}
                    className="px-5 py-4 bg-gradient-to-br from-[#c6ff00] to-[#b5e600] hover:from-[#b5e600] hover:to-[#9fd600] disabled:bg-gray-200 disabled:text-gray-400 rounded-2xl transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg disabled:shadow-none active:scale-95"
                  >
                    <Send className="w-5 h-5 text-[#1a1a1a]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Package Detail Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-end md:items-center justify-center">
          <div className="w-full max-w-md bg-white rounded-t-3xl md:rounded-3xl border border-black/10 max-h-[90vh] overflow-y-auto animate-slide-up shadow-2xl">
            {/* Header Image */}
            <div className="relative h-64">
              <img
                src={selectedPackage.image}
                alt={selectedPackage.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
              
              <button
                onClick={() => setSelectedPackage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-xl rounded-full flex items-center justify-center border border-black/10 hover:bg-white transition-all duration-300"
              >
                <X className="w-5 h-5 text-[#1a1a1a]" />
              </button>

              <div className="absolute bottom-5 left-5 right-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-[#c6ff00] rounded-lg text-[#1a1a1a] text-sm">
                    {selectedPackage.duration}
                  </span>
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-xl rounded-lg text-[#1a1a1a] text-sm border border-black/10">
                    {selectedPackage.difficulty}
                  </span>
                </div>
                <h2 className="text-[#1a1a1a] mb-1">{selectedPackage.title}</h2>
                <p className="text-[#c6ff00]">{selectedPackage.goal}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-[#1a1a1a] mb-2">About This Program</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{selectedPackage.description}</p>
              </div>

              {/* Coaches */}
              <div>
                <h3 className="text-[#1a1a1a] mb-3">Your Expert Coaching Team</h3>
                <div className="space-y-3">
                  {selectedPackage.coaches.map((coach, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        handleCoachClick(coach.name);
                        setSelectedPackage(null);
                      }}
                      className="w-full p-4 bg-gray-50 hover:bg-gray-100 rounded-xl border border-black/10 hover:border-[#c6ff00]/30 transition-all duration-300 text-left group"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="relative">
                          <img
                            src={coach.image}
                            alt={coach.name}
                            className="w-12 h-12 rounded-lg object-cover border-2 border-[#c6ff00]/30 group-hover:border-[#c6ff00] transition-all duration-300"
                          />
                          <div className="absolute inset-0 rounded-lg bg-[#c6ff00]/0 group-hover:bg-[#c6ff00]/10 transition-all duration-300" />
                        </div>
                        <div className="flex-1">
                          <div className="text-[#c6ff00] text-sm mb-0.5">{coach.type}</div>
                          <div className="text-[#1a1a1a] group-hover:text-[#1a1a1a] transition-colors duration-300">{coach.name}</div>
                          <div className="text-gray-400 text-sm">{coach.sport}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[#1a1a1a]">{coach.sessions}</div>
                          <div className="text-gray-400 text-sm">sessions</div>
                          <ChevronRight className="w-4 h-4 text-[#c6ff00] mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </div>
                      </div>
                      <div className="text-gray-600 text-sm">{coach.focus}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-[#1a1a1a] mb-3">Program Highlights</h3>
                <div className="space-y-2">
                  {selectedPackage.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c6ff00] mt-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expected Results */}
              <div>
                <h3 className="text-[#1a1a1a] mb-3 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#c6ff00]" />
                  Expected Results
                </h3>
                <div className="space-y-2">
                  {selectedPackage.expectedResults.map((result, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c6ff00] mt-2 flex-shrink-0" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button 
                onClick={() => {
                  onStartPackage?.(selectedPackage.id);
                  setSelectedPackage(null);
                }}
                className="w-full py-4 bg-[#c6ff00] hover:bg-[#b5e600] rounded-xl text-[#1a1a1a] transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 shadow-md hover:shadow-lg"
              >
                <span>Start This Program</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

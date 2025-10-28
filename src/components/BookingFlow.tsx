import { useState } from "react";
import { X, Clock, Calendar, CreditCard, Banknote, Coins, Check, ChevronLeft, AlertCircle, Info, MapPin, Home } from "lucide-react";

interface BookingFlowProps {
  isOpen: boolean;
  onClose: () => void;
  coach: any;
}

interface SessionType {
  id: string;
  name: string;
  duration: number;
  price: number;
  description: string;
}

interface Package {
  id: string;
  name: string;
  sessions: number;
  discount: number;
  description: string;
}

interface TimeSlot {
  day: string;
  time: string;
  available: boolean;
  duration: number;
}

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const generateSessionTypes = (specialty: string): SessionType[] => {
  const specialtyMap: { [key: string]: SessionType[] } = {
    "Tennis": [
      { id: "1", name: "Forehand Mastery", duration: 60, price: 85, description: "Focus on perfecting forehand technique and power" },
      { id: "2", name: "Backhand Development", duration: 60, price: 85, description: "Master two-handed and one-handed backhand shots" },
      { id: "3", name: "Serve & Volley", duration: 60, price: 85, description: "Dominate with powerful serves and net play" },
      { id: "4", name: "Match Strategy", duration: 90, price: 120, description: "Tactical training and competitive match play" },
    ],
    "Boxing": [
      { id: "1", name: "Fundamentals", duration: 60, price: 90, description: "Master jab, cross, hook, and uppercut techniques" },
      { id: "2", name: "Combinations", duration: 60, price: 90, description: "Learn devastating punch combinations" },
      { id: "3", name: "Defense & Footwork", duration: 60, price: 90, description: "Slipping, rolling, and ring movement" },
      { id: "4", name: "Sparring Session", duration: 90, price: 130, description: "Live sparring with protective equipment" },
    ],
    "MMA": [
      { id: "1", name: "Striking Fundamentals", duration: 60, price: 105, description: "Boxing, kickboxing, and Muay Thai basics" },
      { id: "2", name: "Grappling & BJJ", duration: 60, price: 105, description: "Takedowns, submissions, and ground control" },
      { id: "3", name: "MMA Integration", duration: 90, price: 150, description: "Combining striking and grappling techniques" },
      { id: "4", name: "Fight Simulation", duration: 90, price: 150, description: "Live sparring with mixed techniques" },
    ],
    "Muay Thai": [
      { id: "1", name: "Fundamentals", duration: 60, price: 88, description: "Punches, kicks, knees, and elbow strikes" },
      { id: "2", name: "Clinch Work", duration: 60, price: 88, description: "Traditional Muay Thai clinching techniques" },
      { id: "3", name: "Pad Work", duration: 60, price: 88, description: "High-intensity combinations on Thai pads" },
      { id: "4", name: "Conditioning", duration: 75, price: 110, description: "Fighter-level cardio and strength training" },
    ],
    "Fitness": [
      { id: "1", name: "Personal Training", duration: 60, price: 80, description: "Customized one-on-one fitness session" },
      { id: "2", name: "HIIT Session", duration: 45, price: 70, description: "High-intensity interval training" },
      { id: "3", name: "Strength Training", duration: 60, price: 80, description: "Build muscle and increase strength" },
      { id: "4", name: "Body Transformation", duration: 90, price: 120, description: "Comprehensive fitness and nutrition coaching" },
    ],
    "Gym": [
      { id: "1", name: "Strength Session", duration: 60, price: 92, description: "Compound lifts and progressive overload" },
      { id: "2", name: "Powerlifting", duration: 75, price: 110, description: "Squat, bench, and deadlift specialization" },
      { id: "3", name: "Olympic Lifting", duration: 60, price: 92, description: "Snatch and clean & jerk technique" },
      { id: "4", name: "Bodybuilding", duration: 75, price: 110, description: "Hypertrophy-focused muscle building" },
    ],
    "Strength": [
      { id: "1", name: "Strength Foundation", duration: 60, price: 95, description: "Build foundational strength patterns" },
      { id: "2", name: "Power Development", duration: 75, price: 115, description: "Explosive strength and athletic power" },
      { id: "3", name: "Conditioning", duration: 60, price: 95, description: "Work capacity and metabolic conditioning" },
      { id: "4", name: "Sport-Specific", duration: 90, price: 140, description: "Tailored to your sport requirements" },
    ],
    "Pickleball": [
      { id: "1", name: "Beginner Basics", duration: 60, price: 65, description: "Learn rules, grip, and basic shots" },
      { id: "2", name: "Intermediate Skills", duration: 60, price: 65, description: "Dinking, volleys, and court positioning" },
      { id: "3", name: "Advanced Strategy", duration: 75, price: 85, description: "Tournament tactics and shot selection" },
      { id: "4", name: "Match Play", duration: 90, price: 100, description: "Competitive games with coaching feedback" },
    ],
  };

  // Find matching specialty or return default
  for (const key in specialtyMap) {
    if (specialty.includes(key)) {
      return specialtyMap[key];
    }
  }

  // Default sessions
  return [
    { id: "1", name: "Technique Session", duration: 60, price: 80, description: "Focus on fundamental techniques" },
    { id: "2", name: "Conditioning Session", duration: 60, price: 80, description: "Build endurance and strength" },
    { id: "3", name: "Skills Development", duration: 75, price: 100, description: "Advanced skill refinement" },
    { id: "4", name: "Full Training", duration: 90, price: 120, description: "Comprehensive training session" },
  ];
};

const packages: Package[] = [
  { id: "1", name: "Trial Pack", sessions: 3, discount: 3, description: "Try out the training" },
  { id: "2", name: "Starter Pack", sessions: 5, discount: 5, description: "Get started with training" },
  { id: "3", name: "Progress Pack", sessions: 10, discount: 8, description: "Most popular choice" },
  { id: "4", name: "Elite Pack", sessions: 20, discount: 12, description: "Best value option" },
];

const generateSchedule = (): TimeSlot[] => {
  const schedule: TimeSlot[] = [];
  const times = ["06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];
  const durations = [60, 90];
  
  daysOfWeek.forEach((day) => {
    times.forEach(time => {
      durations.forEach(duration => {
        schedule.push({
          day,
          time,
          duration,
          available: Math.random() > 0.3 // 70% chance of being available
        });
      });
    });
  });
  
  return schedule;
};

// Generate suggested locations based on sport type
const getSuggestedLocations = (specialty: string) => {
  const sportLocations: { [key: string]: string[] } = {
    "Tennis": [
      "Griffith Park Tennis Courts - 4730 Crystal Springs Dr",
      "Santa Monica Tennis Center - 1402 Olympic Blvd",
      "UCLA Tennis Center - 325 Westwood Plaza",
      "Westwood Park - 1350 Sepulveda Blvd"
    ],
    "Boxing": [
      "Wild Card Boxing Club - 1123 Vine St",
      "Fortune Gym - 6000 Santa Monica Blvd",
      "Broadway Boxing Gym - 10730 Hortense St",
      "Everybody Fights LA - 8612 Melrose Ave"
    ],
    "MMA": [
      "Xtreme Couture - 8463 W 3rd St",
      "The Arena - 5670 Wilshire Blvd",
      "Black House MMA - 13801 Inglewood Ave",
      "Victory MMA - 11975 Venice Blvd"
    ],
    "Muay Thai": [
      "Authentic Muay Thai - 1551 N La Brea Ave",
      "Legends MMA - 5746 W Pico Blvd",
      "Kings MMA - 3040 W Temple St",
      "Bangkok Boxing - 7080 Hollywood Blvd"
    ],
    "Pickleball": [
      "Venice Beach Pickleball Courts - 1800 Ocean Front Walk",
      "Westwood Recreation Center - 1350 Sepulveda Blvd",
      "Mar Vista Recreation Center - 11430 Woodbine St",
      "Cheviot Hills Park - 2551 Motor Ave"
    ],
    "Badminton": [
      "LA Badminton Club - 11801 Exposition Blvd",
      "Victory Badminton - 15445 Ventura Blvd",
      "Smash Badminton - 2801 Main St",
      "Shuttle Zone - 8888 Washington Blvd"
    ],
    "Yoga": [
      "Runyon Canyon Park - 2000 N Fuller Ave",
      "Venice Beach - Ocean Front Walk",
      "Griffith Observatory Lawn - 2800 E Observatory Rd",
      "Palisades Park - Ocean Ave"
    ],
    "Pilates": [],
    "Fitness": [],
    "Gym": [],
    "Strength": [],
    "CrossFit": [
      "CrossFit LAX - 6671 Centinela Ave",
      "CrossFit Santa Monica - 1433 10th St",
      "Venice Barbell Club - 1833 S Sepulveda Blvd",
      "The Compound - 2801 Ocean Park Blvd"
    ]
  };

  for (const key in sportLocations) {
    if (specialty.includes(key)) {
      return sportLocations[key];
    }
  }
  return [];
};

type Step = "session" | "location" | "schedule" | "payment";

export function BookingFlow({ isOpen, onClose, coach }: BookingFlowProps) {
  const [step, setStep] = useState<Step>("session");
  const [selectedSession, setSelectedSession] = useState<SessionType | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [selectedSlots, setSelectedSlots] = useState<TimeSlot[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<"cash" | "bank" | "token" | null>(null);
  const [locationType, setLocationType] = useState<"my-location" | "venue" | null>(null);
  const [selectedVenue, setSelectedVenue] = useState<string | null>(null);

  const sessionTypes = coach ? generateSessionTypes(coach.specialty) : [];
  const schedule = generateSchedule();

  if (!isOpen || !coach) return null;

  const suggestedLocations = coach ? getSuggestedLocations(coach.specialty) : [];
  const canCoachTravel = suggestedLocations.length === 0 || ["Fitness", "Gym", "Strength", "Pilates", "Yoga"].some(s => coach.specialty.includes(s));

  const handleBack = () => {
    if (step === "location") setStep("session");
    else if (step === "schedule") setStep("location");
    else if (step === "payment") setStep("schedule");
  };

  const toggleSlot = (slot: TimeSlot) => {
    if (!slot.available) return;
    
    const exists = selectedSlots.find(s => s.day === slot.day && s.time === slot.time && s.duration === slot.duration);
    if (exists) {
      setSelectedSlots(selectedSlots.filter(s => !(s.day === slot.day && s.time === slot.time && s.duration === slot.duration)));
    } else {
      setSelectedSlots([...selectedSlots, slot]);
    }
  };

  const calculateTotalPrice = () => {
    if (!selectedSession || selectedSlots.length === 0) return 0;
    
    const totalHours = selectedSlots.reduce((sum, slot) => sum + (slot.duration / 60), 0);
    const basePrice = (selectedSession.price / (selectedSession.duration / 60)) * totalHours;
    
    if (selectedPackage) {
      const discountedPrice = basePrice * (1 - selectedPackage.discount / 100);
      return discountedPrice;
    }
    
    return basePrice;
  };

  const getTotalHours = () => {
    return selectedSlots.reduce((sum, slot) => sum + (slot.duration / 60), 0);
  };

  const getDepositAmount = () => {
    if (!selectedPackage) return 0;
    return calculateTotalPrice();
  };

  const handleContinue = () => {
    if (step === "session" && selectedSession) setStep("location");
    else if (step === "location" && (locationType === "my-location" || (locationType === "venue" && selectedVenue))) setStep("schedule");
    else if (step === "schedule" && selectedSlots.length > 0) setStep("payment");
    else if (step === "payment" && paymentMethod) {
      alert("Booking confirmed!");
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      
      {/* Sheet */}
      <div className="fixed inset-x-0 bottom-0 z-50 bg-[#0f0f0f] rounded-t-[30px] max-h-[90vh] overflow-hidden animate-slide-up">
        <div className="max-w-md mx-auto flex flex-col h-[90vh]">
          {/* Header */}
          <div className="sticky top-0 bg-[#0f0f0f] border-b border-gray-800/30 px-5 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {step !== "session" && (
                <button 
                  onClick={handleBack}
                  className="w-9 h-9 flex items-center justify-center hover:bg-gray-800/30 rounded-xl transition-all duration-200"
                >
                  <ChevronLeft className="w-5 h-5 text-white" strokeWidth={2} />
                </button>
              )}
              <h2 className="text-white font-semibold tracking-tight">
                {step === "session" && "Select Session Type"}
                {step === "location" && "Training Location"}
                {step === "schedule" && "Schedule Sessions"}
                {step === "payment" && "Payment Method"}
              </h2>
            </div>
            <button 
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center hover:bg-gray-800/30 rounded-xl transition-all duration-200"
            >
              <X className="w-5 h-5 text-white" strokeWidth={2} />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-5 pb-5">
            {/* Session Selection */}
            {step === "session" && (
              <div className="space-y-5 pt-5">
                <div>
                  <h3 className="text-white font-medium mb-3 tracking-tight">Session Types</h3>
                  <div className="space-y-3">
                    {sessionTypes.map((session) => (
                      <button
                        key={session.id}
                        onClick={() => setSelectedSession(session)}
                        className={`w-full text-left p-4 rounded-[18px] border transition-all duration-200 ${
                          selectedSession?.id === session.id
                            ? "bg-[#c6ff00]/10 border-[#c6ff00]"
                            : "bg-[#1a1a1a] border-gray-800/30 hover:border-gray-700"
                        }`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h4 className={`font-semibold tracking-tight mb-1 ${
                              selectedSession?.id === session.id ? "text-[#c6ff00]" : "text-white"
                            }`}>
                              {session.name}
                            </h4>
                            <p className="text-sm text-gray-400 tracking-tight">{session.description}</p>
                          </div>
                          {selectedSession?.id === session.id && (
                            <Check className="w-5 h-5 text-[#c6ff00] ml-3 flex-shrink-0" strokeWidth={2.5} />
                          )}
                        </div>
                        <div className="flex items-center gap-4 mt-3">
                          <div className="flex items-center gap-1.5 text-sm text-gray-400">
                            <Clock className="w-4 h-4" strokeWidth={2} />
                            <span>{session.duration} min</span>
                          </div>
                          <div className="text-sm font-semibold text-[#c6ff00]">
                            ${session.price}/{session.duration}min
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {selectedSession && (
                  <div>
                    <h3 className="text-white font-medium mb-3 tracking-tight">Optional: Choose a Package</h3>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-[18px] p-4 mb-3">
                      <div className="flex items-start gap-2">
                        <Info className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" strokeWidth={2} />
                        <p className="text-sm text-blue-400 leading-relaxed">
                          Packages require deposit upfront. Schedule sessions anytime. Cancel policy: 20% fee for cash refunds, 0% fee for VITA token conversion.
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <button
                        onClick={() => setSelectedPackage(null)}
                        className={`w-full text-left p-4 rounded-[18px] border transition-all duration-200 ${
                          !selectedPackage
                            ? "bg-[#c6ff00]/10 border-[#c6ff00]"
                            : "bg-[#1a1a1a] border-gray-800/30 hover:border-gray-700"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`font-medium tracking-tight ${
                            !selectedPackage ? "text-[#c6ff00]" : "text-white"
                          }`}>
                            Pay Per Session
                          </span>
                          <span className="text-sm text-gray-400">No deposit required</span>
                        </div>
                      </button>
                      {packages.map((pkg) => (
                        <button
                          key={pkg.id}
                          onClick={() => setSelectedPackage(pkg)}
                          className={`w-full text-left p-4 rounded-[18px] border transition-all duration-200 ${
                            selectedPackage?.id === pkg.id
                              ? "bg-[#c6ff00]/10 border-[#c6ff00]"
                              : "bg-[#1a1a1a] border-gray-800/30 hover:border-gray-700"
                          }`}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className={`font-semibold tracking-tight ${
                                  selectedPackage?.id === pkg.id ? "text-[#c6ff00]" : "text-white"
                                }`}>
                                  {pkg.name}
                                </h4>
                                <span className="px-2 py-0.5 bg-[#c6ff00]/20 text-[#c6ff00] text-xs font-semibold rounded-full">
                                  Save {pkg.discount}%
                                </span>
                              </div>
                              <p className="text-sm text-gray-400 tracking-tight">{pkg.description}</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mt-3">
                            <span className="text-sm text-gray-400">{pkg.sessions} sessions</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Location Selection */}
            {step === "location" && (
              <div className="space-y-5 pt-5">
                <div>
                  <h3 className="text-white font-medium mb-3 tracking-tight">Where would you like to train?</h3>
                  <div className="space-y-3">
                    {/* Coach comes to user */}
                    {canCoachTravel && (
                      <button
                        onClick={() => {
                          setLocationType("my-location");
                          setSelectedVenue(null);
                        }}
                        className={`w-full text-left p-4 rounded-[18px] border transition-all duration-200 ${
                          locationType === "my-location"
                            ? "bg-[#c6ff00]/10 border-[#c6ff00]"
                            : "bg-[#1a1a1a] border-gray-800/30 hover:border-gray-700"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                            locationType === "my-location" ? "bg-[#c6ff00]/20" : "bg-gray-800/50"
                          }`}>
                            <Home className={`w-5 h-5 ${
                              locationType === "my-location" ? "text-[#c6ff00]" : "text-gray-400"
                            }`} strokeWidth={2} />
                          </div>
                          <div className="flex-1">
                            <h4 className={`font-semibold tracking-tight mb-1 ${
                              locationType === "my-location" ? "text-[#c6ff00]" : "text-white"
                            }`}>
                              Coach Comes to Me
                            </h4>
                            <p className="text-sm text-gray-400 tracking-tight">
                              Training at your home, apartment, or preferred location
                            </p>
                          </div>
                          {locationType === "my-location" && (
                            <Check className="w-5 h-5 text-[#c6ff00] flex-shrink-0" strokeWidth={2.5} />
                          )}
                        </div>
                      </button>
                    )}

                    {/* Suggested venues */}
                    {suggestedLocations.length > 0 && (
                      <button
                        onClick={() => {
                          setLocationType("venue");
                          if (suggestedLocations.length > 0 && !selectedVenue) {
                            setSelectedVenue(suggestedLocations[0]);
                          }
                        }}
                        className={`w-full text-left p-4 rounded-[18px] border transition-all duration-200 ${
                          locationType === "venue"
                            ? "bg-[#c6ff00]/10 border-[#c6ff00]"
                            : "bg-[#1a1a1a] border-gray-800/30 hover:border-gray-700"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                            locationType === "venue" ? "bg-[#c6ff00]/20" : "bg-gray-800/50"
                          }`}>
                            <MapPin className={`w-5 h-5 ${
                              locationType === "venue" ? "text-[#c6ff00]" : "text-gray-400"
                            }`} strokeWidth={2} />
                          </div>
                          <div className="flex-1">
                            <h4 className={`font-semibold tracking-tight mb-1 ${
                              locationType === "venue" ? "text-[#c6ff00]" : "text-white"
                            }`}>
                              Meet at Venue
                            </h4>
                            <p className="text-sm text-gray-400 tracking-tight">
                              Select from suggested {coach.specialty.toLowerCase()} locations
                            </p>
                          </div>
                          {locationType === "venue" && (
                            <Check className="w-5 h-5 text-[#c6ff00] flex-shrink-0" strokeWidth={2.5} />
                          )}
                        </div>
                      </button>
                    )}
                  </div>
                </div>

                {/* Venue Selection */}
                {locationType === "venue" && suggestedLocations.length > 0 && (
                  <div>
                    <h3 className="text-white font-medium mb-3 tracking-tight">Select Venue</h3>
                    <div className="space-y-2">
                      {suggestedLocations.map((venue, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedVenue(venue)}
                          className={`w-full text-left p-4 rounded-[16px] border transition-all duration-200 ${
                            selectedVenue === venue
                              ? "bg-[#c6ff00]/10 border-[#c6ff00]"
                              : "bg-[#1a1a1a] border-gray-800/30 hover:border-gray-700"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <MapPin className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                              selectedVenue === venue ? "text-[#c6ff00]" : "text-gray-400"
                            }`} strokeWidth={2} />
                            <div className="flex-1">
                              <p className={`text-sm font-medium tracking-tight ${
                                selectedVenue === venue ? "text-[#c6ff00]" : "text-white"
                              }`}>
                                {venue}
                              </p>
                            </div>
                            {selectedVenue === venue && (
                              <Check className="w-4 h-4 text-[#c6ff00] flex-shrink-0" strokeWidth={2.5} />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {locationType === "my-location" && (
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-[18px] p-4">
                    <div className="flex items-start gap-2">
                      <Info className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <p className="text-sm text-blue-400 leading-relaxed">
                        Your address will be shared with the coach after booking confirmation. Please ensure you have adequate space and equipment if needed.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Schedule Selection */}
            {step === "schedule" && selectedSession && (
              <div className="space-y-5 pt-5">
                <div className="bg-[#1a1a1a] border border-gray-800/30 rounded-[18px] p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-sm">Selected Session</span>
                    <span className="text-white font-semibold">{selectedSession.name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Hourly Rate</span>
                    <span className="text-[#c6ff00] font-semibold">
                      ${(selectedSession.price / (selectedSession.duration / 60)).toFixed(0)}/hr
                    </span>
                  </div>
                </div>

                {selectedPackage && (
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-[18px] p-4">
                    <div className="flex items-start gap-2 mb-3">
                      <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <div className="flex-1">
                        <p className="text-sm text-yellow-400 font-semibold mb-1">Package Selected: {selectedPackage.name}</p>
                        <p className="text-xs text-yellow-400/80 leading-relaxed">
                          Deposit required: Full package amount. Book sessions at your pace. Cancellation: 20% fee for refund, 0% fee for token conversion.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="text-white font-medium mb-3 tracking-tight">Select Time Slots (choose multiple)</h3>
                  {daysOfWeek.map((day) => (
                    <div key={day} className="mb-5">
                      <h4 className="text-white font-medium text-sm mb-2 tracking-tight">{day}</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {schedule
                          .filter(slot => slot.day === day)
                          .map((slot, idx) => {
                            const isSelected = selectedSlots.find(
                              s => s.day === slot.day && s.time === slot.time && s.duration === slot.duration
                            );
                            return (
                              <button
                                key={idx}
                                onClick={() => toggleSlot(slot)}
                                disabled={!slot.available}
                                className={`px-3 py-2.5 rounded-[14px] font-medium tracking-tight transition-all duration-200 border text-sm ${
                                  isSelected
                                    ? "bg-[#c6ff00]/10 border-[#c6ff00] text-[#c6ff00]"
                                    : slot.available
                                    ? "bg-[#1a1a1a] border-gray-800/30 text-white hover:border-gray-700"
                                    : "bg-[#1a1a1a]/50 border-gray-800/20 text-gray-600 cursor-not-allowed"
                                }`}
                              >
                                {slot.time} ({slot.duration}min)
                              </button>
                            );
                          })}
                      </div>
                    </div>
                  ))}
                </div>

                {selectedSlots.length > 0 && (
                  <div className="bg-[#c6ff00]/10 border border-[#c6ff00]/30 rounded-[18px] p-4">
                    <h4 className="text-[#c6ff00] font-semibold mb-3 tracking-tight">
                      Selected: {selectedSlots.length} slot{selectedSlots.length > 1 ? 's' : ''}
                    </h4>
                    <div className="space-y-2 mb-3">
                      {selectedSlots.map((slot, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm">
                          <span className="text-white">{slot.day} - {slot.time}</span>
                          <span className="text-gray-400">{slot.duration}min</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-3 border-t border-[#c6ff00]/20">
                      <div className="flex justify-between mb-2">
                        <span className="text-white font-medium">Total Hours:</span>
                        <span className="text-white font-semibold">{getTotalHours().toFixed(1)}h</span>
                      </div>
                      {selectedPackage && (
                        <div className="flex justify-between mb-2">
                          <span className="text-white font-medium">Discount:</span>
                          <span className="text-[#c6ff00] font-semibold">-{selectedPackage.discount}%</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-white font-semibold">Total Price:</span>
                        <span className="text-[#c6ff00] font-bold text-lg">${calculateTotalPrice().toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Payment Method Selection */}
            {step === "payment" && (
              <div className="space-y-5 pt-5">
                <div className="bg-[#1a1a1a] border border-gray-800/30 rounded-[18px] p-5">
                  <h3 className="text-white font-medium mb-4 tracking-tight">Booking Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Coach</span>
                      <span className="text-white font-medium">{coach.name}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Session Type</span>
                      <span className="text-white font-medium">{selectedSession?.name}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Total Hours</span>
                      <span className="text-white font-medium">{getTotalHours().toFixed(1)}h</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Time Slots</span>
                      <span className="text-white font-medium">{selectedSlots.length} sessions</span>
                    </div>
                    {selectedPackage && (
                      <>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Package</span>
                          <span className="text-white font-medium">{selectedPackage.name}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Discount</span>
                          <span className="text-[#c6ff00] font-medium">-{selectedPackage.discount}%</span>
                        </div>
                      </>
                    )}
                    <div className="pt-3 mt-3 border-t border-gray-800/30 flex justify-between">
                      <span className="text-white font-semibold">Total</span>
                      <span className="text-[#c6ff00] font-semibold text-lg">${calculateTotalPrice().toFixed(2)}</span>
                    </div>
                    {selectedPackage && (
                      <div className="pt-2">
                        <span className="text-yellow-400 text-xs font-medium">Deposit required: ${getDepositAmount().toFixed(2)}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-medium mb-3 tracking-tight">Payment Method</h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => setPaymentMethod("cash")}
                      className={`w-full p-4 rounded-[18px] border transition-all duration-200 flex items-center gap-4 ${
                        paymentMethod === "cash"
                          ? "bg-[#c6ff00]/10 border-[#c6ff00]"
                          : "bg-[#1a1a1a] border-gray-800/30 hover:border-gray-700"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        paymentMethod === "cash" ? "bg-[#c6ff00]/20" : "bg-gray-800/50"
                      }`}>
                        <Banknote className={`w-6 h-6 ${
                          paymentMethod === "cash" ? "text-[#c6ff00]" : "text-gray-400"
                        }`} strokeWidth={2} />
                      </div>
                      <div className="flex-1 text-left">
                        <h4 className={`font-semibold tracking-tight ${
                          paymentMethod === "cash" ? "text-[#c6ff00]" : "text-white"
                        }`}>
                          Cash
                        </h4>
                        <p className="text-sm text-gray-400">Pay in person at session</p>
                      </div>
                      {paymentMethod === "cash" && (
                        <Check className="w-5 h-5 text-[#c6ff00]" strokeWidth={2.5} />
                      )}
                    </button>

                    <button
                      onClick={() => setPaymentMethod("bank")}
                      className={`w-full p-4 rounded-[18px] border transition-all duration-200 flex items-center gap-4 ${
                        paymentMethod === "bank"
                          ? "bg-[#c6ff00]/10 border-[#c6ff00]"
                          : "bg-[#1a1a1a] border-gray-800/30 hover:border-gray-700"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        paymentMethod === "bank" ? "bg-[#c6ff00]/20" : "bg-gray-800/50"
                      }`}>
                        <CreditCard className={`w-6 h-6 ${
                          paymentMethod === "bank" ? "text-[#c6ff00]" : "text-gray-400"
                        }`} strokeWidth={2} />
                      </div>
                      <div className="flex-1 text-left">
                        <h4 className={`font-semibold tracking-tight ${
                          paymentMethod === "bank" ? "text-[#c6ff00]" : "text-white"
                        }`}>
                          Bank Transfer
                        </h4>
                        <p className="text-sm text-gray-400">Direct bank payment</p>
                      </div>
                      {paymentMethod === "bank" && (
                        <Check className="w-5 h-5 text-[#c6ff00]" strokeWidth={2.5} />
                      )}
                    </button>

                    <button
                      onClick={() => setPaymentMethod("token")}
                      className={`w-full p-4 rounded-[18px] border transition-all duration-200 flex items-center gap-4 ${
                        paymentMethod === "token"
                          ? "bg-[#c6ff00]/10 border-[#c6ff00]"
                          : "bg-[#1a1a1a] border-gray-800/30 hover:border-gray-700"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        paymentMethod === "token" ? "bg-[#c6ff00]/20" : "bg-gray-800/50"
                      }`}>
                        <Coins className={`w-6 h-6 ${
                          paymentMethod === "token" ? "text-[#c6ff00]" : "text-gray-400"
                        }`} strokeWidth={2} />
                      </div>
                      <div className="flex-1 text-left">
                        <h4 className={`font-semibold tracking-tight ${
                          paymentMethod === "token" ? "text-[#c6ff00]" : "text-white"
                        }`}>
                          VITA Wallet
                        </h4>
                        <p className="text-sm text-gray-400">Use wallet balance</p>
                      </div>
                      {paymentMethod === "token" && (
                        <Check className="w-5 h-5 text-[#c6ff00]" strokeWidth={2.5} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="sticky bottom-0 bg-[#0f0f0f] border-t border-gray-800/30 px-5 py-4">
            <button
              onClick={handleContinue}
              disabled={
                (step === "session" && !selectedSession) ||
                (step === "location" && !locationType) ||
                (step === "location" && locationType === "venue" && !selectedVenue) ||
                (step === "schedule" && selectedSlots.length === 0) ||
                (step === "payment" && !paymentMethod)
              }
              className="w-full px-6 py-3.5 bg-[#c6ff00] hover:bg-[#d4ff00] text-black rounded-[16px] font-semibold tracking-tight transition-all duration-200 shadow-lg shadow-[#c6ff00]/25 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {step === "session" && "Continue to Location"}
              {step === "location" && "Continue to Schedule"}
              {step === "schedule" && `Continue • ${calculateTotalPrice().toFixed(2)}`}
              {step === "payment" && "Confirm Booking"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

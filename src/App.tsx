import { useState } from "react";
import { CoachesProfile } from "./components/CoachesProfile";
import { Profile } from "./components/Profile";
import { Messages } from "./components/Messages";
import { Map } from "./components/Map";
import { Wallet } from "./components/Wallet";
import { Calendar } from "./components/Calendar";
import { Home } from "./components/Home";
import { CoachDetailProfile } from "./components/CoachDetailProfile";
import { PackageBookingFlow } from "./components/PackageBookingFlow";
import { Auth } from "./components/Auth";
import { MessageCircle, Users, User, Calendar as CalendarIcon, Home as HomeIcon } from "lucide-react";

export default function App() {
  const [selectedSports, setSelectedSports] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<"auth" | "home" | "messages" | "coaches" | "map" | "profile" | "calendar" | "coachDetail" | "packageBooking">("auth");
  const [selectedCoachId, setSelectedCoachId] = useState<string>("");
  const [selectedPackageData, setSelectedPackageData] = useState<any>(null);

  const handleNavigateToCoach = (coachId: string) => {
    setSelectedCoachId(coachId);
    setActiveTab("coachDetail");
  };

  const handleStartPackage = (packageId: string) => {
    // Map package data from Home packages
    const packageMap: Record<string, any> = {
      "1": {
        id: "1",
        name: "Get a 6-Pack in 90 Days",
        duration: "90 Days",
        sessions: 90,
        coaches: [
          {
            name: "Marcus Johnson",
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
            sport: "Strength Training",
            sessions: 36
          },
          {
            name: "Ahmed Al-Rashid",
            image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
            sport: "Running & HIIT",
            sessions: 24
          },
          {
            name: "Carlos Rivera",
            image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&h=400&fit=crop",
            sport: "Pickleball",
            sessions: 12
          },
          {
            name: "Elena Rodriguez",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop",
            sport: "Yoga & Mobility",
            sessions: 18
          }
        ],
        price: 15200
      }
    };

    setSelectedPackageData(packageMap[packageId] || null);
    if (packageMap[packageId]) {
      setActiveTab("packageBooking");
    }
  };

  const handleBookPackage = (packageId: string) => {
    // Called from coach detail page - navigate to booking flow
    setActiveTab("packageBooking");
  };

  // Show Auth page first
  if (activeTab === "auth") {
    return (
      <Auth 
        onSignUpUser={() => setActiveTab("home")}
        onSignUpCoach={() => setActiveTab("home")} // In production, this would go to coach onboarding
        onLogin={() => setActiveTab("home")}
      />
    );
  }

  return (
    <div className="h-screen w-screen bg-[#0f0f0f] overflow-hidden flex flex-col">
      {/* VITA Logo Header - Hidden on Map */}
      {activeTab !== "map" && (
        <div className="flex-shrink-0 bg-[#0f0f0f]/80 backdrop-blur-2xl border-b border-white/10 shadow-sm">
          <div className="max-w-md mx-auto px-5 py-5 flex items-center justify-center">
            <h1 className="text-white text-3xl font-light tracking-[0.15em]" style={{ fontWeight: 200 }}>
              VIT<span className="inline-block scale-x-[-1] -ml-[0.08em]">Λ</span>
            </h1>
          </div>
        </div>
      )}
      
      {/* Main Content - Takes remaining space */}
      <div className="flex-1 overflow-hidden relative">
        <div className="h-full overflow-y-auto">
          {activeTab === "home" && <Home onNavigateToCoach={handleNavigateToCoach} onStartPackage={handleStartPackage} />}
          {activeTab === "messages" && <Messages />}
          {activeTab === "coaches" && <CoachesProfile selectedSports={selectedSports} onOpenMap={() => setActiveTab("map")} onCoachClick={handleNavigateToCoach} />}
          {activeTab === "map" && <Map onBack={() => setActiveTab("coaches")} />}
          {activeTab === "profile" && <Profile />}
          {activeTab === "calendar" && <Calendar onNavigateToCoach={handleNavigateToCoach} />}
          {activeTab === "coachDetail" && <CoachDetailProfile coachId={selectedCoachId} onBack={() => setActiveTab("home")} onBookPackage={handleBookPackage} />}
          {activeTab === "packageBooking" && selectedPackageData && (
            <PackageBookingFlow 
              packageData={selectedPackageData}
              onBack={() => setActiveTab("home")}
              onComplete={() => {
                setActiveTab("calendar");
                // Show success message
              }}
            />
          )}
        </div>
      </div>

      {/* Bottom Navigation - Glassmorphism with Safe Area */}
      <div className="flex-shrink-0 bg-[#0f0f0f]/95 backdrop-blur-2xl border-t border-white/10 shadow-[0_-4px_16px_rgba(0,0,0,0.3)]">
        <div className="max-w-md mx-auto">
          <div className="grid grid-cols-5 px-3">
            {/* Home */}
            <button
              onClick={() => setActiveTab("home")}
              className="flex flex-col items-center gap-2 py-5 transition-all duration-300 relative"
            >
              <HomeIcon 
                className={`w-7 h-7 transition-all duration-300 ${
                  activeTab === "home" ? "text-[#c6ff00] drop-shadow-[0_0_12px_rgba(198,255,0,0.6)]" : "text-white/40"
                }`}
                strokeWidth={2.5}
              />
              {activeTab === "home" && (
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#c6ff00] rounded-full shadow-[0_0_8px_rgba(198,255,0,0.8)]" />
              )}
            </button>

            {/* Calendar */}
            <button
              onClick={() => setActiveTab("calendar")}
              className="flex flex-col items-center gap-2 py-5 transition-all duration-300 relative"
            >
              <CalendarIcon 
                className={`w-7 h-7 transition-all duration-300 ${
                  activeTab === "calendar" ? "text-[#c6ff00] drop-shadow-[0_0_12px_rgba(198,255,0,0.6)]" : "text-white/40"
                }`}
                strokeWidth={2.5}
              />
              {activeTab === "calendar" && (
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#c6ff00] rounded-full shadow-[0_0_8px_rgba(198,255,0,0.8)]" />
              )}
            </button>

            {/* Coaches */}
            <button
              onClick={() => setActiveTab("coaches")}
              className="flex flex-col items-center gap-2 py-5 transition-all duration-300 relative"
            >
              <Users 
                className={`w-7 h-7 transition-all duration-300 ${
                  activeTab === "coaches" ? "text-[#c6ff00] drop-shadow-[0_0_12px_rgba(198,255,0,0.6)]" : "text-white/40"
                }`}
                strokeWidth={2.5}
              />
              {activeTab === "coaches" && (
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#c6ff00] rounded-full shadow-[0_0_8px_rgba(198,255,0,0.8)]" />
              )}
            </button>

            {/* Messages */}
            <button
              onClick={() => setActiveTab("messages")}
              className="flex flex-col items-center gap-2 py-5 transition-all duration-300 relative"
            >
              <MessageCircle 
                className={`w-7 h-7 transition-all duration-300 ${
                  activeTab === "messages" ? "text-[#c6ff00] drop-shadow-[0_0_12px_rgba(198,255,0,0.6)]" : "text-white/40"
                }`}
                strokeWidth={2.5}
              />
              {activeTab === "messages" && (
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#c6ff00] rounded-full shadow-[0_0_8px_rgba(198,255,0,0.8)]" />
              )}
            </button>

            {/* Profile */}
            <button
              onClick={() => setActiveTab("profile")}
              className="flex flex-col items-center gap-2 py-5 transition-all duration-300 relative"
            >
              <User 
                className={`w-7 h-7 transition-all duration-300 ${
                  activeTab === "profile" ? "text-[#c6ff00] drop-shadow-[0_0_12px_rgba(198,255,0,0.6)]" : "text-white/40"
                }`}
                strokeWidth={2.5}
              />
              {activeTab === "profile" && (
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#c6ff00] rounded-full shadow-[0_0_8px_rgba(198,255,0,0.8)]" />
              )}
            </button>
          </div>
          {/* Safe Area Spacer */}
          <div className="h-[env(safe-area-inset-bottom,0px)] bg-[#0f0f0f]/95" />
        </div>
      </div>
    </div>
  );
}

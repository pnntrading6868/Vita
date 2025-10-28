import { useState } from "react";
import { ChevronRight, Calendar, TrendingUp, Clock, CheckCircle2, Trophy, Target, Flame, Zap, Award, Star, BarChart3, Activity } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Coach {
  id: number;
  name: string;
  sport: string;
  imageUrl: string;
  totalSessions: number;
  lastSession: string;
}

interface Package {
  id: number;
  coachName: string;
  coachImage: string;
  packageName: string;
  sport: string;
  totalSessions: number;
  completedSessions: number;
  startDate: string;
  endDate: string;
  progress: number;
  status: "active" | "completed" | "expired";
}

interface Session {
  id: number;
  coachName: string;
  coachImage: string;
  sport: string;
  date: string;
  time: string;
  duration: string;
  rating?: number;
}

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progress: number;
  maxProgress: number;
}

const pastCoaches: Coach[] = [
  {
    id: 1,
    name: "Marcus Chen",
    sport: "Tennis",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    totalSessions: 24,
    lastSession: "Oct 20, 2025"
  },
  {
    id: 2,
    name: "Sarah Williams",
    sport: "Yoga",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    totalSessions: 18,
    lastSession: "Oct 15, 2025"
  },
  {
    id: 3,
    name: "James Rodriguez",
    sport: "Boxing",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    totalSessions: 12,
    lastSession: "Oct 10, 2025"
  }
];

const trainingPackages: Package[] = [
  {
    id: 1,
    coachName: "Marcus Chen",
    coachImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    packageName: "Advanced Tennis Mastery",
    sport: "Tennis",
    totalSessions: 20,
    completedSessions: 14,
    startDate: "Sep 1, 2025",
    endDate: "Nov 30, 2025",
    progress: 70,
    status: "active"
  },
  {
    id: 2,
    coachName: "Sarah Williams",
    coachImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    packageName: "Yoga Foundation",
    sport: "Yoga",
    totalSessions: 15,
    completedSessions: 15,
    startDate: "Aug 1, 2025",
    endDate: "Oct 15, 2025",
    progress: 100,
    status: "completed"
  },
  {
    id: 3,
    coachName: "James Rodriguez",
    coachImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    packageName: "Boxing Fundamentals",
    sport: "Boxing",
    totalSessions: 12,
    completedSessions: 12,
    startDate: "Jul 15, 2025",
    endDate: "Sep 30, 2025",
    progress: 100,
    status: "completed"
  }
];

const recentSessions: Session[] = [
  {
    id: 1,
    coachName: "Marcus Chen",
    coachImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    sport: "Tennis",
    date: "Oct 20, 2025",
    time: "10:00 AM",
    duration: "60 min",
    rating: 5
  },
  {
    id: 2,
    coachName: "Marcus Chen",
    coachImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    sport: "Tennis",
    date: "Oct 18, 2025",
    time: "10:00 AM",
    duration: "60 min",
    rating: 5
  },
  {
    id: 3,
    coachName: "Sarah Williams",
    coachImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    sport: "Yoga",
    date: "Oct 15, 2025",
    time: "7:00 AM",
    duration: "45 min",
    rating: 5
  },
  {
    id: 4,
    coachName: "Marcus Chen",
    coachImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    sport: "Tennis",
    date: "Oct 13, 2025",
    time: "10:00 AM",
    duration: "60 min",
    rating: 4
  }
];

const achievements: Achievement[] = [
  {
    id: 1,
    title: "First Step",
    description: "Complete your first training session",
    icon: "trophy",
    unlocked: true,
    progress: 1,
    maxProgress: 1
  },
  {
    id: 2,
    title: "Week Warrior",
    description: "Train 3 times in one week",
    icon: "flame",
    unlocked: true,
    progress: 3,
    maxProgress: 3
  },
  {
    id: 3,
    title: "Consistency King",
    description: "Complete 7-day training streak",
    icon: "zap",
    unlocked: false,
    progress: 5,
    maxProgress: 7
  },
  {
    id: 4,
    title: "Champion",
    description: "Complete 50 total sessions",
    icon: "award",
    unlocked: false,
    progress: 34,
    maxProgress: 50
  }
];

export function History() {
  const [selectedTab, setSelectedTab] = useState<"packages" | "sessions">("packages");

  const totalSessions = 54;
  const totalHours = 49;
  const activePackages = trainingPackages.filter(p => p.status === "active").length;
  const currentStreak = 5;
  const weeklyGoal = 3;
  const thisWeekSessions = 2;
  const avgRating = 4.8;
  const caloriesBurned = 12450;

  return (
    <div className="h-full bg-[#0f0f0f] overflow-y-auto">
      <div className="max-w-md mx-auto px-5 py-5">
        
        {/* Performance Overview */}
        <div className="mb-6">
          <h2 className="text-white font-semibold mb-4 tracking-tight">Performance Overview</h2>
          
          {/* Main Stats Grid */}
          <div className="grid grid-cols-2 gap-3 mb-3">
            {/* Total Sessions - Large Card */}
            <div className="bg-gradient-to-br from-[#c6ff00]/20 to-[#c6ff00]/5 border border-[#c6ff00]/30 rounded-[20px] p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center justify-center w-11 h-11 bg-[#c6ff00]/20 rounded-full">
                  <Trophy className="w-6 h-6 text-[#c6ff00]" strokeWidth={2} />
                </div>
                <TrendingUp className="w-4 h-4 text-[#c6ff00]" strokeWidth={2} />
              </div>
              <p className="text-3xl font-bold text-white tracking-tight mb-1">{totalSessions}</p>
              <p className="text-xs text-gray-400 tracking-tight">Total Sessions</p>
              <div className="mt-3 pt-3 border-t border-[#c6ff00]/20">
                <p className="text-xs text-[#c6ff00] font-medium tracking-tight">+8 this month</p>
              </div>
            </div>

            {/* Training Hours */}
            <div className="bg-[#1a1a1a] border border-gray-800/30 rounded-[20px] p-5">
              <div className="flex items-center justify-center w-11 h-11 bg-blue-500/10 rounded-full mb-3">
                <Clock className="w-6 h-6 text-blue-400" strokeWidth={2} />
              </div>
              <p className="text-3xl font-bold text-white tracking-tight mb-1">{totalHours}h</p>
              <p className="text-xs text-gray-400 tracking-tight">Training Time</p>
              <div className="mt-3 pt-3 border-t border-gray-800/30">
                <p className="text-xs text-blue-400 font-medium tracking-tight">~5.4h/week</p>
              </div>
            </div>
          </div>

          {/* Secondary Stats */}
          <div className="grid grid-cols-3 gap-3">
            {/* Streak */}
            <div className="bg-[#1a1a1a] border border-gray-800/30 rounded-[18px] p-4">
              <div className="flex items-center justify-center w-9 h-9 bg-orange-500/10 rounded-full mb-2 mx-auto">
                <Flame className="w-5 h-5 text-orange-400" strokeWidth={2} />
              </div>
              <p className="text-xl font-bold text-white text-center tracking-tight">{currentStreak}</p>
              <p className="text-xs text-gray-400 text-center mt-1 tracking-tight">Day Streak</p>
            </div>
            
            {/* Average Rating */}
            <div className="bg-[#1a1a1a] border border-gray-800/30 rounded-[18px] p-4">
              <div className="flex items-center justify-center w-9 h-9 bg-yellow-500/10 rounded-full mb-2 mx-auto">
                <Star className="w-5 h-5 text-yellow-400" strokeWidth={2} fill="currentColor" />
              </div>
              <p className="text-xl font-bold text-white text-center tracking-tight">{avgRating}</p>
              <p className="text-xs text-gray-400 text-center mt-1 tracking-tight">Avg Rating</p>
            </div>
            
            {/* Active Packages */}
            <div className="bg-[#1a1a1a] border border-gray-800/30 rounded-[18px] p-4">
              <div className="flex items-center justify-center w-9 h-9 bg-purple-500/10 rounded-full mb-2 mx-auto">
                <Target className="w-5 h-5 text-purple-400" strokeWidth={2} />
              </div>
              <p className="text-xl font-bold text-white text-center tracking-tight">{activePackages}</p>
              <p className="text-xs text-gray-400 text-center mt-1 tracking-tight">Active</p>
            </div>
          </div>
        </div>

        {/* Weekly Goal Progress */}
        <div className="mb-6">
          <div className="bg-[#1a1a1a] border border-gray-800/30 rounded-[20px] p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-white font-semibold tracking-tight mb-1">Weekly Goal</h3>
                <p className="text-sm text-gray-400 tracking-tight">{thisWeekSessions} / {weeklyGoal} sessions this week</p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-[#c6ff00]/10 rounded-full">
                <Zap className="w-6 h-6 text-[#c6ff00]" strokeWidth={2} fill="currentColor" />
              </div>
            </div>
            
            <div className="mb-3">
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#c6ff00] to-[#a8e600] transition-all duration-500 rounded-full relative"
                  style={{ width: `${(thisWeekSessions / weeklyGoal) * 100}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500 tracking-tight">
              {weeklyGoal - thisWeekSessions > 0 
                ? `${weeklyGoal - thisWeekSessions} more session${weeklyGoal - thisWeekSessions > 1 ? 's' : ''} to reach your goal!` 
                : "Goal achieved! 🎉"}
            </p>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-semibold tracking-tight">Achievements</h2>
            <span className="text-sm text-gray-400 tracking-tight">
              {achievements.filter(a => a.unlocked).length}/{achievements.length}
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`rounded-[20px] p-4 transition-all duration-300 ${
                  achievement.unlocked
                    ? "bg-gradient-to-br from-[#c6ff00]/20 to-[#c6ff00]/5 border border-[#c6ff00]/30"
                    : "bg-[#1a1a1a] border border-gray-800/30 opacity-60"
                }`}
              >
                <div className={`flex items-center justify-center w-12 h-12 rounded-full mb-3 ${
                  achievement.unlocked ? "bg-[#c6ff00]/20" : "bg-gray-800/50"
                }`}>
                  {achievement.icon === "trophy" && (
                    <Trophy className={`w-6 h-6 ${achievement.unlocked ? "text-[#c6ff00]" : "text-gray-600"}`} strokeWidth={2} />
                  )}
                  {achievement.icon === "flame" && (
                    <Flame className={`w-6 h-6 ${achievement.unlocked ? "text-[#c6ff00]" : "text-gray-600"}`} strokeWidth={2} />
                  )}
                  {achievement.icon === "zap" && (
                    <Zap className={`w-6 h-6 ${achievement.unlocked ? "text-[#c6ff00]" : "text-gray-600"}`} strokeWidth={2} />
                  )}
                  {achievement.icon === "award" && (
                    <Award className={`w-6 h-6 ${achievement.unlocked ? "text-[#c6ff00]" : "text-gray-600"}`} strokeWidth={2} />
                  )}
                </div>
                
                <h4 className={`font-semibold tracking-tight mb-1 ${
                  achievement.unlocked ? "text-white" : "text-gray-500"
                }`}>
                  {achievement.title}
                </h4>
                <p className="text-xs text-gray-400 tracking-tight mb-3">
                  {achievement.description}
                </p>
                
                {!achievement.unlocked && (
                  <div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden mb-1">
                      <div
                        className="h-full bg-gray-600 transition-all duration-500 rounded-full"
                        style={{ width: `${(achievement.progress / achievement.maxProgress) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 tracking-tight">
                      {achievement.progress}/{achievement.maxProgress}
                    </p>
                  </div>
                )}
                {achievement.unlocked && (
                  <div className="flex items-center gap-1 text-xs text-[#c6ff00] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={2.5} />
                    Unlocked
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Activity Chart */}
        <div className="mb-6">
          <h2 className="text-white font-semibold mb-4 tracking-tight">Weekly Activity</h2>
          <div className="bg-[#1a1a1a] border border-gray-800/30 rounded-[20px] p-5">
            <div className="flex items-end justify-between gap-2 h-32">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => {
                const heights = [60, 80, 45, 90, 70, 0, 0];
                const isActive = heights[index] > 0;
                return (
                  <div key={day} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full flex items-end justify-center h-24">
                      <div
                        className={`w-full rounded-t-lg transition-all duration-500 ${
                          isActive
                            ? "bg-gradient-to-t from-[#c6ff00] to-[#c6ff00]/60"
                            : "bg-gray-800/50"
                        }`}
                        style={{ height: `${heights[index]}%` }}
                      />
                    </div>
                    <span className={`text-xs tracking-tight ${
                      isActive ? "text-white font-medium" : "text-gray-600"
                    }`}>
                      {day.slice(0, 1)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Calories & Performance */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-gradient-to-br from-red-500/20 to-red-500/5 border border-red-500/30 rounded-[20px] p-5">
            <div className="flex items-center justify-center w-11 h-11 bg-red-500/20 rounded-full mb-3">
              <Flame className="w-6 h-6 text-red-400" strokeWidth={2} />
            </div>
            <p className="text-2xl font-bold text-white tracking-tight mb-1">
              {(caloriesBurned / 1000).toFixed(1)}k
            </p>
            <p className="text-xs text-gray-400 tracking-tight">Calories Burned</p>
            <div className="mt-3 pt-3 border-t border-red-500/20">
              <p className="text-xs text-red-400 font-medium tracking-tight">All time</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/30 rounded-[20px] p-5">
            <div className="flex items-center justify-center w-11 h-11 bg-green-500/20 rounded-full mb-3">
              <Activity className="w-6 h-6 text-green-400" strokeWidth={2} />
            </div>
            <p className="text-2xl font-bold text-white tracking-tight mb-1">+28%</p>
            <p className="text-xs text-gray-400 tracking-tight">Performance</p>
            <div className="mt-3 pt-3 border-t border-green-500/20">
              <p className="text-xs text-green-400 font-medium tracking-tight">vs last month</p>
            </div>
          </div>
        </div>

        {/* Past Coaches */}
        <div className="mb-6">
          <h2 className="text-white font-semibold mb-4 tracking-tight">Past Coaches</h2>
          <div className="space-y-3">
            {pastCoaches.map((coach) => (
              <div
                key={coach.id}
                className="bg-[#1a1a1a] border border-gray-800/30 rounded-[20px] p-4 flex items-center gap-4 hover:border-gray-700/50 transition-all duration-200"
              >
                <div className="relative flex-shrink-0">
                  <ImageWithFallback
                    src={coach.imageUrl}
                    alt={coach.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-[#c6ff00] text-black text-xs font-semibold px-2 py-0.5 rounded-full tracking-tight">
                    {coach.totalSessions}
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold tracking-tight mb-0.5">{coach.name}</h3>
                  <p className="text-sm text-gray-400 tracking-tight">{coach.sport}</p>
                  <p className="text-xs text-gray-500 mt-1 tracking-tight">Last: {coach.lastSession}</p>
                </div>
                
                <ChevronRight className="w-5 h-5 text-gray-600 flex-shrink-0" strokeWidth={2} />
              </div>
            ))}
          </div>
        </div>

        {/* Tab Selector */}
        <div className="bg-[#1a1a1a] border border-gray-800/30 rounded-[20px] p-1.5 flex gap-1.5 mb-6">
          <button
            onClick={() => setSelectedTab("packages")}
            className={`flex-1 py-2.5 px-4 rounded-[14px] transition-all duration-200 ${
              selectedTab === "packages"
                ? "bg-[#c6ff00] text-black font-semibold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Packages
          </button>
          <button
            onClick={() => setSelectedTab("sessions")}
            className={`flex-1 py-2.5 px-4 rounded-[14px] transition-all duration-200 ${
              selectedTab === "sessions"
                ? "bg-[#c6ff00] text-black font-semibold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Sessions
          </button>
        </div>

        {/* Training Packages */}
        {selectedTab === "packages" && (
          <div className="space-y-4">
            {trainingPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-[#1a1a1a] border border-gray-800/30 rounded-[24px] p-5 hover:border-gray-700/50 transition-all duration-200"
              >
                {/* Coach Info */}
                <div className="flex items-center gap-3 mb-4">
                  <ImageWithFallback
                    src={pkg.coachImage}
                    alt={pkg.coachName}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-white font-semibold tracking-tight">{pkg.packageName}</h3>
                    <p className="text-sm text-gray-400 tracking-tight">{pkg.coachName} • {pkg.sport}</p>
                  </div>
                  {pkg.status === "completed" && (
                    <div className="bg-[#c6ff00]/10 text-[#c6ff00] text-xs font-semibold px-3 py-1.5 rounded-full tracking-tight flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={2.5} />
                      Done
                    </div>
                  )}
                  {pkg.status === "active" && (
                    <div className="bg-blue-500/10 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full tracking-tight">
                      Active
                    </div>
                  )}
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400 tracking-tight">
                      {pkg.completedSessions} / {pkg.totalSessions} sessions
                    </span>
                    <span className="text-sm text-white font-semibold tracking-tight">{pkg.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#c6ff00] transition-all duration-500 rounded-full"
                      style={{ width: `${pkg.progress}%` }}
                    />
                  </div>
                </div>

                {/* Dates */}
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" strokeWidth={2} />
                    <span className="tracking-tight">{pkg.startDate}</span>
                  </div>
                  <span>→</span>
                  <span className="tracking-tight">{pkg.endDate}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Recent Sessions */}
        {selectedTab === "sessions" && (
          <div className="space-y-3">
            {recentSessions.map((session) => (
              <div
                key={session.id}
                className="bg-[#1a1a1a] border border-gray-800/30 rounded-[20px] p-4 hover:border-gray-700/50 transition-all duration-200"
              >
                <div className="flex items-start gap-3">
                  <ImageWithFallback
                    src={session.coachImage}
                    alt={session.coachName}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-white font-semibold tracking-tight">{session.coachName}</h3>
                        <p className="text-sm text-gray-400 tracking-tight">{session.sport}</p>
                      </div>
                      {session.rating && (
                        <div className="flex items-center gap-1 bg-[#c6ff00]/10 px-2.5 py-1 rounded-full">
                          <span className="text-sm font-semibold text-[#c6ff00] tracking-tight">★ {session.rating}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" strokeWidth={2} />
                        <span className="tracking-tight">{session.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" strokeWidth={2} />
                        <span className="tracking-tight">{session.time}</span>
                      </div>
                      <span className="tracking-tight">• {session.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

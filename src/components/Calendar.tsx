import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

type ViewMode = "day" | "week" | "month";

interface BookedSession {
  id: string;
  coachName: string;
  coachImage: string;
  sport: string;
  trainingType: string;
  trainingDetails: string;
  date: Date;
  startTime: string;
  endTime: string;
  location: string;
  status: "upcoming" | "completed" | "cancelled";
}

interface CalendarProps {
  onNavigateToCoach?: (coachName: string) => void;
}

export function Calendar({ onNavigateToCoach }: CalendarProps) {
  const [viewMode, setViewMode] = useState<ViewMode>("week");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showAllTimeSlots, setShowAllTimeSlots] = useState(false);

  // Mock booked sessions data
  const bookedSessions: BookedSession[] = [
    {
      id: "1",
      coachName: "Sarah Mitchell",
      coachImage: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop",
      sport: "Tennis",
      trainingType: "Technical Skills",
      trainingDetails: "Serve technique, forehand cross-court, backhand slice drills",
      date: new Date(2025, 9, 24, 9, 0),
      startTime: "09:00",
      endTime: "10:00",
      location: "Dubai Tennis Academy",
      status: "upcoming"
    },
    {
      id: "2",
      coachName: "Marcus Johnson",
      coachImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
      sport: "Strength Training",
      trainingType: "Upper Body Hypertrophy",
      trainingDetails: "Bench press, shoulder press, pull-ups, cable flies",
      date: new Date(2025, 9, 24, 14, 0),
      startTime: "14:00",
      endTime: "15:00",
      location: "FitZone Gym Dubai",
      status: "upcoming"
    },
    {
      id: "3",
      coachName: "Jackson Hayes",
      coachImage: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&h=400&fit=crop",
      sport: "Boxing",
      trainingType: "Combination & Footwork",
      trainingDetails: "Jab-cross-hook combos, pivot drills, defensive head movement",
      date: new Date(2025, 9, 25, 10, 0),
      startTime: "10:00",
      endTime: "11:30",
      location: "Champions Boxing Dubai",
      status: "upcoming"
    },
    {
      id: "4",
      coachName: "Elena Rodriguez",
      coachImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop",
      sport: "Yoga",
      trainingType: "Vinyasa Flow",
      trainingDetails: "Sun salutations, warrior sequences, balance poses, meditation",
      date: new Date(2025, 9, 26, 7, 0),
      startTime: "07:00",
      endTime: "08:00",
      location: "Zen Wellness Dubai",
      status: "upcoming"
    },
    {
      id: "5",
      coachName: "Diego Santos",
      coachImage: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&h=400&fit=crop",
      sport: "Muay Thai",
      trainingType: "Clinch & Knee Strikes",
      trainingDetails: "Clinch control, knee strikes, elbow techniques, pad work",
      date: new Date(2025, 9, 27, 16, 0),
      startTime: "16:00",
      endTime: "17:30",
      location: "Tiger Muay Thai Dubai",
      status: "upcoming"
    },
    {
      id: "6",
      coachName: "Sarah Mitchell",
      coachImage: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop",
      sport: "Tennis",
      trainingType: "Match Play",
      trainingDetails: "Competitive match practice, strategy, mental toughness",
      date: new Date(2025, 9, 20, 9, 0),
      startTime: "09:00",
      endTime: "10:00",
      location: "Dubai Tennis Academy",
      status: "completed"
    },
  ];

  const navigateDate = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);
    if (viewMode === "day") {
      newDate.setDate(currentDate.getDate() + (direction === "next" ? 1 : -1));
    } else if (viewMode === "week") {
      newDate.setDate(currentDate.getDate() + (direction === "next" ? 7 : -7));
    } else {
      newDate.setMonth(currentDate.getMonth() + (direction === "next" ? 1 : -1));
    }
    setCurrentDate(newDate);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const formatDateHeader = () => {
    const options: Intl.DateTimeFormatOptions = 
      viewMode === "day" 
        ? { weekday: "long", year: "numeric", month: "long", day: "numeric" }
        : viewMode === "week"
        ? { month: "long", year: "numeric" }
        : { month: "long", year: "numeric" };
    
    return currentDate.toLocaleDateString("en-US", options);
  };

  const getWeekDates = () => {
    const weekStart = new Date(currentDate);
    const day = weekStart.getDay();
    const diff = weekStart.getDate() - day + (day === 0 ? -6 : 1); // Start on Monday
    weekStart.setDate(diff);
    
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(weekStart);
      date.setDate(weekStart.getDate() + i);
      return date;
    });
  };

  const getMonthDates = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    const day = startDate.getDay();
    startDate.setDate(startDate.getDate() - (day === 0 ? 6 : day - 1));
    
    const dates = [];
    const currentDateLoop = new Date(startDate);
    
    while (currentDateLoop <= lastDay || dates.length < 35) {
      dates.push(new Date(currentDateLoop));
      currentDateLoop.setDate(currentDateLoop.getDate() + 1);
    }
    
    return dates;
  };

  const getSessionsForDate = (date: Date) => {
    return bookedSessions.filter(session => 
      session.date.toDateString() === date.toDateString()
    );
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSameMonth = (date: Date) => {
    return date.getMonth() === currentDate.getMonth();
  };

  return (
    <div className="h-full bg-[#0f0f0f] text-white overflow-y-auto">
      <div className="max-w-md mx-auto px-5 py-5 pb-20 space-y-5">
        {/* Header */}
        <div className="space-y-5">
          {/* View Mode Selector */}
          <div className="flex gap-2 bg-white/5 rounded-xl p-1.5 border border-white/10">
            <button
              onClick={() => setViewMode("day")}
              className={`flex-1 py-2.5 rounded-lg transition-all duration-300 text-center ${
                viewMode === "day"
                  ? "bg-[#c6ff00] text-black"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              Day
            </button>
            <button
              onClick={() => setViewMode("week")}
              className={`flex-1 py-2.5 rounded-lg transition-all duration-300 text-center ${
                viewMode === "week"
                  ? "bg-[#c6ff00] text-black"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setViewMode("month")}
              className={`flex-1 py-2.5 rounded-lg transition-all duration-300 text-center ${
                viewMode === "month"
                  ? "bg-[#c6ff00] text-black"
                  : "text-white/40 hover:text-white/60"
              }`}
            >
              Month
            </button>
          </div>

          {/* Date Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigateDate("prev")}
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-3">
              <h2 className="text-white/90">{formatDateHeader()}</h2>
              <button
                onClick={goToToday}
                className="px-3 py-1.5 rounded-lg bg-[#c6ff00]/10 text-[#c6ff00] hover:bg-[#c6ff00]/20 transition-all duration-300 border border-[#c6ff00]/20 text-sm"
              >
                Today
              </button>
            </div>
            
            <button
              onClick={() => navigateDate("next")}
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Day View */}
        {viewMode === "day" && (
          <div className="space-y-3">
            {/* Booked Sessions */}
            <div className="space-y-3">
              {getSessionsForDate(currentDate).length > 0 ? (
                getSessionsForDate(currentDate).map(session => (
                  <div
                    key={session.id}
                    className="p-4 bg-gradient-to-br from-[#c6ff00]/10 to-[#c6ff00]/5 rounded-xl border border-[#c6ff00]/20"
                  >
                    {/* Time and Status */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-[#c6ff00]">
                        {session.startTime} - {session.endTime}
                      </div>
                      <div
                        className={`px-2.5 py-1 rounded-lg text-xs ${
                          session.status === "completed"
                            ? "bg-white/10 text-white/40"
                            : session.status === "cancelled"
                            ? "bg-red-500/10 text-red-400"
                            : "bg-[#c6ff00]/10 text-[#c6ff00]"
                        }`}
                      >
                        {session.status}
                      </div>
                    </div>

                    {/* Coach and Sport */}
                    <div className="flex items-start gap-3 mb-3">
                      <button
                        onClick={() => onNavigateToCoach?.(session.coachName)}
                        className="flex-shrink-0 transition-transform hover:scale-105"
                      >
                        <img
                          src={session.coachImage}
                          alt={session.coachName}
                          className="w-14 h-14 rounded-xl object-cover border-2 border-[#c6ff00]/30"
                        />
                      </button>
                      <div className="flex-1">
                        <div className="text-white/90 mb-0.5">{session.sport}</div>
                        <button
                          onClick={() => onNavigateToCoach?.(session.coachName)}
                          className="text-white/60 text-sm hover:text-[#c6ff00] transition-colors"
                        >
                          {session.coachName}
                        </button>
                      </div>
                    </div>

                    {/* Training Details */}
                    <div className="space-y-2 mb-3 p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-white/90 text-sm">{session.trainingType}</div>
                      <div className="text-white/50 text-sm">{session.trainingDetails}</div>
                    </div>

                    {/* Location */}
                    <div className="text-white/40 text-sm">{session.location}</div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-white/40">
                  No sessions booked for this day
                </div>
              )}
            </div>

            {/* Show All Time Slots Toggle */}
            <button
              onClick={() => setShowAllTimeSlots(!showAllTimeSlots)}
              className="w-full py-3 px-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 flex items-center justify-center gap-2 text-white/60 transition-all duration-300"
            >
              {showAllTimeSlots ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Hide Full Schedule
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  Show Full Schedule
                </>
              )}
            </button>

            {/* Full Time Slots */}
            {showAllTimeSlots && (
              <div className="space-y-2 pt-3 border-t border-white/10">
                {Array.from({ length: 24 }, (_, hour) => {
                  const timeSlot = `${hour.toString().padStart(2, "0")}:00`;
                  const sessionsInSlot = getSessionsForDate(currentDate).filter(session => {
                    const sessionHour = parseInt(session.startTime.split(":")[0]);
                    return sessionHour === hour;
                  });
                  const hasSession = sessionsInSlot.length > 0;

                  return (
                    <div
                      key={hour}
                      className={`flex items-center gap-3 p-2.5 rounded-lg ${
                        hasSession
                          ? "bg-[#c6ff00]/5 border border-[#c6ff00]/20"
                          : "bg-white/[0.02] border border-white/5"
                      }`}
                    >
                      <div className={`w-16 text-sm ${hasSession ? "text-[#c6ff00]" : "text-white/30"}`}>
                        {timeSlot}
                      </div>
                      <div className="flex-1 text-sm text-white/40">
                        {hasSession ? sessionsInSlot[0].sport : "Available"}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Week View */}
        {viewMode === "week" && (
          <div className="space-y-3">
            {/* Week Days Header */}
            <div className="grid grid-cols-7 gap-2">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <div key={day} className="text-center text-white/40 text-sm py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Week Dates */}
            <div className="grid grid-cols-7 gap-2">
              {getWeekDates().map((date, index) => {
                const sessions = getSessionsForDate(date);
                const today = isToday(date);

                return (
                  <div
                    key={index}
                    className={`aspect-square rounded-lg border transition-all duration-300 ${
                      today
                        ? "bg-[#c6ff00]/10 border-[#c6ff00]/30"
                        : sessions.length > 0
                        ? "bg-white/5 border-white/10"
                        : "bg-white/[0.02] border-white/5"
                    }`}
                  >
                    <div className="h-full flex flex-col items-center justify-center p-1">
                      <div
                        className={`text-sm mb-1 ${
                          today ? "text-[#c6ff00]" : "text-white/60"
                        }`}
                      >
                        {date.getDate()}
                      </div>
                      {sessions.length > 0 && (
                        <div className="flex gap-0.5">
                          {sessions.slice(0, 3).map((_, i) => (
                            <div
                              key={i}
                              className="w-1 h-1 rounded-full bg-[#c6ff00]"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Week Sessions List */}
            <div className="space-y-2 mt-5">
              <h3 className="text-white/60 text-sm">This Week's Sessions</h3>
              {getWeekDates()
                .flatMap(date => getSessionsForDate(date))
                .sort((a, b) => a.date.getTime() - b.date.getTime())
                .map(session => (
                  <div
                    key={session.id}
                    className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/[0.07] transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3">
                        <button
                          onClick={() => onNavigateToCoach?.(session.coachName)}
                          className="flex-shrink-0 transition-transform hover:scale-105"
                        >
                          <img
                            src={session.coachImage}
                            alt={session.coachName}
                            className="w-12 h-12 rounded-lg object-cover border-2 border-[#c6ff00]/30"
                          />
                        </button>
                        <div>
                          <div className="text-white/90 mb-0.5">{session.sport}</div>
                          <button
                            onClick={() => onNavigateToCoach?.(session.coachName)}
                            className="text-white/60 text-sm hover:text-[#c6ff00] transition-colors"
                          >
                            {session.coachName}
                          </button>
                        </div>
                      </div>
                      <div
                        className={`px-2.5 py-1 rounded-lg text-xs ${
                          session.status === "completed"
                            ? "bg-white/10 text-white/40"
                            : session.status === "cancelled"
                            ? "bg-red-500/10 text-red-400"
                            : "bg-[#c6ff00]/10 text-[#c6ff00]"
                        }`}
                      >
                        {session.status}
                      </div>
                    </div>
                    <div className="space-y-2 mb-2 p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-white/90 text-sm">{session.trainingType}</div>
                      <div className="text-white/50 text-sm">{session.trainingDetails}</div>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="text-white/40">
                        {session.date.toLocaleDateString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric"
                        })}
                      </div>
                      <div className="text-[#c6ff00]">
                        {session.startTime} - {session.endTime}
                      </div>
                    </div>
                    <div className="text-white/40 text-sm mt-1.5">{session.location}</div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Month View */}
        {viewMode === "month" && (
          <div className="space-y-3">
            {/* Month Days Header */}
            <div className="grid grid-cols-7 gap-2">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <div key={day} className="text-center text-white/40 text-sm py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Month Dates Grid */}
            <div className="grid grid-cols-7 gap-2">
              {getMonthDates().map((date, index) => {
                const sessions = getSessionsForDate(date);
                const today = isToday(date);
                const sameMonth = isSameMonth(date);

                return (
                  <div
                    key={index}
                    className={`aspect-square rounded-lg border transition-all duration-300 ${
                      today
                        ? "bg-[#c6ff00]/10 border-[#c6ff00]/30"
                        : sessions.length > 0 && sameMonth
                        ? "bg-white/5 border-white/10"
                        : "bg-white/[0.02] border-white/5"
                    }`}
                  >
                    <div className="h-full flex flex-col items-center justify-center p-1">
                      <div
                        className={`text-sm mb-1 ${
                          today
                            ? "text-[#c6ff00]"
                            : sameMonth
                            ? "text-white/60"
                            : "text-white/20"
                        }`}
                      >
                        {date.getDate()}
                      </div>
                      {sessions.length > 0 && sameMonth && (
                        <div className="flex gap-0.5">
                          {sessions.slice(0, 2).map((_, i) => (
                            <div
                              key={i}
                              className="w-1 h-1 rounded-full bg-[#c6ff00]"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Upcoming Sessions */}
            <div className="space-y-2 mt-5">
              <h3 className="text-white/60 text-sm">Upcoming Sessions</h3>
              {bookedSessions
                .filter(session => session.status === "upcoming" && session.date >= new Date())
                .sort((a, b) => a.date.getTime() - b.date.getTime())
                .slice(0, 5)
                .map(session => (
                  <div
                    key={session.id}
                    className="p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/[0.07] transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3">
                        <button
                          onClick={() => onNavigateToCoach?.(session.coachName)}
                          className="flex-shrink-0 transition-transform hover:scale-105"
                        >
                          <img
                            src={session.coachImage}
                            alt={session.coachName}
                            className="w-12 h-12 rounded-lg object-cover border-2 border-[#c6ff00]/30"
                          />
                        </button>
                        <div>
                          <div className="text-white/90 mb-0.5">{session.sport}</div>
                          <button
                            onClick={() => onNavigateToCoach?.(session.coachName)}
                            className="text-white/60 text-sm hover:text-[#c6ff00] transition-colors"
                          >
                            {session.coachName}
                          </button>
                        </div>
                      </div>
                      <div className="px-2.5 py-1 rounded-lg text-xs bg-[#c6ff00]/10 text-[#c6ff00]">
                        {session.status}
                      </div>
                    </div>
                    <div className="space-y-2 mb-2 p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="text-white/90 text-sm">{session.trainingType}</div>
                      <div className="text-white/50 text-sm">{session.trainingDetails}</div>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="text-white/40">
                        {session.date.toLocaleDateString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric"
                        })}
                      </div>
                      <div className="text-[#c6ff00]">
                        {session.startTime} - {session.endTime}
                      </div>
                    </div>
                    <div className="text-white/40 text-sm mt-1.5">{session.location}</div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

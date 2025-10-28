import { Star, Award, Users, MapPin, ChevronDown, Clock, Trophy } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ReviewCard } from "./ReviewCard";
import { BookingFlow } from "./BookingFlow";
import { useState } from "react";

interface Review {
  id: number;
  clientName: string;
  rating: number;
  comment: string;
  date: string;
}

interface Coach {
  id: number;
  name: string;
  specialty: string;
  experience: number;
  certifications: string[];
  rating: number;
  reviewCount: number;
  clientCount: number;
  hourlyRate: number;
  location: string;
  distance: string;
  bio: string;
  image: string;
  reviews: Review[];
}

interface CoachCardProps {
  coach: Coach;
  onSelect: () => void;
  isSelected: boolean;
}

export function CoachCard({ coach, onSelect, isSelected }: CoachCardProps) {
  const [showReviews, setShowReviews] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  return (
    <div className="space-y-4">
      {/* Main Coach Card */}
      <div 
        className="relative w-full aspect-[3/4] rounded-[26px] overflow-hidden group cursor-pointer"
        onClick={onSelect}
      >
        {/* Background Image */}
        <ImageWithFallback
          src={coach.image}
          alt={coach.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-95" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />

        {/* Top Info Bar */}
        <div className="absolute top-0 left-0 right-0 p-5 flex items-start justify-between">
          <div className="flex items-center gap-2 bg-black/70 backdrop-blur-xl px-4 py-2.5 rounded-[16px] border border-white/10">
            <Star className="w-3.5 h-3.5 text-[#c6ff00]" fill="#c6ff00" strokeWidth={2} />
            <span className="text-white text-sm font-semibold tracking-tight">{coach.rating}</span>
            <span className="text-gray-400 text-xs font-medium">({coach.reviewCount})</span>
          </div>
          <div className="bg-[#c6ff00] px-4 py-2.5 rounded-[16px] shadow-lg shadow-[#c6ff00]/30">
            <span className="text-black text-sm font-bold tracking-tight">${coach.hourlyRate}/hr</span>
          </div>
        </div>

        {/* Bottom Info Section */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          {/* Coach Name & Specialty */}
          <div className="mb-5">
            <h2 className="text-white text-[26px] font-bold mb-1.5 tracking-tight leading-tight">{coach.name}</h2>
            <p className="text-[#c6ff00] mb-3 font-semibold tracking-tight">{coach.specialty}</p>
            <p className="text-gray-300 text-[13px] leading-relaxed font-medium">{coach.bio}</p>
          </div>

          {/* Stats Row */}
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <div className="flex items-center gap-1.5 bg-black/70 backdrop-blur-xl px-3 py-2 rounded-xl border border-white/10">
              <Clock className="w-3 h-3 text-[#c6ff00]" strokeWidth={2} />
              <span className="text-white text-xs font-semibold tracking-tight">{coach.experience}y</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/70 backdrop-blur-xl px-3 py-2 rounded-xl border border-white/10">
              <Users className="w-3 h-3 text-[#c6ff00]" strokeWidth={2} />
              <span className="text-white text-xs font-semibold tracking-tight">{coach.clientCount}+</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black/70 backdrop-blur-xl px-3 py-2 rounded-xl border border-white/10">
              <MapPin className="w-3 h-3 text-[#c6ff00]" strokeWidth={2} />
              <span className="text-white text-xs font-semibold tracking-tight">{coach.distance}</span>
            </div>
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap gap-2 mb-5">
            {coach.certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-1.5 bg-[#c6ff00]/15 backdrop-blur-xl border border-[#c6ff00]/30 px-3 py-1.5 rounded-xl">
                <Award className="w-2.5 h-2.5 text-[#c6ff00]" strokeWidth={2} />
                <span className="text-[#c6ff00] text-[10px] font-bold tracking-wide uppercase">{cert}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowReviews(!showReviews);
              }}
              className="flex-1 bg-[#1a1a1a]/90 backdrop-blur-xl hover:bg-[#222222]/90 text-white py-3.5 rounded-[16px] transition-all duration-200 active:scale-[0.97] border border-gray-700/30"
            >
              <div className="flex items-center justify-center gap-2">
                <Trophy className="w-4 h-4" strokeWidth={2} />
                <span className="font-semibold text-sm tracking-tight">Reviews</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showReviews ? "rotate-180" : ""}`} strokeWidth={2} />
              </div>
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowBooking(true);
              }}
              className="flex-1 bg-[#c6ff00] hover:bg-[#d4ff00] text-black py-3.5 rounded-[16px] transition-all duration-200 active:scale-[0.97] shadow-lg shadow-[#c6ff00]/30 font-bold text-sm tracking-tight flex items-center justify-center"
            >
              Book Session
            </button>
          </div>
        </div>

        {/* Selection Ring */}
        {isSelected && (
          <div className="absolute inset-0 border-[3px] border-[#c6ff00] rounded-[26px] pointer-events-none" />
        )}
      </div>

      {/* Reviews Section - Expandable */}
      {showReviews && (
        <div className="bg-[#1a1a1a] rounded-[26px] p-6 border border-gray-800/30 space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold tracking-tight">Client Reviews</h3>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[#c6ff00]" fill="#c6ff00" strokeWidth={2} />
              <span className="text-white font-bold tracking-tight">{coach.rating}</span>
              <span className="text-gray-500 text-sm font-medium">({coach.reviews.length})</span>
            </div>
          </div>
          {coach.reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}
      
      {/* Booking Flow */}
      <BookingFlow 
        isOpen={showBooking}
        onClose={() => setShowBooking(false)}
        coach={coach}
      />
    </div>
  );
}

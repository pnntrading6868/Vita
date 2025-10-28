import { X, Check } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface FilterSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: FilterState) => void;
  currentFilters: FilterState;
}

export interface FilterState {
  locations: string[];
  sports: string[];
  priceRange: [number, number];
  minRating: number;
  maxDistance: number;
}

interface Sport {
  id: string;
  name: string;
  category: "combat" | "racquet" | "fitness" | "wellness";
  imageUrl: string;
}

const sportsData: Sport[] = [
  { 
    id: "boxing", 
    name: "Boxing", 
    category: "combat",
    imageUrl: "https://images.unsplash.com/photo-1667496778458-f117eeb87a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjB0cmFpbmluZyUyMGdsb3Zlc3xlbnwxfHx8fDE3NjEyMzMxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  { 
    id: "muay-thai", 
    name: "Muay Thai", 
    category: "combat",
    imageUrl: "https://images.unsplash.com/photo-1601039834001-7d32a613c60d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWF5JTIwdGhhaSUyMGZpZ2h0ZXJ8ZW58MXx8fHwxNzYxMjMzMTIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  { 
    id: "mma", 
    name: "MMA", 
    category: "combat",
    imageUrl: "https://images.unsplash.com/photo-1688141401601-75a05b406c7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtbWElMjBtaXhlZCUyMG1hcnRpYWwlMjBhcnRzfGVufDF8fHx8MTc2MTIzMzEyMXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  { 
    id: "bjj", 
    name: "BJJ", 
    category: "combat",
    imageUrl: "https://images.unsplash.com/photo-1720730790876-3508a749abfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF6aWxpYW4lMjBqaXUlMjBqaXRzdSUyMGJqanxlbnwxfHx8fDE3NjEyMzMxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  { 
    id: "tennis", 
    name: "Tennis", 
    category: "racquet",
    imageUrl: "https://images.unsplash.com/photo-1609196636547-daeffbbba2a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjByYWNrZXQlMjBjb3VydHxlbnwxfHx8fDE3NjEyMzMxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  { 
    id: "pickleball", 
    name: "Pickleball", 
    category: "racquet",
    imageUrl: "https://images.unsplash.com/photo-1710772099352-f8fbb7b30977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWNrbGViYWxsJTIwcGFkZGxlfGVufDF8fHx8MTc2MTIzMzEyMnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  { 
    id: "paddle", 
    name: "Paddle", 
    category: "racquet",
    imageUrl: "https://images.unsplash.com/photo-1657704358775-ed705c7388d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWRlbCUyMHRlbm5pc3xlbnwxfHx8fDE3NjEyMzMxMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  { 
    id: "badminton", 
    name: "Badminton", 
    category: "racquet",
    imageUrl: "https://images.unsplash.com/photo-1758798478573-d653d9b6ac6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWRtaW50b24lMjByYWNrZXQlMjBzaHV0dGxlY29ja3xlbnwxfHx8fDE3NjEyMzMxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  { 
    id: "yoga", 
    name: "Yoga", 
    category: "wellness",
    imageUrl: "https://images.unsplash.com/photo-1635617240041-c95219c05542?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMHBvc2V8ZW58MXx8fHwxNzYxMTg1OTk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  { 
    id: "pilates", 
    name: "Pilates", 
    category: "wellness",
    imageUrl: "https://images.unsplash.com/photo-1731325632689-7ecab02d39f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxhdGVzJTIwZXhlcmNpc2UlMjBmaXRuZXNzfGVufDF8fHx8MTc2MTIzMzEyNHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  { 
    id: "strength", 
    name: "Strength & Conditioning", 
    category: "fitness",
    imageUrl: "https://images.unsplash.com/photo-1738523686578-f18348c8292b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlbmd0aCUyMGNvbmRpdGlvbmluZyUyMGd5bXxlbnwxfHx8fDE3NjEyMzMxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  { 
    id: "weightlifting", 
    name: "Weightlifting", 
    category: "fitness",
    imageUrl: "https://images.unsplash.com/photo-1689514226794-beb8df907ef7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWlnaHRsaWZ0aW5nJTIwYmFyYmVsbHxlbnwxfHx8fDE3NjEyMzMxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  { 
    id: "crossfit", 
    name: "Crossfit", 
    category: "fitness",
    imageUrl: "https://images.unsplash.com/photo-1662381906696-bcad03513531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zc2ZpdCUyMHRyYWluaW5nJTIwd29ya291dHxlbnwxfHx8fDE3NjEyMzMxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  { 
    id: "therapy", 
    name: "Sports Therapy", 
    category: "wellness",
    imageUrl: "https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjB0aGVyYXB5JTIwbWFzc2FnZXxlbnwxfHx8fDE3NjEyMzIyMTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
];

const ratings = [
  { value: 0, label: "All Ratings" },
  { value: 4.0, label: "4.0+" },
  { value: 4.5, label: "4.5+" },
  { value: 4.8, label: "4.8+" },
  { value: 5.0, label: "5.0" }
];

const categoryOrder = ["combat", "racquet", "fitness", "wellness"];
const categoryNames = {
  combat: "Combat Sports",
  racquet: "Racquet Sports",
  fitness: "Strength & Fitness",
  wellness: "Wellness & Recovery"
};

export function FilterSheet({ isOpen, onClose, onApplyFilters, currentFilters }: FilterSheetProps) {
  const [filters, setFilters] = useState<FilterState>(currentFilters);

  if (!isOpen) return null;

  const handleApply = () => {
    onApplyFilters(filters);
    onClose();
  };

  const handleReset = () => {
    const resetFilters: FilterState = {
      locations: [],
      sports: [],
      priceRange: [0, 200],
      minRating: 0,
      maxDistance: 50
    };
    setFilters(resetFilters);
  };

  const toggleSport = (sportId: string) => {
    setFilters(prev => ({
      ...prev,
      sports: prev.sports.includes(sportId)
        ? prev.sports.filter(s => s !== sportId)
        : [...prev.sports, sportId]
    }));
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      
      {/* Sheet */}
      <div className="fixed inset-x-0 bottom-0 z-50 bg-[#0f0f0f] rounded-t-[30px] max-h-[85vh] overflow-hidden animate-slide-up">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="sticky top-0 bg-[#0f0f0f] border-b border-gray-800/30 px-5 py-5 flex items-center justify-between z-10">
            <h2 className="text-white font-semibold tracking-tight">Filters</h2>
            <button 
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center hover:bg-gray-800/30 rounded-xl transition-all duration-200"
            >
              <X className="w-5 h-5 text-white" strokeWidth={2} />
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(85vh-140px)] px-5 pb-5">
            
            {/* Sports Filter with Images */}
            <div className="py-5 border-b border-gray-800/20">
              <h3 className="text-white font-medium mb-4 tracking-tight">Sports & Activities</h3>
              {categoryOrder.map((category) => {
                const categorySports = sportsData.filter(s => s.category === category);
                return (
                  <div key={category} className="mb-5">
                    <h4 className="text-sm text-gray-400 font-medium mb-3 tracking-tight">
                      {categoryNames[category as keyof typeof categoryNames]}
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {categorySports.map((sport) => {
                        const isSelected = filters.sports.includes(sport.id);
                        return (
                          <button
                            key={sport.id}
                            onClick={() => toggleSport(sport.id)}
                            className={`relative rounded-[18px] overflow-hidden transition-all duration-200 border group ${
                              isSelected
                                ? "border-[#c6ff00] ring-2 ring-[#c6ff00]/30"
                                : "border-gray-800/30 hover:border-gray-700/50"
                            }`}
                          >
                            {/* Sport Image */}
                            <div className="relative w-full aspect-[4/3]">
                              <ImageWithFallback
                                src={sport.imageUrl}
                                alt={sport.name}
                                className="w-full h-full object-cover"
                              />
                              {/* Gradient Overlay */}
                              <div className={`absolute inset-0 transition-all duration-200 ${
                                isSelected
                                  ? "bg-gradient-to-t from-[#c6ff00] via-[#c6ff00]/60 to-transparent"
                                  : "bg-gradient-to-t from-black/90 via-black/40 to-transparent"
                              }`} />
                              
                              {/* Selected Check */}
                              {isSelected && (
                                <div className="absolute top-2 right-2 w-6 h-6 bg-black rounded-full flex items-center justify-center shadow-lg">
                                  <Check className="w-3.5 h-3.5 text-[#c6ff00]" strokeWidth={3} />
                                </div>
                              )}
                            </div>
                            
                            {/* Sport Name */}
                            <div className="absolute bottom-0 left-0 right-0 p-3">
                              <h3 className={`text-sm font-semibold tracking-tight text-left transition-colors duration-200 ${
                                isSelected ? "text-black" : "text-white"
                              }`}>
                                {sport.name}
                              </h3>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Distance Filter */}
            <div className="py-5 border-b border-gray-800/20">
              <h3 className="text-white font-medium mb-4 tracking-tight">Distance</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-400">Within</span>
                  <span className="text-[#c6ff00] font-semibold">{filters.maxDistance}km</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={filters.maxDistance}
                  onChange={(e) => setFilters(prev => ({ ...prev, maxDistance: Number(e.target.value) }))}
                  className="w-full h-2 bg-gray-800 rounded-full appearance-none cursor-pointer
                    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 
                    [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#c6ff00] 
                    [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-all
                    [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 
                    [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#c6ff00] 
                    [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #c6ff00 0%, #c6ff00 ${(filters.maxDistance / 50) * 100}%, #1f1f1f ${(filters.maxDistance / 50) * 100}%, #1f1f1f 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 tracking-tight">
                  <span>1km</span>
                  <span>25km</span>
                  <span>50km</span>
                </div>
              </div>
            </div>

            {/* Price Range Filter */}
            <div className="py-5 border-b border-gray-800/20">
              <h3 className="text-white font-medium mb-4 tracking-tight">Price Range (per hour)</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <label className="text-xs text-gray-500 mb-2 block">Min</label>
                    <input
                      type="number"
                      value={filters.priceRange[0]}
                      onChange={(e) => setFilters(prev => ({
                        ...prev,
                        priceRange: [parseInt(e.target.value) || 0, prev.priceRange[1]]
                      }))}
                      className="w-full bg-[#1a1a1a] border border-gray-800/30 rounded-[14px] px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c6ff00]"
                      placeholder="$0"
                    />
                  </div>
                  <div className="text-gray-600 mt-6">—</div>
                  <div className="flex-1">
                    <label className="text-xs text-gray-500 mb-2 block">Max</label>
                    <input
                      type="number"
                      value={filters.priceRange[1]}
                      onChange={(e) => setFilters(prev => ({
                        ...prev,
                        priceRange: [prev.priceRange[0], parseInt(e.target.value) || 200]
                      }))}
                      className="w-full bg-[#1a1a1a] border border-gray-800/30 rounded-[14px] px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c6ff00]"
                      placeholder="$200"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>${filters.priceRange[0]}</span>
                  <span>${filters.priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Rating Filter */}
            <div className="py-5">
              <h3 className="text-white font-medium mb-4 tracking-tight">Minimum Rating</h3>
              <div className="flex gap-2">
                {ratings.map((rating) => (
                  <button
                    key={rating.value}
                    onClick={() => setFilters(prev => ({ ...prev, minRating: rating.value }))}
                    className={`flex-1 px-4 py-3 rounded-[14px] text-sm font-medium tracking-tight transition-all duration-200 border ${
                      filters.minRating === rating.value
                        ? "bg-[#c6ff00]/10 border-[#c6ff00] text-[#c6ff00]"
                        : "bg-[#1a1a1a] border-gray-800/30 text-gray-400 hover:border-gray-700"
                    }`}
                  >
                    {rating.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="sticky bottom-0 bg-[#0f0f0f] border-t border-gray-800/30 px-5 py-4 flex gap-3">
            <button
              onClick={handleReset}
              className="flex-1 px-6 py-3.5 bg-[#1a1a1a] hover:bg-[#222222] text-white rounded-[16px] font-medium tracking-tight transition-all duration-200"
            >
              Reset
            </button>
            <button
              onClick={handleApply}
              className="flex-1 px-6 py-3.5 bg-[#c6ff00] hover:bg-[#d4ff00] text-black rounded-[16px] font-semibold tracking-tight transition-all duration-200 shadow-lg shadow-[#c6ff00]/25"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

import { useState, useRef, useEffect } from "react";
import { MapPin, Filter, List, Navigation, Clock, Star, Phone, X, ChevronRight, Check, Plus, Minus, Layers } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { GymProfile } from "./GymProfile";

interface Facility {
  id: number;
  name: string;
  type: string;
  category: string;
  address: string;
  distance: number;
  rating: number;
  reviews: number;
  image: string;
  hours: string;
  phone: string;
  amenities: string[];
  lat: number;
  lng: number;
  isOpen: boolean;
}

const facilityCategories = [
  "Boutique Gym",
  "Commercial Gym",
  "Pilates Studio",
  "Boxing Gym",
  "Fight Gym",
  "Muay Thai Gym",
  "BJJ Gym",
  "Tennis Court",
  "Pickleball Court",
  "Padel Court",
  "Badminton Court",
  "Basketball Court",
  "Football Field",
  "Volleyball Court",
  "Swimming Pool",
  "Running Track"
];

const facilities: Facility[] = [
  {
    id: 1,
    name: "Fitness First Dubai Marina",
    type: "Commercial Gym",
    category: "gym",
    address: "Marina Mall, Dubai Marina",
    distance: 2.3,
    rating: 4.8,
    reviews: 1247,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600",
    hours: "5:00 AM - 11:00 PM",
    phone: "+971 4 399 4448",
    amenities: ["Spa", "Pool", "Sauna", "Cafe"],
    lat: 25.0805,
    lng: 55.1405,
    isOpen: true
  },
  {
    id: 2,
    name: "Warehouse Gym Dubai",
    type: "Boutique Gym",
    category: "gym",
    address: "Al Quoz Industrial Area 3, Dubai",
    distance: 2.4,
    rating: 4.9,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600",
    hours: "5:30 AM - 10:00 PM",
    phone: "+971 4 333 7420",
    amenities: ["Showers", "Lockers", "Towel Service"],
    lat: 25.1285,
    lng: 55.2325,
    isOpen: true
  },
  {
    id: 3,
    name: "Round 10 Boxing Club",
    type: "Boxing Gym",
    category: "combat",
    address: "Umm Suqeim, Jumeirah Beach Road",
    distance: 3.1,
    rating: 4.9,
    reviews: 654,
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600",
    hours: "6:00 AM - 10:00 PM",
    phone: "+971 4 348 4448",
    amenities: ["Heavy Bags", "Ring", "Speed Bags"],
    lat: 25.1480,
    lng: 55.2010,
    isOpen: true
  },
  {
    id: 4,
    name: "Creed Combat Dubai",
    type: "Muay Thai Gym",
    category: "combat",
    address: "Motor City, Dubai",
    distance: 3.8,
    rating: 5.0,
    reviews: 423,
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600",
    hours: "7:00 AM - 10:00 PM",
    phone: "+971 4 454 2233",
    amenities: ["Thai Pads", "Heavy Bags", "Showers"],
    lat: 25.0470,
    lng: 55.2240,
    isOpen: true
  },
  {
    id: 5,
    name: "Alliance BJJ Dubai",
    type: "BJJ Gym",
    category: "combat",
    address: "Al Quoz, Dubai",
    distance: 4.2,
    rating: 4.9,
    reviews: 531,
    image: "https://images.unsplash.com/photo-1555597408-26bc8e548a46?w=600",
    hours: "6:00 AM - 10:00 PM",
    phone: "+971 4 321 5544",
    amenities: ["Mats", "Showers", "Pro Shop"],
    lat: 25.1365,
    lng: 55.2280,
    isOpen: true
  },
  {
    id: 6,
    name: "Reform Pilates Studio",
    type: "Pilates Studio",
    category: "wellness",
    address: "Jumeirah Lakes Towers, Dubai",
    distance: 1.9,
    rating: 4.8,
    reviews: 389,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600",
    hours: "6:00 AM - 9:00 PM",
    phone: "+971 4 447 8899",
    amenities: ["Reformers", "TRX", "Showers"],
    lat: 25.0720,
    lng: 55.1445,
    isOpen: true
  },
  {
    id: 7,
    name: "Dubai Sports City Tennis",
    type: "Tennis Court",
    category: "courts",
    address: "Dubai Sports City",
    distance: 5.6,
    rating: 4.5,
    reviews: 287,
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600",
    hours: "6:00 AM - 11:00 PM",
    phone: "+971 4 448 0000",
    amenities: ["12 Courts", "Lighting", "Pro Shop"],
    lat: 25.0385,
    lng: 55.2145,
    isOpen: true
  },
  {
    id: 8,
    name: "Bounce Dubai Pickleball",
    type: "Pickleball Court",
    category: "courts",
    address: "Al Wasl, Dubai",
    distance: 6.2,
    rating: 4.7,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600",
    hours: "7:00 AM - 10:00 PM",
    phone: "+971 4 385 9999",
    amenities: ["8 Courts", "Equipment Rental", "Cafe"],
    lat: 25.1650,
    lng: 55.2490,
    isOpen: true
  },
  {
    id: 9,
    name: "Gold's Gym Dubai Mall",
    type: "Commercial Gym",
    category: "gym",
    address: "Dubai Mall, Downtown Dubai",
    distance: 1.2,
    rating: 4.3,
    reviews: 1876,
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600",
    hours: "5:00 AM - 12:00 AM",
    phone: "+971 4 339 8750",
    amenities: ["Pool", "Basketball", "Sauna", "Classes"],
    lat: 25.1975,
    lng: 55.2790,
    isOpen: true
  },
  {
    id: 10,
    name: "Hamdan Sports Complex Pool",
    type: "Swimming Pool",
    category: "pools",
    address: "Al Mamzar, Dubai",
    distance: 2.8,
    rating: 4.6,
    reviews: 445,
    image: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=600",
    hours: "6:00 AM - 10:00 PM",
    phone: "+971 4 296 1111",
    amenities: ["Olympic Pool", "Diving Boards", "Lap Lanes"],
    lat: 25.2880,
    lng: 55.3500,
    isOpen: true
  },
  {
    id: 11,
    name: "Nad Al Sheba Sports Complex",
    type: "Running Track",
    category: "tracks",
    address: "Nad Al Sheba, Dubai",
    distance: 2.9,
    rating: 4.7,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600",
    hours: "6:00 AM - 10:00 PM",
    phone: "+971 4 327 5555",
    amenities: ["400m Track", "Bleachers", "Field"],
    lat: 25.1685,
    lng: 55.3245,
    isOpen: true
  },
  {
    id: 12,
    name: "Zabeel Park Basketball Courts",
    type: "Basketball Court",
    category: "courts",
    address: "Zabeel Park, Dubai",
    distance: 3.4,
    rating: 4.4,
    reviews: 198,
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600",
    hours: "6:00 AM - 11:00 PM",
    phone: "+971 4 398 2222",
    amenities: ["4 Courts", "Lighting", "Free Access"],
    lat: 25.2305,
    lng: 55.3030,
    isOpen: true
  }
];

interface MapProps {
  onBack?: () => void;
}

export function Map({ onBack }: MapProps) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [showFilterSheet, setShowFilterSheet] = useState(false);
  const [viewMode, setViewMode] = useState<"map" | "list">("map");
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [showGymProfile, setShowGymProfile] = useState(false);
  
  // Map interaction state
  const [zoom, setZoom] = useState(1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const mapRef = useRef<HTMLDivElement>(null);

  const filteredFacilities = selectedFilters.length === 0
    ? facilities
    : facilities.filter(f => selectedFilters.includes(f.type));

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  // Handle zoom
  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.3, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.3, 0.5));
  };

  // Handle mouse/touch drag
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - panX,
      y: e.clientY - panY
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - panX,
        y: e.touches[0].clientY - panY
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPanX(e.clientX - dragStart.x);
      setPanY(e.clientY - dragStart.y);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && e.touches.length === 1) {
      setPanX(e.touches[0].clientX - dragStart.x);
      setPanY(e.touches[0].clientY - dragStart.y);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle scroll wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setZoom(prev => Math.max(0.5, Math.min(3, prev + delta)));
  };

  // Reset map position
  const handleRecenter = () => {
    setPanX(0);
    setPanY(0);
    setZoom(1);
  };

  // Convert lat/lng to screen coordinates
  const latLngToPixel = (lat: number, lng: number) => {
    // Normalize to -1 to 1 range (adjusted for Dubai: ~25.2°N, 55.3°E)
    const x = ((lng - 55.3) / 0.3) * 100 + 50; // Adjust for Dubai area
    const y = ((25.2 - lat) / 0.3) * 100 + 50; // Inverted for screen coords
    return { x, y }; // Return in percentage
  };

  return (
    <div className="h-full w-full bg-[#0f0f0f] relative">
      
      {/* Map View */}
      {viewMode === "map" && (
        <div className="absolute inset-0">
          {/* Interactive Map Container */}
          <div
            ref={mapRef}
            className="absolute inset-0 overflow-hidden cursor-grab active:cursor-grabbing touch-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            onWheel={handleWheel}
          >
            {/* Map Content */}
            <div
              className="absolute inset-0 transition-transform duration-100"
              style={{
                transform: `translate(${panX}px, ${panY}px) scale(${zoom})`,
                transformOrigin: 'center center'
              }}
            >
              {/* Map Background with Streets */}
              <div className="absolute inset-0 bg-[#1a1a1a]">
                {/* Grid Pattern */}
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: "80px 80px"
                  }}
                />
                
                {/* Major Streets */}
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.15) 2px, transparent 2px),
                      linear-gradient(90deg, rgba(255,255,255,0.15) 2px, transparent 2px)
                    `,
                    backgroundSize: "240px 240px"
                  }}
                />

                {/* Decorative Map Elements */}
                <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-green-500/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 left-1/2 w-36 h-36 bg-[#c6ff00]/5 rounded-full blur-3xl" />

                {/* Location Markers */}
                <div className="absolute inset-0" style={{ width: '200%', height: '200%', left: '-50%', top: '-50%' }}>
                  {filteredFacilities.map((facility) => {
                    const pos = latLngToPixel(facility.lat, facility.lng);
                    
                    return (
                      <button
                        key={facility.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedFacility(facility);
                          setShowGymProfile(false);
                        }}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-125 z-10"
                        style={{ 
                          left: `${pos.x}%`, 
                          top: `${pos.y}%`,
                          pointerEvents: 'auto'
                        }}
                      >
                        <div className="relative">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-3 border-black transition-all duration-300 ${
                            selectedFacility?.id === facility.id
                              ? "bg-[#c6ff00] shadow-[#c6ff00]/60 scale-125"
                              : "bg-[#c6ff00] shadow-[#c6ff00]/40"
                          }`}>
                            <MapPin className="w-6 h-6 text-black" strokeWidth={2.5} fill="currentColor" />
                          </div>
                          {selectedFacility?.id === facility.id && (
                            <div className="absolute -inset-1 bg-[#c6ff00]/30 rounded-full animate-ping" />
                          )}
                        </div>
                      </button>
                    );
                  })}

                  {/* User Location */}
                  <div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                    style={{ pointerEvents: 'none' }}
                  >
                    <div className="relative">
                      <div className="w-5 h-5 bg-blue-500 rounded-full border-3 border-white shadow-lg" />
                      <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75" />
                      <div className="absolute -inset-12 border-2 border-blue-500/30 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Header with Back Button */}
          <div className="absolute top-0 left-0 right-0 z-30 bg-[#0f0f0f] border-b border-gray-800/20 pointer-events-auto">
            <div className="max-w-md mx-auto px-5 py-5">
              <div className="flex items-center gap-4 mb-4">
                <button
                  onClick={onBack}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-800/30 rounded-xl transition-all duration-200 active:scale-95"
                >
                  <ChevronRight className="w-6 h-6 text-white rotate-180" strokeWidth={2} />
                </button>
                <div className="flex-1">
                  <p className="text-gray-500 text-xs font-medium tracking-wide uppercase mb-1">Find Your</p>
                  <h2 className="text-white font-semibold tracking-tight">Coaches</h2>
                </div>
                <button
                  onClick={() => setViewMode("list")}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-800/30 rounded-xl transition-all duration-200 active:scale-95"
                >
                  <List className="w-5 h-5 text-white" strokeWidth={2} />
                </button>
              </div>

              {/* Filter Button */}
              <button
                onClick={() => setShowFilterSheet(true)}
                className="w-full flex items-center justify-between bg-[#1a1a1a] border border-gray-800/30 rounded-[18px] px-4 py-3 hover:border-gray-700/50 transition-all duration-200"
              >
                <div className="flex items-center gap-2">
                  <Filter className="w-[18px] h-[18px] text-white" strokeWidth={2} />
                  <span className="text-white font-medium tracking-tight">
                    {selectedFilters.length === 0 ? "All Facilities" : `${selectedFilters.length} Selected`}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Zoom Controls */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30 pointer-events-none">
            <div className="flex flex-col gap-3 pointer-events-auto">
              <button
                onClick={handleZoomIn}
                className="w-12 h-12 bg-black/80 backdrop-blur-xl border border-gray-700/50 rounded-full flex items-center justify-center hover:bg-black/90 transition-all duration-200 shadow-xl"
              >
                <Plus className="w-6 h-6 text-white" strokeWidth={2} />
              </button>
              <button
                onClick={handleZoomOut}
                className="w-12 h-12 bg-black/80 backdrop-blur-xl border border-gray-700/50 rounded-full flex items-center justify-center hover:bg-black/90 transition-all duration-200 shadow-xl"
              >
                <Minus className="w-6 h-6 text-white" strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-28 left-4 right-4 z-30 pointer-events-none">
            <div className="max-w-md mx-auto flex items-center justify-between pointer-events-auto">
              {/* Results Counter */}
              <div className="bg-black/80 backdrop-blur-xl border border-gray-700/50 px-4 py-2 rounded-full shadow-xl">
                <span className="text-sm text-white font-medium tracking-tight">
                  {filteredFacilities.length} locations
                </span>
              </div>

              {/* Recenter Button */}
              <button
                onClick={handleRecenter}
                className="w-12 h-12 bg-black/80 backdrop-blur-xl border border-gray-700/50 rounded-full flex items-center justify-center hover:bg-black/90 transition-all duration-200 shadow-xl"
              >
                <Navigation className="w-5 h-5 text-white" strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Selected Facility Card */}
          {selectedFacility && (
            <div className="absolute bottom-28 left-4 right-4 z-40 animate-slide-up pointer-events-auto">
              <div className="max-w-md mx-auto">
                <div className="bg-[#1a1a1a] border border-gray-800/50 rounded-[24px] overflow-hidden shadow-2xl">
                  <div className="relative h-32">
                    <ImageWithFallback
                      src={selectedFacility.image}
                      alt={selectedFacility.name}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => setSelectedFacility(null)}
                      className="absolute top-3 right-3 w-8 h-8 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                    >
                      <X className="w-4 h-4 text-white" strokeWidth={2} />
                    </button>
                    {selectedFacility.isOpen && (
                      <div className="absolute top-3 left-3 bg-[#c6ff00] text-black text-xs font-semibold px-3 py-1.5 rounded-full">
                        Open Now
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="text-white font-semibold tracking-tight">{selectedFacility.name}</h3>
                        <p className="text-sm text-gray-400 tracking-tight">{selectedFacility.type}</p>
                      </div>
                      <div className="flex items-center gap-1 bg-[#c6ff00]/10 px-2.5 py-1 rounded-full ml-2">
                        <Star className="w-4 h-4 text-[#c6ff00]" strokeWidth={2} fill="currentColor" />
                        <span className="text-sm font-semibold text-[#c6ff00] tracking-tight">
                          {selectedFacility.rating}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <MapPin className="w-3.5 h-3.5 text-[#c6ff00]" strokeWidth={2} />
                        <span className="tracking-tight">{selectedFacility.distance}km away</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Clock className="w-3.5 h-3.5" strokeWidth={2} />
                        <span className="tracking-tight">{selectedFacility.hours.split('-')[0]}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button 
                        onClick={() => setShowGymProfile(true)}
                        className="py-2.5 bg-[#1a1a1a] hover:bg-[#222222] border border-gray-800/30 text-white rounded-[14px] font-semibold tracking-tight transition-all duration-200"
                      >
                        View Details
                      </button>
                      <button className="py-2.5 bg-[#c6ff00] hover:bg-[#d4ff00] text-black rounded-[14px] font-semibold tracking-tight transition-all duration-200">
                        Directions
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* List View */}
      {viewMode === "list" && (
        <div className="absolute inset-0 bg-[#0f0f0f] overflow-y-auto pb-28">
          <div className="max-w-md mx-auto">
            {/* List Header */}
            <div className="sticky top-0 bg-[#0f0f0f] border-b border-gray-800/30 px-5 py-5 z-10">
              <div className="flex items-center gap-4 mb-4">
                <button
                  onClick={onBack}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-800/30 rounded-xl transition-all duration-200 active:scale-95"
                >
                  <ChevronRight className="w-6 h-6 text-white rotate-180" strokeWidth={2} />
                </button>
                <div className="flex-1">
                  <p className="text-gray-500 text-xs font-medium tracking-wide uppercase mb-1">Find Your</p>
                  <h2 className="text-white font-semibold tracking-tight">Coaches</h2>
                </div>
                <button
                  onClick={() => setViewMode("map")}
                  className="w-10 h-10 flex items-center justify-center bg-[#c6ff00] hover:bg-[#d4ff00] rounded-xl transition-all duration-200 active:scale-95"
                >
                  <MapPin className="w-5 h-5 text-black" strokeWidth={2} />
                </button>
              </div>

              {/* Filter Button */}
              <button
                onClick={() => setShowFilterSheet(true)}
                className="w-full flex items-center justify-between bg-[#1a1a1a] border border-gray-800/30 rounded-[18px] px-4 py-3 hover:border-gray-700/50 transition-all duration-200"
              >
                <div className="flex items-center gap-2">
                  <Filter className="w-[18px] h-[18px] text-white" strokeWidth={2} />
                  <span className="text-white font-medium tracking-tight">
                    {selectedFilters.length === 0 ? "All Facilities" : `${selectedFilters.length} Selected`}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" strokeWidth={2} />
              </button>
            </div>

            <div className="px-5 pt-4 space-y-3 pb-5">
              {filteredFacilities.map((facility) => (
                <button
                  key={facility.id}
                  onClick={() => {
                    setSelectedFacility(facility);
                    setShowGymProfile(true);
                    setViewMode("map");
                  }}
                  className="w-full bg-[#1a1a1a] border border-gray-800/30 rounded-[20px] overflow-hidden hover:border-gray-700/50 transition-all duration-200 text-left"
                >
                  <div className="flex gap-4 p-4">
                    <div className="relative w-24 h-24 flex-shrink-0 rounded-[16px] overflow-hidden">
                      <ImageWithFallback
                        src={facility.image}
                        alt={facility.name}
                        className="w-full h-full object-cover"
                      />
                      {facility.isOpen && (
                        <div className="absolute top-2 left-2 bg-[#c6ff00] text-black text-xs font-semibold px-2 py-0.5 rounded-full">
                          Open
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-semibold tracking-tight mb-1">{facility.name}</h3>
                          <p className="text-sm text-gray-400 tracking-tight">{facility.type}</p>
                        </div>
                        <div className="flex items-center gap-1 ml-2">
                          <Star className="w-4 h-4 text-[#c6ff00]" strokeWidth={2} fill="currentColor" />
                          <span className="text-sm font-semibold text-[#c6ff00] tracking-tight">
                            {facility.rating}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" strokeWidth={2} />
                          <span className="tracking-tight">{facility.distance}km</span>
                        </div>
                        <span>•</span>
                        <span className="tracking-tight">{facility.reviews} reviews</span>
                      </div>
                    </div>

                    <ChevronRight className="w-5 h-5 text-gray-600 flex-shrink-0 self-center" strokeWidth={2} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Filter Sheet */}
      {showFilterSheet && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={() => setShowFilterSheet(false)}
          />
          
          <div className="fixed inset-x-0 bottom-0 z-50 bg-[#0f0f0f] rounded-t-[30px] max-h-[85vh] overflow-hidden animate-slide-up">
            <div className="max-w-md mx-auto">
              <div className="sticky top-0 bg-[#0f0f0f] border-b border-gray-800/30 px-5 py-5 flex items-center justify-between">
                <h2 className="text-white font-semibold tracking-tight">Facility Types</h2>
                <button
                  onClick={() => setShowFilterSheet(false)}
                  className="w-9 h-9 flex items-center justify-center hover:bg-gray-800/30 rounded-xl transition-all duration-200"
                >
                  <X className="w-5 h-5 text-white" strokeWidth={2} />
                </button>
              </div>

              <div className="overflow-y-auto max-h-[calc(85vh-140px)] px-5 pb-5">
                <div className="py-5 space-y-2">
                  {facilityCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => toggleFilter(category)}
                      className={`w-full flex items-center justify-between p-4 rounded-[16px] transition-all duration-200 border ${
                        selectedFilters.includes(category)
                          ? "bg-[#c6ff00]/10 border-[#c6ff00]"
                          : "bg-[#1a1a1a] border-gray-800/30 hover:border-gray-700"
                      }`}
                    >
                      <span className={`font-medium tracking-tight ${
                        selectedFilters.includes(category) ? "text-[#c6ff00]" : "text-white"
                      }`}>
                        {category}
                      </span>
                      {selectedFilters.includes(category) && (
                        <Check className="w-5 h-5 text-[#c6ff00]" strokeWidth={2.5} />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="sticky bottom-0 bg-[#0f0f0f] border-t border-gray-800/30 px-5 py-4 flex gap-3">
                <button
                  onClick={() => setSelectedFilters([])}
                  className="flex-1 px-6 py-3.5 bg-[#1a1a1a] hover:bg-[#222222] text-white rounded-[16px] font-medium tracking-tight transition-all duration-200"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setShowFilterSheet(false)}
                  className="flex-1 px-6 py-3.5 bg-[#c6ff00] hover:bg-[#d4ff00] text-black rounded-[16px] font-semibold tracking-tight transition-all duration-200 shadow-lg shadow-[#c6ff00]/25"
                >
                  Show {filteredFacilities.length} Results
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Gym Profile */}
      {showGymProfile && selectedFacility && (
        <GymProfile
          facility={selectedFacility}
          onClose={() => setShowGymProfile(false)}
        />
      )}
    </div>
  );
}

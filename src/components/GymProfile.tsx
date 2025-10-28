import { useState } from "react";
import { X, MapPin, Clock, Star, Phone, ChevronLeft, ChevronRight, MessageCircle, Calendar, Award, Users, Dumbbell, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Coach {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  hourlyRate: number;
  imageUrl: string;
  experience: string;
  certifications: string[];
}

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
  description?: string;
  facilityImages?: string[];
  equipment?: string[];
  coaches?: Coach[];
}

interface GymProfileProps {
  facility: Facility;
  onClose: () => void;
}

export function GymProfile({ facility, onClose }: GymProfileProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState<"about" | "coaches">("about");

  // Default facility images if not provided
  const facilityImages = facility.facilityImages || [
    facility.image,
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800",
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800"
  ];

  // Default equipment if not provided
  const equipment = facility.equipment || [
    "Free Weights",
    "Cardio Machines",
    "Cable Machines",
    "Squat Racks",
    "Benches",
    "Yoga Mats",
    "Boxing Bags",
    "Rowing Machines"
  ];

  // Default coaches if not provided
  const coaches = facility.coaches || [
    {
      id: 1,
      name: "Marcus Johnson",
      specialty: "Strength & Conditioning",
      rating: 4.9,
      reviews: 156,
      hourlyRate: 85,
      imageUrl: "https://images.unsplash.com/photo-1758875568932-0eefd3e60090?w=400",
      experience: "8 years",
      certifications: ["NASM-CPT", "CSCS"]
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      specialty: "Yoga & Flexibility",
      rating: 5.0,
      reviews: 203,
      hourlyRate: 75,
      imageUrl: "https://images.unsplash.com/photo-1754257319805-3c5424262197?w=400",
      experience: "6 years",
      certifications: ["RYT-500", "E-RYT"]
    },
    {
      id: 3,
      name: "David Rodriguez",
      specialty: "Boxing & Kickboxing",
      rating: 4.8,
      reviews: 178,
      hourlyRate: 90,
      imageUrl: "https://images.unsplash.com/photo-1620123082249-6ac67a25804f?w=400",
      experience: "10 years",
      certifications: ["USA Boxing", "ACE"]
    },
    {
      id: 4,
      name: "Emma Williams",
      specialty: "HIIT & Cardio",
      rating: 4.9,
      reviews: 142,
      hourlyRate: 80,
      imageUrl: "https://images.unsplash.com/photo-1758599879693-9e06f55a4ded?w=400",
      experience: "5 years",
      certifications: ["NASM-CPT", "CES"]
    },
    {
      id: 5,
      name: "James Chen",
      specialty: "Weight Training",
      rating: 4.9,
      reviews: 189,
      hourlyRate: 85,
      imageUrl: "https://images.unsplash.com/photo-1745329532588-1394a50671f0?w=400",
      experience: "7 years",
      certifications: ["NSCA-CPT", "PES"]
    },
    {
      id: 6,
      name: "Lisa Thompson",
      specialty: "Tennis & Racquet Sports",
      rating: 5.0,
      reviews: 134,
      hourlyRate: 95,
      imageUrl: "https://images.unsplash.com/photo-1656485146654-a5e7118cf9a6?w=400",
      experience: "12 years",
      certifications: ["PTR", "USPTA"]
    }
  ];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? facilityImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === facilityImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0f0f0f] overflow-y-auto">
      <div className="max-w-md mx-auto pb-6">
        {/* Image Gallery */}
        <div className="relative h-80 bg-[#1a1a1a]">
          <ImageWithFallback
            src={facilityImages[currentImageIndex]}
            alt={facility.name}
            className="w-full h-full object-cover"
          />
          
          {/* Image Navigation */}
          {facilityImages.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-white" strokeWidth={2} />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-white" strokeWidth={2} />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                {facilityImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex
                        ? "w-6 bg-[#c6ff00]"
                        : "w-1.5 bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Top Bar */}
          <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between">
            <button
              onClick={onClose}
              className="w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              <X className="w-5 h-5 text-white" strokeWidth={2} />
            </button>
            
            <div className="flex gap-2">
              {facility.isOpen && (
                <div className="bg-[#c6ff00] text-black text-xs font-semibold px-3 py-1.5 rounded-full">
                  Open Now
                </div>
              )}
              <button className="w-10 h-10 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/80 transition-colors">
                <Heart className="w-5 h-5 text-white" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-5">
          {/* Header Info */}
          <div className="py-5 border-b border-gray-800/30">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h1 className="text-white font-semibold mb-1 tracking-tight">{facility.name}</h1>
                <p className="text-sm text-gray-400 tracking-tight">{facility.type}</p>
              </div>
              <div className="flex items-center gap-1 bg-[#c6ff00]/10 px-3 py-1.5 rounded-full ml-3">
                <Star className="w-4 h-4 text-[#c6ff00]" strokeWidth={2} fill="currentColor" />
                <span className="text-sm font-semibold text-[#c6ff00] tracking-tight">
                  {facility.rating}
                </span>
                <span className="text-xs text-gray-400 ml-1">({facility.reviews})</span>
              </div>
            </div>

            {/* Quick Info */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-[#c6ff00]" strokeWidth={2} />
                <span className="tracking-tight">{facility.address}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Clock className="w-4 h-4 text-gray-400" strokeWidth={2} />
                <span className="tracking-tight">{facility.hours}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-gray-400" strokeWidth={2} />
                <span className="tracking-tight">{facility.phone}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button className="py-3 bg-[#c6ff00] hover:bg-[#d4ff00] text-black rounded-[16px] font-semibold tracking-tight transition-all duration-200 shadow-lg shadow-[#c6ff00]/25">
                Get Directions
              </button>
              <button className="py-3 bg-[#1a1a1a] hover:bg-[#222222] border border-gray-800/30 text-white rounded-[16px] font-semibold tracking-tight transition-all duration-200">
                Call Now
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="sticky top-0 bg-[#0f0f0f] z-10 py-4 border-b border-gray-800/30">
            <div className="flex gap-6">
              <button
                onClick={() => setSelectedTab("about")}
                className={`pb-2 relative transition-all duration-200 ${
                  selectedTab === "about"
                    ? "text-white font-semibold"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                About
                {selectedTab === "about" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c6ff00] rounded-full" />
                )}
              </button>
              <button
                onClick={() => setSelectedTab("coaches")}
                className={`pb-2 relative transition-all duration-200 flex items-center gap-2 ${
                  selectedTab === "coaches"
                    ? "text-white font-semibold"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Coaches
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  selectedTab === "coaches"
                    ? "bg-[#c6ff00] text-black"
                    : "bg-gray-800 text-gray-400"
                }`}>
                  {coaches.length}
                </span>
                {selectedTab === "coaches" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c6ff00] rounded-full" />
                )}
              </button>
            </div>
          </div>

          {/* About Tab */}
          {selectedTab === "about" && (
            <div className="py-5 space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-white font-semibold mb-3 tracking-tight">About</h3>
                <p className="text-sm text-gray-400 leading-relaxed tracking-tight">
                  {facility.description || `${facility.name} is a premier ${facility.type.toLowerCase()} offering world-class facilities and equipment. Our mission is to help you achieve your fitness goals in a supportive and motivating environment. With state-of-the-art equipment and expert trainers, we provide everything you need for your fitness journey.`}
                </p>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-white font-semibold mb-3 tracking-tight">Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {facility.amenities.map((amenity, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-2 bg-[#1a1a1a] border border-gray-800/30 text-gray-300 text-sm rounded-full tracking-tight"
                    >
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment */}
              <div>
                <h3 className="text-white font-semibold mb-3 tracking-tight flex items-center gap-2">
                  <Dumbbell className="w-5 h-5 text-[#c6ff00]" strokeWidth={2} />
                  Equipment
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {equipment.map((item, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2.5 bg-[#1a1a1a] border border-gray-800/30 text-gray-300 text-sm rounded-[12px] tracking-tight"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#1a1a1a] border border-gray-800/30 rounded-[16px] p-4 text-center">
                  <div className="flex items-center justify-center w-10 h-10 bg-[#c6ff00]/10 rounded-full mb-2 mx-auto">
                    <Users className="w-5 h-5 text-[#c6ff00]" strokeWidth={2} />
                  </div>
                  <p className="text-xl font-semibold text-white tracking-tight">{coaches.length}</p>
                  <p className="text-xs text-gray-400 mt-1 tracking-tight">Coaches</p>
                </div>
                <div className="bg-[#1a1a1a] border border-gray-800/30 rounded-[16px] p-4 text-center">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-500/10 rounded-full mb-2 mx-auto">
                    <Award className="w-5 h-5 text-blue-400" strokeWidth={2} />
                  </div>
                  <p className="text-xl font-semibold text-white tracking-tight">{facility.rating}</p>
                  <p className="text-xs text-gray-400 mt-1 tracking-tight">Rating</p>
                </div>
                <div className="bg-[#1a1a1a] border border-gray-800/30 rounded-[16px] p-4 text-center">
                  <div className="flex items-center justify-center w-10 h-10 bg-purple-500/10 rounded-full mb-2 mx-auto">
                    <MapPin className="w-5 h-5 text-purple-400" strokeWidth={2} />
                  </div>
                  <p className="text-xl font-semibold text-white tracking-tight">{facility.distance}</p>
                  <p className="text-xs text-gray-400 mt-1 tracking-tight">km away</p>
                </div>
              </div>
            </div>
          )}

          {/* Coaches Tab */}
          {selectedTab === "coaches" && (
            <div className="py-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold tracking-tight">Available Coaches</h3>
                <p className="text-sm text-gray-400 tracking-tight">{coaches.length} trainers</p>
              </div>
              
              <div className="space-y-3">
                {coaches.map((coach) => (
                  <div
                    key={coach.id}
                    className="bg-[#1a1a1a] border border-gray-800/30 rounded-[20px] p-4 hover:border-gray-700/50 transition-all duration-200"
                  >
                    <div className="flex gap-4">
                      {/* Coach Image */}
                      <div className="relative flex-shrink-0">
                        <ImageWithFallback
                          src={coach.imageUrl}
                          alt={coach.name}
                          className="w-20 h-20 rounded-[16px] object-cover"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-[#c6ff00] text-black text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                          <Star className="w-3 h-3" strokeWidth={2.5} fill="currentColor" />
                          {coach.rating}
                        </div>
                      </div>

                      {/* Coach Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-semibold tracking-tight mb-1">{coach.name}</h4>
                        <p className="text-sm text-gray-400 tracking-tight mb-2">{coach.specialty}</p>
                        
                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                          <span className="tracking-tight">{coach.experience} exp</span>
                          <span>•</span>
                          <span className="tracking-tight">{coach.reviews} reviews</span>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {coach.certifications.map((cert, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 bg-gray-800/50 text-gray-400 text-xs rounded tracking-tight"
                            >
                              {cert}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Price & Actions */}
                      <div className="flex flex-col items-end justify-between">
                        <div className="text-right">
                          <p className="text-white font-semibold tracking-tight">${coach.hourlyRate}</p>
                          <p className="text-xs text-gray-500 tracking-tight">per hour</p>
                        </div>
                        
                        <div className="flex gap-2">
                          <button className="w-9 h-9 bg-gray-800/50 hover:bg-gray-800 rounded-full flex items-center justify-center transition-all duration-200">
                            <MessageCircle className="w-4 h-4 text-gray-300" strokeWidth={2} />
                          </button>
                          <button className="w-9 h-9 bg-[#c6ff00] hover:bg-[#d4ff00] rounded-full flex items-center justify-center transition-all duration-200">
                            <Calendar className="w-4 h-4 text-black" strokeWidth={2} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

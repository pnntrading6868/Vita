import { useState } from "react";
import { ArrowLeft, MapPin, Star, Award, Calendar, Shield, Play, ChevronRight, X } from "lucide-react";

interface CoachDetailProfileProps {
  coachId: string;
  onBack: () => void;
  onBookPackage?: (packageId: string) => void;
}

interface Review {
  id: string;
  clientName: string;
  clientImage: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

interface ClientResult {
  id: string;
  clientName: string;
  type: "image" | "video" | "testimonial";
  thumbnail?: string;
  content: string;
  achievement: string;
  duration: string;
}

interface Coach {
  id: string;
  name: string;
  profileImage: string;
  coverImage: string;
  gallery: string[];
  sport: string;
  specialties: string[];
  bio: string;
  experience: string;
  certifications: string[];
  location: string;
  radius: string;
  rating: number;
  totalReviews: number;
  sessionsCompleted: number;
  yearsExperience: number;
  reviews: Review[];
  clientResults: ClientResult[];
  packages: {
    id: string;
    name: string;
    sessions: number;
    duration: string;
    price: number;
  }[];
}

const coachesData: Record<string, Coach> = {
  "marcus-johnson": {
    id: "marcus-johnson",
    name: "Marcus Johnson",
    profileImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1758875569220-6934933d443c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1758875568932-0eefd3e60090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1669807164466-10a6584a067e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1758875569414-120ebc62ada3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop"
    ],
    sport: "Strength Training",
    specialties: ["Powerlifting", "Olympic Lifting", "Hypertrophy", "Functional Strength"],
    bio: "I'm Marcus Johnson, a certified strength and conditioning coach with over 12 years of experience transforming lives through intelligent programming and personalized coaching. My approach combines scientific principles with real-world application to help clients achieve sustainable results. Whether you're looking to build muscle, increase strength, or completely transform your physique, I'll guide you every step of the way with proven methods and unwavering support.",
    experience: "12+ years of professional coaching experience with 500+ successful client transformations. Former collegiate athlete and competitive powerlifter. Specialized in body recomposition, strength development, and athletic performance enhancement.",
    certifications: [
      "NSCA-CSCS (Certified Strength & Conditioning Specialist)",
      "NASM-CPT (Certified Personal Trainer)",
      "USA Weightlifting Level 2 Coach",
      "Precision Nutrition Level 1",
      "FMS (Functional Movement Screen) Certified"
    ],
    location: "Downtown Dubai",
    radius: "15 km service area",
    rating: 4.9,
    totalReviews: 187,
    sessionsCompleted: 2340,
    yearsExperience: 12,
    reviews: [
      {
        id: "1",
        clientName: "Sarah Mitchell",
        clientImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        rating: 5,
        date: "2 weeks ago",
        comment: "Marcus transformed my life! Lost 20kg in 6 months and gained so much confidence. His attention to form and progressive programming is unmatched. Best investment I've made in myself.",
        verified: true
      },
      {
        id: "2",
        clientName: "David Chen",
        clientImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        rating: 5,
        date: "1 month ago",
        comment: "Increased my deadlift from 100kg to 180kg in 8 months. Marcus knows how to push you while keeping you safe. His knowledge of biomechanics is incredible.",
        verified: true
      },
      {
        id: "3",
        clientName: "Aisha Al-Hashimi",
        clientImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
        rating: 5,
        date: "1 month ago",
        comment: "As a complete beginner, I was intimidated by the gym. Marcus made everything approachable and fun. Now I can't imagine my life without strength training!",
        verified: true
      },
      {
        id: "4",
        clientName: "James Rodriguez",
        clientImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
        rating: 5,
        date: "2 months ago",
        comment: "Professional, knowledgeable, and genuinely cares about results. Marcus customized my program around my shoulder injury and I'm now stronger than ever.",
        verified: true
      }
    ],
    clientResults: [
      {
        id: "1",
        clientName: "John Davis",
        type: "image",
        thumbnail: "https://images.unsplash.com/photo-1669504243706-1df1f8d5dacd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
        content: "Lost 25kg and gained visible abs",
        achievement: "Body Fat: 28% → 12%",
        duration: "5 months"
      },
      {
        id: "2",
        clientName: "Emma Wilson",
        type: "testimonial",
        content: "Marcus helped me go from never touching a barbell to deadlifting 120kg. His patience and expertise made all the difference. I feel stronger and more confident than ever!",
        achievement: "Strength gain: +85kg deadlift",
        duration: "8 months"
      },
      {
        id: "3",
        clientName: "Ahmed Al-Mansoori",
        type: "image",
        thumbnail: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop",
        content: "Muscle gain and complete body transformation",
        achievement: "Added 12kg lean muscle",
        duration: "10 months"
      },
      {
        id: "4",
        clientName: "Lisa Thompson",
        type: "video",
        thumbnail: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop",
        content: "From beginner to competitive powerlifter",
        achievement: "Competition ready in 1 year",
        duration: "12 months"
      }
    ],
    packages: [
      { id: "1", name: "Starter Pack", sessions: 12, duration: "1 Month", price: 2400 },
      { id: "2", name: "Transformation", sessions: 36, duration: "3 Months", price: 6480 },
      { id: "3", name: "Elite Performance", sessions: 72, duration: "6 Months", price: 11880 }
    ]
  },
  "ahmed-al-rashid": {
    id: "ahmed-al-rashid",
    name: "Ahmed Al-Rashid",
    profileImage: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1761258772330-7de60cf3f07f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1669806954505-936e77929af6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=800&h=600&fit=crop"
    ],
    sport: "Running & HIIT",
    specialties: ["Marathon Training", "HIIT", "Fat Loss", "Endurance Building"],
    bio: "As a former marathon champion and certified running coach, I specialize in helping runners of all levels achieve their goals. From complete beginners to competitive athletes, I create personalized training plans that build endurance safely and effectively. My HIIT programs are designed for maximum fat loss and cardiovascular improvement.",
    experience: "10+ years coaching runners, 15 marathon completions including 3 sub-3 hour finishes. Expert in periodization, injury prevention, and race strategy.",
    certifications: [
      "RRCA Certified Running Coach",
      "NASM-CPT (Certified Personal Trainer)",
      "ACE Fitness Nutrition Specialist",
      "USA Track & Field Level 1 Coach",
      "CPR & First Aid Certified"
    ],
    location: "Dubai Marina",
    radius: "20 km service area",
    rating: 4.8,
    totalReviews: 142,
    sessionsCompleted: 1890,
    yearsExperience: 10,
    reviews: [
      {
        id: "1",
        clientName: "Michael Roberts",
        clientImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
        rating: 5,
        date: "1 week ago",
        comment: "Completed my first marathon thanks to Ahmed's structured training plan. He knew exactly how to build my endurance without injury. Absolutely recommend!",
        verified: true
      },
      {
        id: "2",
        clientName: "Fatima Hassan",
        clientImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
        rating: 5,
        date: "3 weeks ago",
        comment: "Lost 15kg with Ahmed's HIIT programs. The workouts are challenging but effective. He's incredibly motivating and knowledgeable.",
        verified: true
      }
    ],
    clientResults: [
      {
        id: "1",
        clientName: "Tom Anderson",
        type: "testimonial",
        content: "Went from couch to marathon in 6 months. Ahmed's coaching made it possible. His attention to pacing and recovery was crucial to my success.",
        achievement: "Completed first marathon: 4:15:00",
        duration: "6 months"
      },
      {
        id: "2",
        clientName: "Sara Al-Zaabi",
        type: "image",
        thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
        content: "Fat loss transformation through HIIT",
        achievement: "Lost 18kg, improved VO2 max by 30%",
        duration: "4 months"
      }
    ],
    packages: [
      { id: "1", name: "5K Ready", sessions: 16, duration: "6 Weeks", price: 1920 },
      { id: "2", name: "Half Marathon", sessions: 24, duration: "12 Weeks", price: 4320 },
      { id: "3", name: "Marathon Master", sessions: 36, duration: "16 Weeks", price: 6120 }
    ]
  },
  "elena-rodriguez": {
    id: "elena-rodriguez",
    name: "Elena Rodriguez",
    profileImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1758274535024-be3faa30f507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1722605329575-08c950b01bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&h=600&fit=crop"
    ],
    sport: "Yoga & Mobility",
    specialties: ["Vinyasa Yoga", "Mobility Training", "Recovery", "Mindfulness"],
    bio: "Certified yoga instructor and mobility specialist with a holistic approach to wellness. I help athletes and fitness enthusiasts optimize recovery, prevent injuries, and achieve mind-body balance. My classes blend traditional yoga with modern mobility work for maximum benefit.",
    experience: "8+ years teaching yoga and mobility. Trained over 1000 students. Specialized in athletic recovery and injury prevention through movement.",
    certifications: [
      "RYT-500 (Registered Yoga Teacher)",
      "FRC Mobility Specialist",
      "Precision Nutrition Level 1",
      "Mindfulness-Based Stress Reduction (MBSR)",
      "Thai Massage Therapist"
    ],
    location: "Jumeirah",
    radius: "12 km service area",
    rating: 5.0,
    totalReviews: 203,
    sessionsCompleted: 2150,
    yearsExperience: 8,
    reviews: [
      {
        id: "1",
        clientName: "Rachel Green",
        clientImage: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
        rating: 5,
        date: "4 days ago",
        comment: "Elena's yoga classes are transformative. My flexibility improved dramatically and my chronic back pain is gone. She's a true healer.",
        verified: true
      },
      {
        id: "2",
        clientName: "Omar Khalil",
        clientImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
        rating: 5,
        date: "2 weeks ago",
        comment: "As a CrossFit athlete, Elena's mobility work has been game-changing for my recovery and performance. Highly recommend!",
        verified: true
      }
    ],
    clientResults: [
      {
        id: "1",
        clientName: "Jennifer Martinez",
        type: "testimonial",
        content: "Eliminated my chronic shoulder pain through Elena's targeted mobility work. I can now train pain-free and my posture has completely transformed.",
        achievement: "Pain-free movement restored",
        duration: "3 months"
      },
      {
        id: "2",
        clientName: "Alex Kim",
        type: "image",
        thumbnail: "https://images.unsplash.com/photo-1593810450967-f9c42742e326?w=600&h=400&fit=crop",
        content: "Flexibility transformation",
        achievement: "Improved ROM by 40%",
        duration: "5 months"
      }
    ],
    packages: [
      { id: "1", name: "Flexibility Fundamentals", sessions: 12, duration: "4 Weeks", price: 1680 },
      { id: "2", name: "Recovery & Wellness", sessions: 24, duration: "8 Weeks", price: 3120 },
      { id: "3", name: "Mobility Mastery", sessions: 48, duration: "12 Weeks", price: 5760 }
    ]
  },
  "carlos-rivera": {
    id: "carlos-rivera",
    name: "Carlos Rivera",
    profileImage: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1666423489426-0c4db69512fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
    ],
    sport: "Pickleball",
    specialties: ["Pickleball Strategy", "Court Movement", "Doubles Play", "Tournament Prep"],
    bio: "Professional pickleball coach and tournament player. I teach players of all levels how to dominate the court with smart strategy, quick reflexes, and proper technique. My coaching style focuses on making learning fun while building competitive skills.",
    experience: "6+ years coaching pickleball. Regional tournament champion. Specialized in taking beginners to competitive players quickly.",
    certifications: [
      "PPR Certified Professional",
      "IPTPA Level 2 Coach",
      "USAPA Ambassador",
      "Sports Performance Coach",
      "First Aid & CPR Certified"
    ],
    location: "Business Bay",
    radius: "18 km service area",
    rating: 4.9,
    totalReviews: 98,
    sessionsCompleted: 1240,
    yearsExperience: 6,
    reviews: [
      {
        id: "1",
        clientName: "Linda Foster",
        clientImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
        rating: 5,
        date: "1 week ago",
        comment: "Carlos made pickleball so much fun! His teaching method is clear and effective. I went from beginner to winning local tournaments in 3 months!",
        verified: true
      },
      {
        id: "2",
        clientName: "Robert Chang",
        clientImage: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop",
        rating: 5,
        date: "2 weeks ago",
        comment: "Best pickleball coach in Dubai! Carlos knows the game inside out and his strategies work. My dinking game improved tremendously.",
        verified: true
      }
    ],
    clientResults: [
      {
        id: "1",
        clientName: "Maria Santos",
        type: "testimonial",
        content: "Started as a complete beginner and Carlos got me tournament-ready in 2 months. His focus on fundamentals and strategy is outstanding.",
        achievement: "Won first tournament",
        duration: "2 months"
      }
    ],
    packages: [
      { id: "1", name: "Beginner Basics", sessions: 8, duration: "4 Weeks", price: 1280 },
      { id: "2", name: "Competitive Edge", sessions: 20, duration: "8 Weeks", price: 2800 },
      { id: "3", name: "Tournament Ready", sessions: 32, duration: "12 Weeks", price: 4160 }
    ]
  },
  "jackson-hayes": {
    id: "jackson-hayes",
    name: "Jackson Hayes",
    profileImage: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1590070714379-e894212d7838?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    gallery: [
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549476464-37392f717541?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&h=600&fit=crop"
    ],
    sport: "Boxing",
    specialties: ["Boxing Technique", "Fight Training", "Conditioning", "Self-Defense"],
    bio: "Former professional boxer with 15 years in the ring. I teach the sweet science of boxing - combining technical precision with explosive power. Whether you want to compete or just get in fighting shape, I'll teach you proper technique and mindset.",
    experience: "15+ years boxing experience including 8 years professional. Trained amateur champions and fitness enthusiasts. Expert in pad work and sparring.",
    certifications: [
      "USA Boxing Coach Certification",
      "Level 3 Boxing Coach",
      "NASM Performance Enhancement Specialist",
      "Krav Maga Instructor",
      "CPR & First Aid"
    ],
    location: "DIFC",
    radius: "15 km service area",
    rating: 4.9,
    totalReviews: 156,
    sessionsCompleted: 1650,
    yearsExperience: 15,
    reviews: [
      {
        id: "1",
        clientName: "Marcus Williams",
        clientImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop",
        rating: 5,
        date: "5 days ago",
        comment: "Jackson is the real deal. His boxing fundamentals are solid and he pushes you to be your best. Lost 12kg and gained serious skills.",
        verified: true
      }
    ],
    clientResults: [
      {
        id: "1",
        clientName: "Tyler Brooks",
        type: "video",
        thumbnail: "https://images.unsplash.com/photo-1549476464-37392f717541?w=600&h=400&fit=crop",
        content: "Amateur boxing debut",
        achievement: "Won first amateur fight",
        duration: "6 months"
      }
    ],
    packages: [
      { id: "1", name: "Boxing Basics", sessions: 12, duration: "4 Weeks", price: 2160 },
      { id: "2", name: "Fighter Development", sessions: 36, duration: "12 Weeks", price: 5760 },
      { id: "3", name: "Pro Training", sessions: 60, duration: "20 Weeks", price: 8400 }
    ]
  }
};

export function CoachDetailProfile({ coachId, onBack, onBookPackage }: CoachDetailProfileProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"about" | "reviews" | "results">("about");
  
  const coach = coachesData[coachId];

  if (!coach) {
    return (
      <div className="h-full bg-[#0f0f0f] text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-white/60">Coach not found</p>
          <button onClick={onBack} className="mt-4 text-[#c6ff00]">Go Back</button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-[#0f0f0f] text-white overflow-y-auto">
      <div className="max-w-md mx-auto pb-20">
        {/* Cover Image & Header */}
        <div className="relative h-80">
          <img
            src={coach.coverImage}
            alt={coach.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-black/50 to-transparent" />
          
          {/* Back Button */}
          <button
            onClick={onBack}
            className="absolute top-5 left-5 w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>

          {/* Profile Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="flex items-end gap-4">
              <img
                src={coach.profileImage}
                alt={coach.name}
                className="w-24 h-24 rounded-2xl object-cover border-4 border-[#0f0f0f] shadow-xl"
              />
              <div className="flex-1 pb-2">
                <h1 className="text-white mb-1">{coach.name}</h1>
                <p className="text-[#c6ff00] mb-2">{coach.sport}</p>
                <div className="flex items-center gap-4 text-sm text-white/60">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-[#c6ff00] fill-[#c6ff00]" />
                    <span>{coach.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{coach.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="px-5 py-5 grid grid-cols-3 gap-3">
          <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
            <div className="text-[#c6ff00] mb-1">{coach.yearsExperience}+</div>
            <div className="text-white/60 text-sm">Years</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
            <div className="text-[#c6ff00] mb-1">{coach.sessionsCompleted}</div>
            <div className="text-white/60 text-sm">Sessions</div>
          </div>
          <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
            <div className="text-[#c6ff00] mb-1">{coach.totalReviews}</div>
            <div className="text-white/60 text-sm">Reviews</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-5 mb-5">
          <div className="flex gap-2 p-1 bg-white/5 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveTab("about")}
              className={`flex-1 py-3 rounded-lg transition-all duration-300 ${
                activeTab === "about"
                  ? "bg-[#c6ff00] text-black"
                  : "text-white/60 hover:text-white/90"
              }`}
            >
              About
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`flex-1 py-3 rounded-lg transition-all duration-300 ${
                activeTab === "reviews"
                  ? "bg-[#c6ff00] text-black"
                  : "text-white/60 hover:text-white/90"
              }`}
            >
              Reviews
            </button>
            <button
              onClick={() => setActiveTab("results")}
              className={`flex-1 py-3 rounded-lg transition-all duration-300 ${
                activeTab === "results"
                  ? "bg-[#c6ff00] text-black"
                  : "text-white/60 hover:text-white/90"
              }`}
            >
              Results
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-5 space-y-5">
          {activeTab === "about" && (
            <>
              {/* Bio */}
              <div className="space-y-3">
                <h3 className="text-white/90">About Me</h3>
                <p className="text-white/60 text-sm leading-relaxed">{coach.bio}</p>
              </div>

              {/* Specialties */}
              <div className="space-y-3">
                <h3 className="text-white/90">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {coach.specialties.map((specialty, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 bg-[#c6ff00]/10 rounded-lg border border-[#c6ff00]/30 text-[#c6ff00] text-sm"
                    >
                      {specialty}
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-3">
                <h3 className="text-white/90 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#c6ff00]" />
                  Experience
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{coach.experience}</p>
              </div>

              {/* Certifications */}
              <div className="space-y-3">
                <h3 className="text-white/90 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#c6ff00]" />
                  Certifications
                </h3>
                <div className="space-y-2">
                  {coach.certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-sm text-white/60"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c6ff00] mt-2 flex-shrink-0" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="space-y-3">
                <h3 className="text-white/90 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#c6ff00]" />
                  Service Area
                </h3>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-white/90 mb-1">{coach.location}</div>
                  <div className="text-white/60 text-sm">{coach.radius}</div>
                </div>
              </div>

              {/* Gallery */}
              <div className="space-y-3">
                <h3 className="text-white/90">Training Gallery</h3>
                <div className="grid grid-cols-2 gap-3">
                  {coach.gallery.map((image, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(image)}
                      className="relative aspect-[4/3] rounded-xl overflow-hidden group"
                    >
                      <img
                        src={image}
                        alt={`Gallery ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-4">
              {coach.reviews.map((review) => (
                <div
                  key={review.id}
                  className="p-4 bg-white/5 rounded-xl border border-white/10"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <img
                      src={review.clientImage}
                      alt={review.clientName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="text-white/90">{review.clientName}</div>
                        {review.verified && (
                          <Shield className="w-4 h-4 text-[#c6ff00]" />
                        )}
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? "text-[#c6ff00] fill-[#c6ff00]"
                                  : "text-white/20"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-white/40 text-sm">{review.date}</span>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {review.comment}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "results" && (
            <div className="space-y-4">
              {coach.clientResults.map((result) => (
                <div
                  key={result.id}
                  className="bg-white/5 rounded-xl border border-white/10 overflow-hidden"
                >
                  {result.type !== "testimonial" && result.thumbnail && (
                    <div className="relative aspect-video">
                      <img
                        src={result.thumbnail}
                        alt={result.clientName}
                        className="w-full h-full object-cover"
                      />
                      {result.type === "video" && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <div className="w-16 h-16 rounded-full bg-[#c6ff00]/90 flex items-center justify-center">
                            <Play className="w-8 h-8 text-black ml-1" />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="p-4">
                    <div className="text-white/90 mb-2">{result.clientName}</div>
                    <p className="text-white/60 text-sm mb-3">{result.content}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="text-[#c6ff00]">{result.achievement}</div>
                      <div className="text-white/40">{result.duration}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Packages */}
          <div className="space-y-3 pt-5 border-t border-white/10">
            <h3 className="text-white/90">Available Packages</h3>
            <div className="space-y-3">
              {coach.packages.map((pkg) => (
                <button
                  key={pkg.id}
                  onClick={() => onBookPackage?.(pkg.id)}
                  className="w-full p-4 bg-white/5 hover:bg-white/[0.07] rounded-xl border border-white/10 hover:border-[#c6ff00]/30 transition-all duration-300 text-left group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-white/90">{pkg.name}</div>
                    <ChevronRight className="w-5 h-5 text-[#c6ff00] group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{pkg.sessions} sessions</span>
                    </div>
                    <span>•</span>
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="text-[#c6ff00]">AED {pkg.price.toLocaleString()}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-5"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-full object-contain rounded-2xl"
          />
        </div>
      )}
    </div>
  );
}

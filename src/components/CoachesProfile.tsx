import { useState, useEffect, useRef } from "react";
import { Bell, Search, MapPin, SlidersHorizontal, Award, Star, ChevronDown, Users } from "lucide-react";
import { CoachCard } from "./CoachCard";
import { FilterSheet, FilterState } from "./FilterSheet";

const allCoaches = [
  {
    id: 1,
    name: "Sarah Mitchell",
    specialty: "Tennis Coach",
    experience: 5,
    certifications: ["USPTA Certified", "Sports Psychology"],
    rating: 4.9,
    reviewCount: 127,
    clientCount: 45,
    hourlyRate: 85,
    location: "Dubai Marina, Dubai",
    distance: "3.7 km",
    bio: "Former professional tennis player with a passion for developing champions",
    image: "https://images.unsplash.com/photo-1660463531472-a86bb8f9f48e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBjb2FjaCUyMHRlYWNoaW5nJTIwY291cnR8ZW58MXx8fHwxNzYxMzIxNzA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Michael Chen", rating: 5, comment: "Sarah transformed my game completely. Her technical expertise and motivation are unmatched!", date: "2 weeks ago" },
      { id: 2, clientName: "Emma Davis", rating: 5, comment: "Best coach I've ever had. Patience and skill make all the difference.", date: "1 month ago" },
      { id: 3, clientName: "James Wilson", rating: 4, comment: "Great sessions, really helped improve my serve technique.", date: "1 month ago" }
    ]
  },
  {
    id: 2,
    name: "Marcus Johnson",
    specialty: "Strength & Conditioning",
    experience: 8,
    certifications: ["NASM-CPT", "CSCS", "Nutrition Specialist"],
    rating: 4.8,
    reviewCount: 243,
    clientCount: 92,
    hourlyRate: 95,
    location: "Jumeirah, Dubai",
    distance: "6.6 km",
    bio: "Transforming bodies and minds through science-based training programs",
    image: "https://images.unsplash.com/photo-1750698545009-679820502908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZyUyMGNsaWVudCUyMGd5bXxlbnwxfHx8fDE3NjEzMjE3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Lisa Anderson", rating: 5, comment: "Marcus helped me achieve goals I didn't think were possible. Down 30lbs and stronger than ever!", date: "1 week ago" },
      { id: 2, clientName: "David Park", rating: 5, comment: "The nutrition guidance combined with workouts is game-changing.", date: "3 weeks ago" },
      { id: 3, clientName: "Rachel Green", rating: 5, comment: "Professional, knowledgeable, and always motivating!", date: "1 month ago" }
    ]
  },
  {
    id: 3,
    name: "Jackson 'The Thunder' Hayes",
    specialty: "Boxing Coach",
    experience: 12,
    certifications: ["USA Boxing Coach", "Golden Gloves Champion", "CPR Certified"],
    rating: 5.0,
    reviewCount: 312,
    clientCount: 145,
    hourlyRate: 110,
    location: "Downtown Dubai",
    distance: "2.9 km",
    bio: "Former Golden Gloves champion teaching the sweet science of boxing",
    image: "https://images.unsplash.com/photo-1636581563815-9c40c35abe0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjBjb2FjaCUyMHRyYWluaW5nJTIwcmluZ3xlbnwxfHx8fDE3NjEzMjE3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Derek Thompson", rating: 5, comment: "Jackson's boxing fundamentals are world-class. My footwork and combinations have improved tremendously!", date: "3 days ago" },
      { id: 2, clientName: "Amanda Lee", rating: 5, comment: "Best boxing coach in LA! The training is intense but incredibly rewarding.", date: "1 week ago" },
      { id: 3, clientName: "Ryan Martinez", rating: 5, comment: "Learning from a champion is a dream come true. Highly recommend!", date: "2 weeks ago" }
    ]
  },
  {
    id: 4,
    name: "Diego Santos",
    specialty: "Muay Thai",
    experience: 9,
    certifications: ["Muay Thai Master", "Combat Sports Specialist", "NASM-CPT"],
    rating: 4.9,
    reviewCount: 167,
    clientCount: 81,
    hourlyRate: 88,
    location: "Business Bay, Dubai",
    distance: "5.1 km",
    bio: "Traditional Muay Thai techniques combined with modern fitness training",
    image: "https://images.unsplash.com/photo-1738835934988-ed0d238e8299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGluc3RydWN0b3IlMjB0ZWFjaGluZ3xlbnwxfHx8fDE3NjEzMjE3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Bella Harris", rating: 5, comment: "Diego's technique is incredible. Learning authentic Muay Thai from a true master!", date: "3 days ago" },
      { id: 2, clientName: "Noah Kim", rating: 5, comment: "Challenging but rewarding. My fitness has improved dramatically.", date: "1 week ago" },
      { id: 3, clientName: "Grace Lee", rating: 5, comment: "Best decision I made was training with Diego. Highly recommend!", date: "2 weeks ago" }
    ]
  },
  {
    id: 5,
    name: "Kai Martinez",
    specialty: "MMA Fighter & Coach",
    experience: 10,
    certifications: ["BJJ Black Belt", "MMA Coach Certification", "Kickboxing Instructor"],
    rating: 4.8,
    reviewCount: 201,
    clientCount: 73,
    hourlyRate: 105,
    location: "JBR, Dubai",
    distance: "7.6 km",
    bio: "Professional MMA fighter teaching real combat skills and conditioning",
    image: "https://images.unsplash.com/photo-1617627590804-1de3424fbf04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtbWElMjBjb2FjaCUyMHRyYWluaW5nJTIwZmlnaHRlcnxlbnwxfHx8fDE3NjEzMjE3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Chris Wong", rating: 5, comment: "Training with a real fighter is eye-opening. Kai is the real deal!", date: "1 week ago" },
      { id: 2, clientName: "Emma Wilson", rating: 5, comment: "Incredible technique and amazing teaching style. Love these sessions!", date: "2 weeks ago" },
      { id: 3, clientName: "Jake Smith", rating: 4, comment: "Tough workouts but seeing great results. Highly recommend!", date: "1 month ago" }
    ]
  },
  {
    id: 6,
    name: "Alex Rivera",
    specialty: "Fitness & Personal Training",
    experience: 6,
    certifications: ["ACE-CPT", "Precision Nutrition Coach", "TRX Certified"],
    rating: 4.7,
    reviewCount: 134,
    clientCount: 67,
    hourlyRate: 80,
    location: "Al Barsha, Dubai",
    distance: "5.6 km",
    bio: "Personalized fitness programs designed to help you reach your peak performance",
    image: "https://images.unsplash.com/photo-1761258772170-7ba1715feb1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwY29hY2glMjB0cmFpbmluZyUyMHNlc3Npb258ZW58MXx8fHwxNzYxMzIxNzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Jennifer Lopez", rating: 5, comment: "Alex tailored my program perfectly to my goals. Already seeing amazing results!", date: "5 days ago" },
      { id: 2, clientName: "Brad Cooper", rating: 5, comment: "Knowledgeable, motivating, and results-driven. Couldn't ask for more!", date: "2 weeks ago" },
      { id: 3, clientName: "Melissa Zhang", rating: 4, comment: "Great sessions and always punctual. Highly recommend!", date: "3 weeks ago" }
    ]
  },
  {
    id: 7,
    name: "Riley Cooper",
    specialty: "Pickleball Pro",
    experience: 3,
    certifications: ["PPR Certified", "USAPA Ambassador"],
    rating: 4.6,
    reviewCount: 84,
    clientCount: 39,
    hourlyRate: 65,
    location: "Dubai Sports City",
    distance: "13 km",
    bio: "Making pickleball fun and competitive for players of all skill levels",
    image: "https://images.unsplash.com/photo-1761039808597-5639866bab8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjb2FjaCUyMG91dGRvb3IlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjEzMjE3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Tom Anderson", rating: 5, comment: "Riley made learning pickleball so enjoyable. Great coach!", date: "5 days ago" },
      { id: 2, clientName: "Sarah Kim", rating: 4, comment: "Fun sessions with great technique tips. Improving every week!", date: "2 weeks ago" },
      { id: 3, clientName: "Mike Davis", rating: 5, comment: "Patient and knowledgeable. Perfect for beginners!", date: "3 weeks ago" }
    ]
  },
  {
    id: 8,
    name: "Victoria Chen",
    specialty: "Gym & Strength Training",
    experience: 7,
    certifications: ["NSCA-CSCS", "FMS Certified", "Olympic Lifting Coach"],
    rating: 4.9,
    reviewCount: 198,
    clientCount: 89,
    hourlyRate: 92,
    location: "DIFC, Dubai",
    distance: "3.4 km",
    bio: "Building strength, power, and confidence through progressive resistance training",
    image: "https://images.unsplash.com/photo-1758875568932-0eefd3e60090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlbmd0aCUyMGNvYWNoJTIwd2VpZ2h0bGlmdGluZyUyMGd5bXxlbnwxfHx8fDE3NjEzMjE3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Kevin Wright", rating: 5, comment: "Victoria's strength program has been a game-changer. My lifts have skyrocketed!", date: "1 week ago" },
      { id: 2, clientName: "Ashley Moore", rating: 5, comment: "She really knows her stuff. Safe, effective, and results-oriented.", date: "2 weeks ago" },
      { id: 3, clientName: "Brandon Lee", rating: 5, comment: "Best gym coach I've ever worked with. Highly recommend!", date: "1 month ago" }
    ]
  },
  {
    id: 9,
    name: "Tyson Blake",
    specialty: "Boxing & Conditioning",
    experience: 11,
    certifications: ["WBC Boxing Coach", "Strength & Conditioning Specialist"],
    rating: 4.8,
    reviewCount: 276,
    clientCount: 112,
    hourlyRate: 98,
    location: "Downtown Dubai",
    distance: "8.9 km",
    bio: "Elite boxing training combined with high-performance conditioning programs",
    image: "https://images.unsplash.com/photo-1748484531687-5faebc4a1965?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjB0cmFpbmVyJTIwcHVuY2hpbmclMjBiYWd8ZW58MXx8fHwxNzYxMjA2NzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Jordan Phillips", rating: 5, comment: "Tyson's conditioning drills are brutal but incredibly effective!", date: "4 days ago" },
      { id: 2, clientName: "Samantha Brooks", rating: 5, comment: "Learning proper boxing technique while getting in the best shape of my life.", date: "1 week ago" },
      { id: 3, clientName: "Marcus Taylor", rating: 4, comment: "Tough trainer but worth every penny. Results speak for themselves.", date: "2 weeks ago" }
    ]
  },
  {
    id: 10,
    name: "Elena Rodriguez",
    specialty: "Fitness & Wellness",
    experience: 5,
    certifications: ["ACSM-CPT", "Yoga Alliance RYT-200", "Wellness Coach"],
    rating: 4.7,
    reviewCount: 142,
    clientCount: 71,
    hourlyRate: 75,
    location: "Kite Beach, Dubai",
    distance: "6.8 km",
    bio: "Holistic approach to fitness combining strength, flexibility, and mindfulness",
    image: "https://images.unsplash.com/photo-1652347141247-5788de175766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwdGVhY2hlciUyMGNsYXNzJTIwc3R1ZGlvfGVufDF8fHx8MTc2MTMyMTcxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Sophie Martinez", rating: 5, comment: "Elena's holistic approach has transformed both my body and mind!", date: "5 days ago" },
      { id: 2, clientName: "Oliver Brown", rating: 5, comment: "Perfect balance of challenge and mindfulness. Love her classes!", date: "2 weeks ago" },
      { id: 3, clientName: "Nina Patel", rating: 4, comment: "Great sessions that leave me feeling energized and centered.", date: "3 weeks ago" }
    ]
  },
  {
    id: 11,
    name: "Cameron 'The Hammer' Stone",
    specialty: "MMA & Brazilian Jiu-Jitsu",
    experience: 13,
    certifications: ["BJJ Black Belt 3rd Degree", "MMA Coach", "Muay Thai Instructor"],
    rating: 5.0,
    reviewCount: 389,
    clientCount: 156,
    hourlyRate: 115,
    location: "Dubai Marina, Dubai",
    distance: "6.3 km",
    bio: "Professional cage fighter with championship experience teaching complete MMA skillsets",
    image: "https://images.unsplash.com/photo-1617627590804-1de3424fbf04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtbWElMjBmaWdodGVyJTIwY29hY2glMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjEyMDY3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Daniel Cruz", rating: 5, comment: "Cameron is a legend! His BJJ technique is flawless and he's an amazing teacher.", date: "2 days ago" },
      { id: 2, clientName: "Alexis Murphy", rating: 5, comment: "Training with a champion has been the best investment in myself.", date: "1 week ago" },
      { id: 3, clientName: "Tyler Anderson", rating: 5, comment: "World-class instruction. Every session is packed with valuable techniques.", date: "2 weeks ago" }
    ]
  },
  {
    id: 12,
    name: "Jasmine Williams",
    specialty: "Tennis & Athletic Performance",
    experience: 8,
    certifications: ["PTR Professional", "USTA High Performance", "Sports Science Degree"],
    rating: 4.9,
    reviewCount: 215,
    clientCount: 98,
    hourlyRate: 90,
    location: "Palm Jumeirah, Dubai",
    distance: "10.1 km",
    bio: "Elite tennis coaching with focus on competitive performance and mental toughness",
    image: "https://images.unsplash.com/photo-1660463527860-b66aebd362c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBjb2FjaCUyMHByb2Zlc3Npb25hbCUyMGNvdXJ0fGVufDF8fHx8MTc2MTIwNjc3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Emily Thompson", rating: 5, comment: "Jasmine helped me win my first tournament! Her strategic approach is brilliant.", date: "3 days ago" },
      { id: 2, clientName: "Nathan Brooks", rating: 5, comment: "Technical expertise combined with mental coaching. Game-changing!", date: "1 week ago" },
      { id: 3, clientName: "Isabella Garcia", rating: 5, comment: "Best tennis coach in LA. My serve has improved 200%!", date: "2 weeks ago" }
    ]
  },
  {
    id: 13,
    name: "Derek 'Iron' Johnson",
    specialty: "Strength & Powerlifting",
    experience: 14,
    certifications: ["USAPL Coach", "NSCA-CSCS", "Sports Biomechanics"],
    rating: 4.9,
    reviewCount: 267,
    clientCount: 124,
    hourlyRate: 100,
    location: "Motor City, Dubai",
    distance: "6.1 km",
    bio: "Former powerlifting champion specializing in maximum strength development",
    image: "https://images.unsplash.com/photo-1758875569286-109f63a93a8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWlnaHRsaWZ0aW5nJTIwY29hY2glMjBiYXJiZWxsfGVufDF8fHx8MTc2MTIwNjc3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Brian Mitchell", rating: 5, comment: "Derek's programming added 100lbs to my total in 6 months. Unbelievable!", date: "1 week ago" },
      { id: 2, clientName: "Rachel Stevens", rating: 5, comment: "Finally learned proper form and broke through my plateaus. Highly recommend!", date: "2 weeks ago" },
      { id: 3, clientName: "Carlos Martinez", rating: 5, comment: "True strength expert. Worth every dollar!", date: "3 weeks ago" }
    ]
  },
  {
    id: 14,
    name: "Maya Patel",
    specialty: "CrossFit & Functional Fitness",
    experience: 6,
    certifications: ["CrossFit Level 3", "USAW Sports Performance", "Mobility Specialist"],
    rating: 4.8,
    reviewCount: 178,
    clientCount: 87,
    hourlyRate: 85,
    location: "Al Quoz, Dubai",
    distance: "7.9 km",
    bio: "High-intensity functional training for real-world strength and conditioning",
    image: "https://images.unsplash.com/photo-1556817411-92f5ec899a55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zc2ZpdCUyMHRyYWluZXIlMjB3b3Jrb3V0fGVufDF8fHx8MTc2MTIwNjc3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Jessica Wong", rating: 5, comment: "Maya's workouts are tough but so rewarding. I'm stronger than ever!", date: "4 days ago" },
      { id: 2, clientName: "Ryan Cooper", rating: 5, comment: "CrossFit done right with proper form and technique. Love it!", date: "1 week ago" },
      { id: 3, clientName: "Lauren Davis", rating: 4, comment: "Great coaching and motivating energy. Highly recommend!", date: "2 weeks ago" }
    ]
  },
  {
    id: 15,
    name: "Andre 'The Beast' Williams",
    specialty: "Boxing & Combat Fitness",
    experience: 15,
    certifications: ["Pro Boxing License", "USA Boxing Coach", "Certified Athletic Trainer"],
    rating: 5.0,
    reviewCount: 421,
    clientCount: 178,
    hourlyRate: 120,
    location: "Dubai Marina, Dubai",
    distance: "2.4 km",
    bio: "Professional boxer turned elite coach with 15+ years of ring experience",
    image: "https://images.unsplash.com/photo-1636581563815-9c40c35abe0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjBjb2FjaCUyMHRyYWluaW5nJTIwYXRobGV0ZXxlbnwxfHx8fDE3NjEyMDY3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Marcus Johnson", rating: 5, comment: "Andre is the real deal. Training with a pro has elevated my entire game!", date: "1 day ago" },
      { id: 2, clientName: "Victoria Lane", rating: 5, comment: "Best boxing coach in California. Period.", date: "5 days ago" },
      { id: 3, clientName: "James Rodriguez", rating: 5, comment: "Every session is masterclass. Can't recommend enough!", date: "1 week ago" }
    ]
  },
  {
    id: 16,
    name: "Sophie Anderson",
    specialty: "Pickleball & Racquet Sports",
    experience: 4,
    certifications: ["PPR Level 5", "USAPA Certified", "Tennis Pro Background"],
    rating: 4.7,
    reviewCount: 96,
    clientCount: 54,
    hourlyRate: 70,
    location: "Arabian Ranches, Dubai",
    distance: "12.5 km",
    bio: "Former tennis pro bringing competitive edge to pickleball coaching",
    image: "https://images.unsplash.com/photo-1756477558468-b3e485757470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWNrbGViYWxsJTIwcGxheWVyJTIwY291cnR8ZW58MXx8fHwxNzYxMjA0Mjc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Robert Chen", rating: 5, comment: "Sophie's tennis background really shows. My pickleball game has never been better!", date: "3 days ago" },
      { id: 2, clientName: "Linda Martinez", rating: 5, comment: "Fun, competitive, and effective coaching. Love her sessions!", date: "1 week ago" },
      { id: 3, clientName: "Gary Wilson", rating: 4, comment: "Great technique work. Winning more games already!", date: "2 weeks ago" }
    ]
  },
  {
    id: 17,
    name: "Liam O'Connor",
    specialty: "Muay Thai & Kickboxing",
    experience: 10,
    certifications: ["Muay Thai Kru", "K-1 Kickboxing Instructor", "Combat Sports Specialist"],
    rating: 4.9,
    reviewCount: 234,
    clientCount: 103,
    hourlyRate: 95,
    location: "Jumeirah Beach, Dubai",
    distance: "3.7 miles",
    bio: "Traditional Muay Thai master teaching authentic striking techniques and conditioning",
    image: "https://images.unsplash.com/photo-1696454411278-a64de1369e83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWF5JTIwdGhhaSUyMGZpZ2h0ZXIlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjEyMDY3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Diana Foster", rating: 5, comment: "Liam's Muay Thai technique is authentic and powerful. Best striking coach ever!", date: "2 days ago" },
      { id: 2, clientName: "Kevin Park", rating: 5, comment: "Incredible cardio and technique work. I'm in the best shape of my life!", date: "1 week ago" },
      { id: 3, clientName: "Melissa Chang", rating: 5, comment: "Learning real Muay Thai from a true master. Absolutely love it!", date: "2 weeks ago" }
    ]
  },
  {
    id: 18,
    name: "Zara Thompson",
    specialty: "Gym & Athletic Training",
    experience: 7,
    certifications: ["NASM-PES", "FMS Level 2", "Olympic Weightlifting Coach"],
    rating: 4.8,
    reviewCount: 187,
    clientCount: 94,
    hourlyRate: 88,
    location: "Dubai Silicon Oasis",
    distance: "8.2 km",
    bio: "Performance-focused training for athletes looking to dominate their sport",
    image: "https://images.unsplash.com/photo-1758875568468-194dfe762ba9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBneW0lMjBhdGhsZXRlfGVufDF8fHx8MTc2MTIwNjc3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Trevor Adams", rating: 5, comment: "Zara's athletic training program helped me make varsity! Incredible results.", date: "5 days ago" },
      { id: 2, clientName: "Hannah Scott", rating: 5, comment: "Best performance coach. My speed and power have increased dramatically!", date: "1 week ago" },
      { id: 3, clientName: "Ethan Lee", rating: 4, comment: "Solid programming and great attention to detail. Highly recommend!", date: "3 weeks ago" }
    ]
  },
  {
    id: 19,
    name: "Julian 'The Cobra' Reyes",
    specialty: "MMA & Submission Grappling",
    experience: 11,
    certifications: ["BJJ Black Belt", "Catch Wrestling", "MMA Professional Fighter"],
    rating: 5.0,
    reviewCount: 298,
    clientCount: 134,
    hourlyRate: 108,
    location: "La Mer, Dubai",
    distance: "7.2 km",
    bio: "Active UFC fighter sharing proven techniques from the highest levels of competition",
    image: "https://images.unsplash.com/photo-1617627590804-1de3424fbf04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtbWElMjBmaWdodGVyJTIwY29hY2glMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjEyMDY3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Austin Clark", rating: 5, comment: "Julian's grappling skills are insane. Learning from a UFC fighter is a dream!", date: "1 day ago" },
      { id: 2, clientName: "Natalie King", rating: 5, comment: "Technical precision and real fighting experience. Best MMA coach!", date: "4 days ago" },
      { id: 3, clientName: "Sebastian Torres", rating: 5, comment: "Every technique is battle-tested. Absolutely phenomenal coaching!", date: "1 week ago" }
    ]
  },
  {
    id: 20,
    name: "Olivia Bennett",
    specialty: "Fitness & Body Transformation",
    experience: 8,
    certifications: ["ISSA-CFT", "Nutrition Specialist", "Behavior Change Specialist"],
    rating: 4.9,
    reviewCount: 223,
    clientCount: 107,
    hourlyRate: 82,
    location: "Emirates Hills, Dubai",
    distance: "10.8 km",
    bio: "Transforming lives through science-based fitness and sustainable lifestyle changes",
    image: "https://images.unsplash.com/photo-1758875568932-0eefd3e60090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5lciUyMHByb2Zlc3Npb25hbCUyMGd5bXxlbnwxfHx8fDE3NjEyMDY3Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Christine Moore", rating: 5, comment: "Olivia changed my life! Down 40lbs and feeling amazing. Forever grateful!", date: "3 days ago" },
      { id: 2, clientName: "Michael Ross", rating: 5, comment: "Her approach to fitness and nutrition is refreshingly sustainable. Best coach!", date: "1 week ago" },
      { id: 3, clientName: "Amy Collins", rating: 5, comment: "Finally found a coach who cares about long-term success. Highly recommend!", date: "2 weeks ago" }
    ]
  },
  {
    id: 21,
    name: "Maximus 'Max' Steel",
    specialty: "Strength Training & Bodybuilding",
    experience: 12,
    certifications: ["IFBB Pro Card", "NASM-CPT", "Sports Nutrition Specialist"],
    rating: 4.8,
    reviewCount: 312,
    clientCount: 145,
    hourlyRate: 105,
    location: "Business Bay, Dubai",
    distance: "4.5 km",
    bio: "Professional bodybuilder teaching muscle building and aesthetic development",
    image: "https://images.unsplash.com/photo-1758875569286-109f63a93a8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWlnaHRsaWZ0aW5nJTIwY29hY2glMjBiYXJiZWxsfGVufDF8fHx8MTc2MTIwNjc3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Jason Turner", rating: 5, comment: "Max's bodybuilding knowledge is encyclopedic. Gained 15lbs of muscle!", date: "5 days ago" },
      { id: 2, clientName: "Sarah Phillips", rating: 5, comment: "Best coach for building an aesthetic physique. Results are incredible!", date: "2 weeks ago" },
      { id: 3, clientName: "David Kim", rating: 4, comment: "Solid training and great nutrition advice. Seeing consistent progress!", date: "3 weeks ago" }
    ]
  },
  {
    id: 22,
    name: "Isabella 'Izzy' Cruz",
    specialty: "Boxing & Women's Self-Defense",
    experience: 9,
    certifications: ["WBC Boxing Coach", "Krav Maga Instructor", "Self-Defense Specialist"],
    rating: 5.0,
    reviewCount: 267,
    clientCount: 118,
    hourlyRate: 93,
    location: "Culver City, CA",
    distance: "3.4 miles",
    bio: "Empowering women through boxing skills and practical self-defense techniques",
    image: "https://images.unsplash.com/photo-1636581563815-9c40c35abe0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjBjb2FjaCUyMHRyYWluaW5nJTIwYXRobGV0ZXxlbnwxfHx8fDE3NjEyMDY3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Jennifer Adams", rating: 5, comment: "Izzy is amazing! Feel empowered and confident. Best decision ever!", date: "2 days ago" },
      { id: 2, clientName: "Michelle Zhang", rating: 5, comment: "Perfect blend of boxing skills and self-defense. Highly recommend!", date: "1 week ago" },
      { id: 3, clientName: "Amanda Foster", rating: 5, comment: "Izzy creates a safe, supportive environment. Love her classes!", date: "2 weeks ago" }
    ]
  },
  {
    id: 23,
    name: "Noah Patterson",
    specialty: "Tennis Performance Coach",
    experience: 10,
    certifications: ["USPTA Elite Professional", "Biomechanics Specialist", "Mental Performance Coach"],
    rating: 4.9,
    reviewCount: 189,
    clientCount: 87,
    hourlyRate: 97,
    location: "Santa Monica, CA",
    distance: "4.3 miles",
    bio: "Elite tennis coaching combining biomechanics, strategy, and mental toughness",
    image: "https://images.unsplash.com/photo-1660463527860-b66aebd362c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5uaXMlMjBjb2FjaCUyMHByb2Zlc3Npb25hbCUyMGNvdXJ0fGVufDF8fHx8MTc2MTIwNjc3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Alexander White", rating: 5, comment: "Noah's strategic approach to tennis is brilliant. Game has improved tremendously!", date: "4 days ago" },
      { id: 2, clientName: "Grace Miller", rating: 5, comment: "Mental coaching combined with technical work. Perfect combination!", date: "1 week ago" },
      { id: 3, clientName: "Lucas Brown", rating: 5, comment: "Best tennis coach I've had. Detailed feedback on every aspect of my game.", date: "2 weeks ago" }
    ]
  },
  {
    id: 24,
    name: "Titan Rodriguez",
    specialty: "Strength & Conditioning Specialist",
    experience: 11,
    certifications: ["NSCA-CSCS", "USA Weightlifting", "Performance Enhancement Specialist"],
    rating: 4.9,
    reviewCount: 298,
    clientCount: 136,
    hourlyRate: 102,
    location: "JLT, Dubai",
    distance: "8.0 km",
    bio: "Elite strength and conditioning programs for serious athletes and competitors",
    image: "https://images.unsplash.com/photo-1758875569220-6934933d443c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlbmd0aCUyMGNvbmRpdGlvbmluZyUyMGNvYWNoJTIwYXRobGV0ZXxlbnwxfHx8fDE3NjEyMDY3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Brandon Mitchell", rating: 5, comment: "Titan's programming is elite level. Athletic performance has skyrocketed!", date: "3 days ago" },
      { id: 2, clientName: "Victoria Hayes", rating: 5, comment: "Best S&C coach in LA. Results speak for themselves!", date: "1 week ago" },
      { id: 3, clientName: "Eric Davis", rating: 5, comment: "Scientific approach with proven results. Highly recommend!", date: "2 weeks ago" }
    ]
  },
  {
    id: 25,
    name: "Aria Montgomery",
    specialty: "Fitness & Group Training",
    experience: 6,
    certifications: ["ACE Group Fitness", "HIIT Specialist", "TRX Master Trainer"],
    rating: 4.7,
    reviewCount: 156,
    clientCount: 89,
    hourlyRate: 78,
    location: "Bluewaters Island, Dubai",
    distance: "6.3 km",
    bio: "High-energy fitness training that makes working out fun and effective",
    image: "https://images.unsplash.com/photo-1758875568932-0eefd3e60090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5lciUyMHByb2Zlc3Npb25hbCUyMGd5bXxlbnwxfHx8fDE3NjEyMDY3Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Kelly Johnson", rating: 5, comment: "Aria makes fitness so much fun! Best group classes in LA!", date: "6 days ago" },
      { id: 2, clientName: "Matt Harrison", rating: 5, comment: "Motivating energy and killer workouts. Love training with Aria!", date: "2 weeks ago" },
      { id: 3, clientName: "Lisa Chen", rating: 4, comment: "Great variety and always challenging. Highly recommend her classes!", date: "3 weeks ago" }
    ]
  },
  {
    id: 26,
    name: "Luna Patel",
    specialty: "Yoga & Mindfulness",
    experience: 7,
    certifications: ["RYT-500", "Meditation Teacher", "Pranayama Specialist"],
    rating: 4.9,
    reviewCount: 178,
    clientCount: 94,
    hourlyRate: 82,
    location: "Al Safa, Dubai",
    distance: "5.0 km",
    bio: "Holistic yoga practice combining traditional asanas with mindfulness and breath work",
    image: "https://images.unsplash.com/photo-1667890786022-83bca6c4f4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwaW5zdHJ1Y3RvciUyMG1lZGl0YXRpb258ZW58MXx8fHwxNzYxMjA0Mjc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Emma Thompson", rating: 5, comment: "Luna's yoga classes are transformative. So peaceful and rejuvenating!", date: "4 days ago" },
      { id: 2, clientName: "Ryan Mitchell", rating: 5, comment: "Perfect blend of physical practice and mindfulness. Life-changing!", date: "1 week ago" },
      { id: 3, clientName: "Sofia Garcia", rating: 5, comment: "Luna creates such a calming environment. Best yoga teacher ever!", date: "2 weeks ago" }
    ]
  },
  {
    id: 27,
    name: "Elena Martinez",
    specialty: "Pilates & Core Training",
    experience: 6,
    certifications: ["Comprehensive Pilates Certified", "Pre/Postnatal Specialist", "CoreAlign Instructor"],
    rating: 4.8,
    reviewCount: 145,
    clientCount: 71,
    hourlyRate: 88,
    location: "The Greens, Dubai",
    distance: "8.4 km",
    bio: "Dynamic Pilates training focused on core strength, flexibility, and postural alignment",
    image: "https://images.unsplash.com/photo-1602827114685-efbb2717da9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxhdGVzJTIwaW5zdHJ1Y3RvciUyMHRyYWluaW5nfGVufDF8fHx8MTc2MTIzMjIwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Natalie Brooks", rating: 5, comment: "Elena's Pilates classes are incredibly effective. My core has never been stronger!", date: "3 days ago" },
      { id: 2, clientName: "Julia Anderson", rating: 5, comment: "Amazing instructor with great attention to form. Highly recommend!", date: "1 week ago" },
      { id: 3, clientName: "Rachel Green", rating: 4, comment: "Great sessions focused on proper technique. Seeing real results!", date: "2 weeks ago" }
    ]
  },
  {
    id: 28,
    name: "Axel Storm",
    specialty: "CrossFit & Functional Fitness",
    experience: 9,
    certifications: ["CrossFit Level 3", "USA Weightlifting", "Gymnastics Coach"],
    rating: 4.9,
    reviewCount: 221,
    clientCount: 98,
    hourlyRate: 99,
    location: "City Walk, Dubai",
    distance: "6.1 km",
    bio: "High-intensity CrossFit training building strength, endurance, and mental toughness",
    image: "https://images.unsplash.com/photo-1620188500179-32ac33c60848?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9zc2ZpdCUyMGF0aGxldGUlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjEyMzIyMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Derek Thompson", rating: 5, comment: "Axel's CrossFit programming is next level. Best shape of my life!", date: "2 days ago" },
      { id: 2, clientName: "Chris Lee", rating: 5, comment: "Intense workouts but amazing results. Axel is the real deal!", date: "1 week ago" },
      { id: 3, clientName: "Mark Wilson", rating: 5, comment: "Finally found a CrossFit coach who focuses on proper technique. Love it!", date: "2 weeks ago" }
    ]
  },
  {
    id: 29,
    name: "Dr. Cameron Ross",
    specialty: "Sports Therapy",
    experience: 13,
    certifications: ["DPT", "Sports Medicine Specialist", "Manual Therapy Certified"],
    rating: 5.0,
    reviewCount: 187,
    clientCount: 112,
    hourlyRate: 115,
    location: "Los Angeles, CA",
    distance: "2.5 miles",
    bio: "Licensed physical therapist specializing in sports injury recovery and performance optimization",
    image: "https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjB0aGVyYXB5JTIwbWFzc2FnZXxlbnwxfHx8fDE3NjEyMzIyMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Michael Torres", rating: 5, comment: "Dr. Ross helped me recover from a serious injury. Incredible expertise!", date: "1 week ago" },
      { id: 2, clientName: "Ashley Martin", rating: 5, comment: "Best sports therapist in LA. Back to full training thanks to Cameron!", date: "2 weeks ago" },
      { id: 3, clientName: "Kevin Zhang", rating: 5, comment: "Professional, knowledgeable, and genuinely cares about recovery. Highly recommend!", date: "3 weeks ago" }
    ]
  },
  {
    id: 30,
    name: "Rafael Silva",
    specialty: "BJJ",
    experience: 14,
    certifications: ["BJJ Black Belt (3rd Degree)", "IBJJF Referee", "Judo Black Belt"],
    rating: 5.0,
    reviewCount: 289,
    clientCount: 134,
    hourlyRate: 108,
    location: "Culver City, CA",
    distance: "3.6 miles",
    bio: "World-class Brazilian Jiu-Jitsu instruction from competition to self-defense",
    image: "https://images.unsplash.com/photo-1720730790876-3508a749abfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCSkolMjBicmF6aWxpYW4lMjBqaXUlMjBqaXRzdXxlbnwxfHx8fDE3NjEyMzIyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Marcus Johnson", rating: 5, comment: "Rafael is a true BJJ master. Technique is flawless!", date: "5 days ago" },
      { id: 2, clientName: "Tyler Brooks", rating: 5, comment: "Best grappling coach I've trained with. World-class instruction!", date: "1 week ago" },
      { id: 3, clientName: "Alex Rivera", rating: 5, comment: "Rafael's teaching style is perfect. Progress has been amazing!", date: "2 weeks ago" }
    ]
  },
  {
    id: 31,
    name: "Maya Chen",
    specialty: "Badminton",
    experience: 8,
    certifications: ["BWF Level 3 Coach", "Former National Champion", "Sports Science Degree"],
    rating: 4.8,
    reviewCount: 134,
    clientCount: 68,
    hourlyRate: 77,
    location: "Mirdif, Dubai",
    distance: "13.4 km",
    bio: "Elite badminton coaching with focus on technique, footwork, and competitive strategy",
    image: "https://images.unsplash.com/photo-1613918431551-b2ef2720387c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWRtaW50b24lMjBwbGF5ZXIlMjBjb3VydHxlbnwxfHx8fDE3NjEyMzIyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    reviews: [
      { id: 1, clientName: "Tom Anderson", rating: 5, comment: "Maya's badminton expertise is incredible. Game has improved so much!", date: "4 days ago" },
      { id: 2, clientName: "Sarah Kim", rating: 5, comment: "Technical coaching at its finest. Love training with Maya!", date: "1 week ago" },
      { id: 3, clientName: "David Lee", rating: 4, comment: "Great footwork drills and strategy. Winning more matches!", date: "2 weeks ago" }
    ]
  }
];

const locations = ["All Locations", "Dubai Marina", "Downtown Dubai", "JBR", "Business Bay", "Jumeirah", "DIFC", "Al Barsha", "Dubai Sports City"];

// Map sport IDs to coach specialties
const sportToSpecialtyMap: Record<string, string[]> = {
  "boxing": ["Boxing", "Boxing Coach", "Boxing & Women's Self-Defense"],
  "muay-thai": ["Muay Thai", "Muay Thai & Kickboxing"],
  "mma": ["MMA", "MMA Fighter & Coach"],
  "bjj": ["BJJ", "Brazilian Jiu-Jitsu"],
  "tennis": ["Tennis", "Tennis Coach", "Tennis Performance Coach"],
  "pickleball": ["Pickleball", "Pickleball Pro", "Pickleball & Racquet Sports"],
  "paddle": ["Paddle"],
  "badminton": ["Badminton"],
  "yoga": ["Yoga", "Yoga & Mindfulness"],
  "pilates": ["Pilates", "Pilates & Core Training"],
  "strength": ["Strength & Conditioning", "Strength & Conditioning Specialist", "Strength Training & Bodybuilding"],
  "weightlifting": ["Weightlifting", "Olympic Weightlifting", "Strength Training & Bodybuilding"],
  "crossfit": ["Crossfit", "CrossFit & Functional Fitness"],
  "therapy": ["Sports Therapy", "Recovery Specialist"]
};

interface CoachesProfileProps {
  selectedSports?: string[];
  onOpenMap?: () => void;
  onCoachClick?: (coachId: string) => void;
}

export function CoachesProfile({ selectedSports = [], onOpenMap, onCoachClick }: CoachesProfileProps) {
  const [selectedCoach, setSelectedCoach] = useState<number | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string>("All Locations");
  const [showLocationMenu, setShowLocationMenu] = useState(false);
  const [showFilterSheet, setShowFilterSheet] = useState(false);
  const [displayedCoaches, setDisplayedCoaches] = useState<typeof allCoaches>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  
  const [filters, setFilters] = useState<FilterState>({
    locations: [],
    sports: [],
    priceRange: [0, 200],
    minRating: 0,
    maxDistance: 50
  });

  const COACHES_PER_LOAD = 8;

  // Update filters when selectedSports changes from Home page
  useEffect(() => {
    if (selectedSports.length > 0) {
      // Map sport IDs to sport names for filters
      const sportNames = selectedSports.map(sportId => {
        // Convert sport ID to display name
        const nameMap: Record<string, string> = {
          'boxing': 'Boxing',
          'muay-thai': 'Muay Thai',
          'mma': 'MMA',
          'bjj': 'BJJ',
          'tennis': 'Tennis',
          'pickleball': 'Pickleball',
          'paddle': 'Paddle',
          'badminton': 'Badminton',
          'yoga': 'Yoga',
          'pilates': 'Pilates',
          'strength': 'Strength & Conditioning',
          'weightlifting': 'Weightlifting',
          'crossfit': 'CrossFit',
          'therapy': 'Sports Therapy'
        };
        return nameMap[sportId] || sportId;
      });
      
      setFilters(prev => ({
        ...prev,
        sports: sportNames
      }));
    }
  }, [selectedSports]);

  // Get matching specialties for selected sports
  const getMatchingSpecialties = () => {
    if (selectedSports.length === 0) return [];
    return selectedSports.flatMap(sportId => sportToSpecialtyMap[sportId] || []);
  };

  const matchingSpecialties = getMatchingSpecialties();

  // Filter coaches based on all filters
  const filteredCoaches = allCoaches.filter(coach => {
    // Location filter
    if (filters.locations.length > 0 && !filters.locations.includes(coach.location)) {
      return false;
    }
    
    // Sports filter - check if coach specialty includes any of the selected sports
    if (filters.sports.length > 0) {
      const matchesSport = filters.sports.some(sport => 
        coach.specialty.toLowerCase().includes(sport.toLowerCase()) ||
        sport.toLowerCase().includes(coach.specialty.toLowerCase().split(" ")[0])
      );
      if (!matchesSport) return false;
    }
    
    // Price filter
    if (coach.hourlyRate < filters.priceRange[0] || coach.hourlyRate > filters.priceRange[1]) {
      return false;
    }
    
    // Rating filter
    if (coach.rating < filters.minRating) {
      return false;
    }
    
    return true;
  });

  // Separate coaches into suggested (matching selected sports) and others
  const suggestedCoaches = filteredCoaches.filter(coach => 
    matchingSpecialties.some(specialty => 
      coach.specialty.toLowerCase().includes(specialty.toLowerCase())
    )
  );

  const otherCoaches = filteredCoaches.filter(coach => 
    !matchingSpecialties.some(specialty => 
      coach.specialty.toLowerCase().includes(specialty.toLowerCase())
    )
  );

  // Combine suggested coaches first, then others
  const orderedCoaches = selectedSports.length > 0 
    ? [...suggestedCoaches, ...otherCoaches]
    : filteredCoaches;

  // Initialize with first batch
  useEffect(() => {
    setDisplayedCoaches(orderedCoaches.slice(0, COACHES_PER_LOAD));
    setHasMore(orderedCoaches.length > COACHES_PER_LOAD);
  }, [filters, selectedSports]);

  // Infinite scroll logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore && !isLoading) {
          loadMoreCoaches();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [hasMore, isLoading, displayedCoaches]);

  const loadMoreCoaches = () => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    
    // Simulate loading delay for smooth UX
    setTimeout(() => {
      const currentLength = displayedCoaches.length;
      const nextBatch = orderedCoaches.slice(currentLength, currentLength + COACHES_PER_LOAD);
      
      setDisplayedCoaches(prev => [...prev, ...nextBatch]);
      setHasMore(currentLength + nextBatch.length < orderedCoaches.length);
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Fixed Header */}
      <div className="fixed top-[70px] left-0 right-0 z-20 bg-[#0f0f0f] border-b border-gray-800/20">
        <div className="max-w-md mx-auto px-5 py-4">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-gray-500 text-xs font-medium tracking-wide uppercase mb-2">Find Your</p>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-800/30 rounded-xl transition-all duration-200 active:scale-95">
                <Search className="w-[18px] h-[18px] text-white" strokeWidth={2} />
              </button>
              <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-800/30 rounded-xl transition-all duration-200 active:scale-95">
                <Bell className="w-[18px] h-[18px] text-white" strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Search Bar with Location */}
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={onOpenMap}
              className="flex-1 bg-[#1a1a1a] px-4 py-3 rounded-[18px] border border-gray-800/30 hover:border-gray-700/50 flex items-center gap-3 transition-all duration-200 active:scale-[0.98]"
            >
              <MapPin className="w-[18px] h-[18px] text-[#c6ff00] flex-shrink-0" strokeWidth={2} />
              <div className="flex-1 min-w-0 text-left">
                <p className="text-white font-medium tracking-tight">Dubai</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" strokeWidth={2} />
            </button>
          </div>

          {/* Filter Button */}
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-[#1a1a1a] px-4 py-3.5 rounded-[18px] border border-gray-800/30">
              <p className="text-sm text-gray-400 tracking-tight">
                {filters.sports.length > 0 || filters.minRating > 0 
                  ? `${displayedCoaches.length} coaches found` 
                  : "All coaches"}
              </p>
            </div>

            <button 
              onClick={() => setShowFilterSheet(true)}
              className="w-12 h-12 flex items-center justify-center bg-[#c6ff00] hover:bg-[#d4ff00] rounded-[18px] transition-all duration-200 shadow-lg shadow-[#c6ff00]/25 active:scale-95"
            >
              <SlidersHorizontal className="w-5 h-5 text-black" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* Coaches Grid with padding for fixed header */}
      <div className="pt-[180px] px-5 pb-5 max-w-md mx-auto">
        <div className="space-y-5">
          {displayedCoaches.length > 0 ? (
            <>
              {/* Suggested Coaches Section */}
              {selectedSports.length > 0 && suggestedCoaches.length > 0 && displayedCoaches.some(c => suggestedCoaches.includes(c)) && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-[#c6ff00]" strokeWidth={2} />
                    <h2 className="text-[#1a1a1a] font-semibold tracking-tight">Suggested for You</h2>
                  </div>
                </div>
              )}

              {displayedCoaches.map((coach, index) => {
                // Check if this is the first coach in "other coaches" section
                const isFirstOtherCoach = selectedSports.length > 0 && 
                  otherCoaches.length > 0 && 
                  coach === displayedCoaches.find(c => otherCoaches.includes(c));

                return (
                  <div key={coach.id}>
                    {/* Show "All Coaches" header when transitioning to other coaches */}
                    {isFirstOtherCoach && (
                      <div className="flex items-center gap-2 mb-4 mt-8">
                        <Users className="w-5 h-5 text-gray-400" strokeWidth={2} />
                        <h2 className="text-[#1a1a1a] font-semibold tracking-tight">All Coaches</h2>
                      </div>
                    )}
                    
                    <CoachCard 
                      coach={coach}
                      onSelect={() => setSelectedCoach(selectedCoach === coach.id ? null : coach.id)}
                      isSelected={selectedCoach === coach.id}
                    />
                  </div>
                );
              })}
              
              {/* Loading indicator and intersection observer target */}
              {hasMore && (
                <div ref={loadMoreRef} className="py-10 flex justify-center">
                  {isLoading && (
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#c6ff00] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-[#c6ff00] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-[#c6ff00] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  )}
                </div>
              )}
              
              {!hasMore && displayedCoaches.length > 0 && (
                <div className="text-center py-10">
                  <p className="text-gray-500 text-sm">You've reached the end</p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <MapPin className="w-12 h-12 text-gray-700 mx-auto mb-4" strokeWidth={2} />
              <p className="text-gray-500 font-medium">No coaches found</p>
              <button 
                onClick={() => setFilters({
                  locations: [],
                  sports: [],
                  priceRange: [0, 200],
                  minRating: 0
                })}
                className="mt-4 text-[#c6ff00] text-sm font-semibold tracking-tight"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Filter Sheet */}
      <FilterSheet 
        isOpen={showFilterSheet}
        onClose={() => setShowFilterSheet(false)}
        onApplyFilters={(newFilters) => setFilters(newFilters)}
        currentFilters={filters}
      />
    </div>
  );
}

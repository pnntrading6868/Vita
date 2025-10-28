import { Star, ThumbsUp } from "lucide-react";

interface Review {
  id: number;
  clientName: string;
  rating: number;
  comment: string;
  date: string;
}

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-[#0f0f0f] rounded-[18px] p-5 border border-gray-800/20">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="text-white text-sm font-semibold tracking-tight">{review.clientName}</span>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < review.rating ? "text-[#c6ff00]" : "text-gray-700"
                  }`}
                  fill={i < review.rating ? "#c6ff00" : "none"}
                  strokeWidth={2}
                />
              ))}
            </div>
          </div>
          <p className="text-gray-400 text-[13px] leading-relaxed mb-3 font-medium">{review.comment}</p>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 text-[11px] font-medium tracking-wide">{review.date}</span>
            <button className="flex items-center gap-1.5 text-gray-500 hover:text-[#c6ff00] transition-colors duration-200">
              <ThumbsUp className="w-3.5 h-3.5" strokeWidth={2} />
              <span className="text-[11px] font-semibold tracking-tight">Helpful</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

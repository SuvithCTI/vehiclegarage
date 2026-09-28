import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';

export const ReviewCard = ({ review }) => {
  const initials = review.name
    ? review.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : 'U';

  const getBadgeStyle = (name = '') => {
    const themes = [
      'bg-gradient-to-br from-[#E53935] to-red-600 border-red-200 text-white shadow-red-100',
      'bg-gradient-to-br from-amber-500 to-orange-600 border-amber-200 text-white shadow-amber-100',
      'bg-gradient-to-br from-emerald-500 to-teal-600 border-emerald-200 text-white shadow-emerald-100',
      'bg-gradient-to-br from-indigo-500 to-blue-600 border-indigo-200 text-white shadow-indigo-100',
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return themes[Math.abs(hash) % themes.length];
  };

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 md:p-6 border border-slate-200 flex flex-col justify-between hover:border-[#E53935]/50 hover:shadow-xl transition duration-300 shadow-sm h-full">
      <div className="space-y-2.5 sm:space-y-4">
        {/* Top user row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
            <div
              className={`w-8 h-8 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl flex items-center justify-center font-black text-xs sm:text-sm border shadow-sm shrink-0 tracking-wider font-['Outfit'] ${getBadgeStyle(
                review.name
              )}`}
            >
              {initials}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center space-x-1 sm:space-x-1.5">
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm truncate">{review.name}</h4>
                {review.verified && (
                  <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0" title="Verified Customer" />
                )}
              </div>
              <p className="text-[10px] sm:text-xs text-amber-600 font-semibold truncate">{review.vehicle}</p>
            </div>
          </div>
          <Quote className="w-5 h-5 sm:w-7 sm:h-7 text-slate-300 shrink-0" />
        </div>

        {/* Rating Stars */}
        <div className="flex items-center space-x-0.5 sm:space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 sm:w-4 sm:h-4 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`}
            />
          ))}
          <span className="ml-1 sm:ml-2 text-[10px] sm:text-xs font-semibold text-slate-700">{review.rating}.0</span>
        </div>

        {/* Comment */}
        <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed italic line-clamp-3">
          "{review.comment}"
        </p>
      </div>

      {/* Service badge */}
      <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between text-[9px] sm:text-[11px] text-slate-500 gap-0.5 sm:gap-0">
        <span className="font-semibold text-slate-800 truncate">Service: {review.service}</span>
        <span className="shrink-0">{review.date}</span>
      </div>
    </div>
  );
};

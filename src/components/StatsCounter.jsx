import React, { useState, useEffect } from 'react';

// Hook for smooth running numbers counting animation
function useCountUp(endValue, duration = 2000, isDecimal = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const startValue = 0;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out exponential curve
      const easeOut = 1 - Math.pow(2, -10 * progress);
      const current = startValue + (endValue - startValue) * easeOut;

      setCount(current);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(endValue);
      }
    };

    window.requestAnimationFrame(step);
  }, [endValue, duration]);

  if (isDecimal) {
    return count.toFixed(1);
  }
  return Math.floor(count).toLocaleString();
}

export const StatsCounter = () => {
  const countVehicles = useCountUp(15400, 2200);
  const countRating = useCountUp(98.6, 2000, true);
  const countTechs = useCountUp(18, 1800);
  const countYears = useCountUp(12, 1600);

  const stats = [
    {
      id: 'vehicles',
      runningValue: `${countVehicles}+`,
      title: 'Vehicles Serviced',
      subtitle: 'Cars & bikes across Bangalore',
      topStrip: 'bg-gradient-to-r from-red-500 via-rose-500 to-amber-500',
      textGradient: 'from-red-600 via-rose-600 to-amber-600',
      cardBg: 'bg-gradient-to-br from-red-50/70 via-white to-rose-50/30',
      borderHover: 'hover:border-red-400 hover:shadow-red-500/15'
    },
    {
      id: 'customers',
      runningValue: `${countRating}%`,
      title: 'Happy Customers',
      subtitle: '3,200+ 5-star verified reviews',
      topStrip: 'bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400',
      textGradient: 'from-amber-600 via-orange-600 to-yellow-600',
      cardBg: 'bg-gradient-to-br from-amber-50/70 via-white to-orange-50/30',
      borderHover: 'hover:border-amber-400 hover:shadow-amber-500/15'
    },
    {
      id: 'technicians',
      runningValue: `${countTechs}+`,
      title: 'Certified Technicians',
      subtitle: 'Master ASE & Bosch crew',
      topStrip: 'bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500',
      textGradient: 'from-blue-600 via-indigo-600 to-cyan-600',
      cardBg: 'bg-gradient-to-br from-blue-50/70 via-white to-cyan-50/30',
      borderHover: 'hover:border-blue-400 hover:shadow-blue-500/15'
    },
    {
      id: 'years',
      runningValue: `${countYears}+`,
      title: 'Years of Trust',
      subtitle: 'Established since 2014',
      topStrip: 'bg-gradient-to-r from-emerald-500 via-teal-500 to-green-400',
      textGradient: 'from-emerald-600 via-teal-600 to-green-600',
      cardBg: 'bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/30',
      borderHover: 'hover:border-emerald-400 hover:shadow-emerald-500/15'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
      {stats.map((st) => (
        <div
          key={st.id}
          className={`relative overflow-hidden rounded-2xl ${st.cardBg} border border-slate-200/90 p-4 text-center ${st.borderHover} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 shadow-xs group`}
        >
          {/* Top Colorful Accent Strip */}
          <div className={`absolute top-0 inset-x-0 h-1.5 ${st.topStrip}`}></div>

          {/* Running Gradient Number */}
          <h3 className={`text-2xl sm:text-3xl font-black font-['Outfit'] tracking-tight text-transparent bg-clip-text bg-gradient-to-r ${st.textGradient} mt-1`}>
            {st.runningValue}
          </h3>

          {/* Title & Subtitle */}
          <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-['Outfit'] mt-0.5">
            {st.title}
          </h4>
          <p className="text-[11px] text-slate-500 font-medium truncate mt-0.5">
            {st.subtitle}
          </p>
        </div>
      ))}
    </div>
  );
};

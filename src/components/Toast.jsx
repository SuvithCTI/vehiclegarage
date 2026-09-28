import React from 'react';
import { useGarage } from '../context/GarageContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const Toast = () => {
  const { toast } = useGarage();

  if (!toast) return null;

  const isSuccess = toast.type === 'success';
  const isError = toast.type === 'error';

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
      <div className={`flex items-center space-x-3 px-5 py-3.5 rounded-2xl shadow-2xl border backdrop-blur-md ${
        isSuccess 
          ? 'bg-slate-900/95 border-emerald-500/50 text-emerald-400' 
          : isError 
            ? 'bg-slate-900/95 border-rose-500/50 text-rose-400'
            : 'bg-slate-900/95 border-orange-500/50 text-orange-400'
      }`}>
        {isSuccess ? (
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
        ) : isError ? (
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
        ) : (
          <Info className="w-5 h-5 text-orange-400 shrink-0" />
        )}
        <span className="text-xs font-bold text-slate-100">{toast.message}</span>
      </div>
    </div>
  );
};


import React from "react";

interface ProgressCircleProps {
  totalEarnings: number;
  projectedEarnings: number;
}

const ProgressCircle = ({ totalEarnings, projectedEarnings }: ProgressCircleProps) => {
  const percentToTarget = (totalEarnings / projectedEarnings) * 100;
  
  return (
    <div className="relative h-40 w-40 flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#e5e7eb"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#fbbf24"
          strokeWidth="10"
          fill="none"
          strokeDasharray="251.2"
          strokeDashoffset={251.2 - (251.2 * percentToTarget) / 100}
          transform="rotate(-90 50 50)"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-3xl font-bold">${(totalEarnings / 1000).toFixed(1)}k</span>
        <span className="text-xs text-gray-500">of ${(projectedEarnings / 1000).toFixed(0)}k goal</span>
      </div>
    </div>
  );
};

export default ProgressCircle;

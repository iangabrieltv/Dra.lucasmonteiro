import React from 'react';

interface WatermarkMonogramProps {
  className?: string;
  opacity?: number;
}

export const WatermarkMonogram: React.FC<WatermarkMonogramProps> = ({
  className = '',
  opacity = 0.07,
}) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none absolute overflow-hidden ${className}`}
      style={{ opacity }}
    >
      <svg
        viewBox="0 0 320 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-[#D8B779]"
      >
        <rect
          x="10"
          y="10"
          width="300"
          height="180"
          rx="90"
          stroke="currentColor"
          strokeWidth="12"
          strokeOpacity="0.8"
        />
        <path
          d="M60 145L125 55C135 40 155 40 165 55L190 95"
          stroke="currentColor"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M140 145L205 55C215 40 235 40 245 55L270 95"
          stroke="currentColor"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M85 145H160"
          stroke="currentColor"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <path
          d="M165 145H240"
          stroke="currentColor"
          strokeWidth="12"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

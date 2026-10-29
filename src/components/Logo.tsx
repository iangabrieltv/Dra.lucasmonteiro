import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const heightClasses = {
    sm: 'h-6 sm:h-7',
    md: 'h-7 sm:h-8 md:h-[34px]',
    lg: 'h-9 sm:h-10 md:h-12',
  };

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src="/public/assets/aistudio/logo_transparent.png"
        alt="Monteiro Advocacia Especializada"
        className={`${heightClasses[size]} w-auto object-contain transition-opacity hover:opacity-90`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

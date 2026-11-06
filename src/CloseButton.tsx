import React from 'react';

export interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClose?: () => void;
  size?: 'sm' | 'md' | 'lg';
  darkMode?: boolean;
  className?: string;
  title?: string;
}

export function CloseButton({
  onClose,
  onClick,
  size = 'md',
  darkMode = true,
  className = '',
  title = 'Close modal',
  ...props
}: CloseButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    onClose?.();
  };

  const sizeClasses = {
    sm: 'w-7 h-7 text-[16px] rounded-md',
    md: 'w-8 h-8 text-[18px] rounded-lg',
    lg: 'w-10 h-10 text-[20px] rounded-xl',
  }[size];

  const themeClasses = darkMode
    ? 'text-cat-subtext0 hover:text-cat-text hover:bg-cat-surface0 active:bg-cat-surface1'
    : 'text-cat-subtext0 hover:text-cat-text hover:bg-cat-surface1 active:bg-cat-surface2';

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`shrink-0 aspect-square flex items-center justify-center transition-all duration-150 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-cat-accent/50 ${sizeClasses} ${themeClasses} ${className}`}
      title={title}
      aria-label={title}
      {...props}
    >
      <span className="material-symbols-outlined leading-none select-none">close</span>
    </button>
  );
}

export default CloseButton;

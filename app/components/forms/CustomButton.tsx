import React from 'react';

interface CustomButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  className = '',
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-6 py-3 
        bg-[var(--color-airbnb)] 
        hover:bg-[var(--color-airbnb-dark)] 
        rounded-xl 
        text-white 
        text-base 
        font-semibold 
        shadow-md 
        transition 
        duration-200 
        ease-in-out
        cursor-pointer 
        focus:outline-none 
        focus:ring-2 
        focus:ring-offset-2 
        focus:ring-[var(--color-airbnb-dark)] 
        ${className}
      `}
    >
      {label}
    </button>
  );
};

export default CustomButton;
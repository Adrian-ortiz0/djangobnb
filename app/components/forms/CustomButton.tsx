import React from 'react'
interface CustomButtonProps {
    label: string;
    className?: string;
    onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({label, onClick, className}) => {

  return (
    
    <div onClick={onClick} className={`py-4 bg-[var(--color-airbnb)] hover:bg-[var(--color-airbnb-dark)] rounded-xl cursor-pointer text-center transition text-white ${className}`}>
      {label}
    </div>
  )
}

export default CustomButton

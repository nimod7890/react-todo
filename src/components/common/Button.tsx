import React from 'react'

interface ButtonProps {
    disabled? : boolean;
    variant : 'register' | 'delete';
    onClick?: () => void;
}

const styled : Record<string, string> = {
    register : 'bg-pink-200 w-24',
    delete : 'bg-blue-500 w-20'
};

const Button = ({disabled, variant, onClick} : ButtonProps) => {
  return (
    <button className ={`flex justify-center ${styled[variant]} border border-cyan-200 p-4 cursor-pointer text-cyan-50`} onClick={onClick} disabled={disabled}>클릭하기</button>
  )
}

export default Button
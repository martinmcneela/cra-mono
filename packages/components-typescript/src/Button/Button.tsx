import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  bg: string;
}

const Button: React.FC<ButtonProps> = ({children, bg, ...props}: ButtonProps) => <button className="button" style={{background: `${bg}`}} {...props}>{children}</button>;

export default Button;
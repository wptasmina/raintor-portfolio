"use client";

import React from "react";
import { cn } from "@/lib/utils";

type CustomButtonProps = {
  text?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};






const CustomButton: React.FC<CustomButtonProps> = ({
  text = "Click me",
  icon,
  iconPosition = "right",
  className = "",
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "group flex items-center gap-2 px-5 py-2.5 rounded-full bg-lime-300 hover:bg-lime-400 font-bold text-sm transition-all active:scale-95",
        className
      )}
    >
      {/* {icon && iconPosition === "left" && <span>{icon}</span>}
      {text && <span>{text}</span>}
      {icon && iconPosition === "right" && <span>{icon}</span>} */}

      {icon && iconPosition === "left" && (
        <span className="mr-2 transition-transform duration-300 ease-in-out group-hover:-translate-x-1">
          {icon}
        </span>
      )}
      {text && <span>{text}</span>}
      {icon && iconPosition === "right" && (
        <span className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </button>
  );
};

export default CustomButton;

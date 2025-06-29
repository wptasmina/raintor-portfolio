"use client";
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
        "group flex items-center gap-2 px-4 py-2 rounded-full dark:bg-gray-950 bg-white hover:bg-white border border-[#060606] dark:border-gray-800 font-bold text-sm transition-all active:scale-95 cursor-pointer dark:shadow",
        className
      )}
    >
      {/* {icon && iconPosition === "left" && <span>{icon}</span>}
      {text && <span>{text}</span>}
      {icon && iconPosition === "right" && <span>{icon}</span>} */}

      {icon && iconPosition === "left" && (
        <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-1">
          {icon}
        </span>
      )}
      {text && <span>{text}</span>}
      {icon && iconPosition === "right" && (
        <span className="ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </button>
  );
};

export default CustomButton;

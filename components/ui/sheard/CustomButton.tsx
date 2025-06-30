"use client";
import { cn } from "@/lib/utils";
import React from "react";

type CustomButtonProps = {
  text?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  loading?: boolean;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  text = "Click me",
  icon,
  iconPosition = "right",
  className = "",
  onClick,
  type = "button",
  loading = false,
}) => {
  return (
    <button
      type={type}
      onClick={loading ? undefined : onClick}
      disabled={loading}
      className={cn(
        "group flex items-center justify-center gap-2 pr-4 py-2 rounded-full dark:bg-gray-950 bg-white hover:bg-white border border-[#060606] dark:border-gray-800 font-bold text-sm transition-all active:scale-95 cursor-pointer dark:shadow disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    >
      {loading ? (
        <svg
          className="animate-spin h-5 w-5 text-gray-900 dark:text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-label="loading"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
      ) : (
        <>
          {icon && iconPosition === "left" && (
            <span className="flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-x-1 rounded-full border border-black w-8 h-8">
              {icon}
            </span>
          )}
          {text && <span>{text}</span>}
          {icon && iconPosition === "right" && (
            <span className="ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-1">
              {icon}
            </span>
          )}
        </>
      )}
    </button>
  );
};

export default CustomButton;

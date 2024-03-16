"use client";

import { PiEye, PiEyeClosed } from "react-icons/pi";

import { cn } from "@/lib/cn";

import { buttonVariants } from "./ui/button";

interface PasswordToggleProps {
  isOpen: boolean;
  onClick: (event: React.MouseEvent<SVGAElement>) => void;
  className?: string;
}

const PasswordToggle: React.FC<PasswordToggleProps> = ({
  isOpen = false,
  onClick,
  className,
}) => {
  return isOpen ? (
    <PiEye
      onClick={onClick}
      className={cn(
        buttonVariants({ variant: "ghost", size: "icon" }),
        className,
      )}
    />
  ) : (
    <PiEyeClosed
      onClick={onClick}
      className={cn(
        buttonVariants({ variant: "ghost", size: "icon" }),
        className,
      )}
    />
  );
};

export default PasswordToggle;

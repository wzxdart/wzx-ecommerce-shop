import { PiEye, PiEyeClosed } from "react-icons/pi";

import { cn } from "@/lib/cn";

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
    <PiEye onClick={onClick} className={cn("h-5 w-5", className)} />
  ) : (
    <PiEyeClosed onClick={onClick} className={cn("h-5 w-5", className)} />
  );
};

export default PasswordToggle;

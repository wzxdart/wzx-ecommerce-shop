import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";

const SocialLinks = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-6">
      <Button variant={"outline"} className="h-11 w-full">
        <FaGoogle
          className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
        />
      </Button>
      <Button variant={"outline"} className="h-11 w-full">
        <FaFacebook
          className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
        />
      </Button>
      <Button variant={"outline"} className="h-11 w-full">
        <FaApple
          className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
        />
      </Button>
    </div>
  );
};

export default SocialLinks;

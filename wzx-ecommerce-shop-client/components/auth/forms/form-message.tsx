import { CiCircleAlert as Alert, CiCircleCheck as Check } from "react-icons/ci";

import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/cn";

interface FormErrorProps {
  error?: string;
  success?: string;
}

const FormError: React.FC<FormErrorProps> = ({ error, success }) => {
  if (!error && !success) return <Skeleton className="h-9 w-full" />;

  if (error && !success)
    return (
      <div className="flex h-9 w-full items-center justify-center gap-3 rounded-md">
        <Alert
          className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
        />
        <p className="text-sm font-medium md:text-base">{error}</p>
      </div>
    );

  if (!error && success)
    return (
      <div className="flex h-9 w-full items-center justify-center gap-3 rounded-md bg-zinc-300 dark:bg-zinc-700">
        <Check
          className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
        />
        <p className="text-sm font-medium md:text-base">{success}</p>
      </div>
    );
};

export default FormError;

import { cn } from "@/lib/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn("", className)}>
      <div className="mx-auto max-w-[116rem] px-4 md:px-6 xl:px-8">
        {children}
      </div>
    </div>
  );
};

export default Container;

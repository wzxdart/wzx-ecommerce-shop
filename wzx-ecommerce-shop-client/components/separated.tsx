"use client";

interface SeparatedProps {
  children: React.ReactNode;
}

const Separetad: React.FC<SeparatedProps> = ({ children }) => {
  return (
    <div className="relative py-5 text-center">
      <div className="absolute bottom-0 left-0 top-1/2 h-[1px] w-[45%] bg-zinc-300 dark:bg-zinc-700" />
      <span className="text-sm font-light">{children}</span>
      <div className="absolute bottom-0 right-0 top-1/2 h-[1px] w-[45%] bg-zinc-300 dark:bg-zinc-700" />
    </div>
  );
};

export default Separetad;

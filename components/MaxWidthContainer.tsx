interface MaxWidthContainerProps {
    children: React.ReactNode;
    className?: string;
  }
  
  export default function MaxWidthContainer({ children, className }: MaxWidthContainerProps) {
    return (
      <div className={`w-[95%] max-w-[1200px] mx-auto px-4 md:px-8 ${className || ""}`}>
        {children}
      </div>
    );
  }
  
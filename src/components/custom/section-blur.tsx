import React, { ReactNode, FC } from "react";

interface SectionBlurProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const SectionBlur: FC<SectionBlurProps> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={`techstack flex flex-col gap-2.5 bg-white-blur border-2 border-white p-5 rounded-xl ${className || ""}`}>
      {children}
    </div>
  );
};

export default SectionBlur;

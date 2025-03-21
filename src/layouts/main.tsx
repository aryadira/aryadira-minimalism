import React, { FC, ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return <main className='w-screen max-w-screen min-h-screen max-h-fit h-fit py-2.5 overflow-hidden flex flex-col items-center bg-[#fafafa]'>{children}</main>;
};

export default MainLayout;

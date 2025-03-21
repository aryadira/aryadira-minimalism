import React, { FC, ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return <main className='w-screen flex flex-col items-center bg-[#f5f5f5]'>{children}</main>;
};

export default MainLayout;

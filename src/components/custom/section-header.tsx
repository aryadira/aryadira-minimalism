import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className='section-header bg-white-blur border-2 border-white p-5 rounded-lg'>
      <div className='title-header'>
        <div className='title text-2xl mb-2.5'>{title}</div>
        <div className='subtitle text-base'>{subtitle}</div>
      </div>
    </div>
  );
};

export default SectionHeader;

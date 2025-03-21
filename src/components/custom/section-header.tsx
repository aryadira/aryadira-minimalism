import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className='title-section-header mb-5'>
      <div className='title text-2xl mb-2.5'>{title}</div>
      <div className='subtitle text-base'>{subtitle}</div>
    </div>
  );
};

export default SectionHeader;

import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const HeaderFrame = ({ className, children }: Props) => {
  return <header className={`bg-blue bg-opacity-10 w-full px-16 py-6 ${className}`}>{children}</header>;
};

export default HeaderFrame;

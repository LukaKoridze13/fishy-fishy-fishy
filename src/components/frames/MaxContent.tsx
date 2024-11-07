import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const MaxContent = ({ children, className }: Props) => {
  return <div className={`mx-auto w-full max-w-[1440px] ${className}`}>{children}</div>;
};

export default MaxContent;

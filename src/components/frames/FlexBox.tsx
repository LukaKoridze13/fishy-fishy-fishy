import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode
}
const FlexBox = ({ className,children }: Props) => {
  return <div className={`flex items-center gap-4 ${className}`}>{children}</div>;
};

export default FlexBox;

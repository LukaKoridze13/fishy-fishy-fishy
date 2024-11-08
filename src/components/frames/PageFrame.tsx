import React from "react";
interface Props {
  children: React.ReactNode;
  className?: string;
}

const PageFrame = ({ children, className }: Props) => {
  return (
    <main className={`${className}`} >
      {children}
    </main>
  );
};

export default PageFrame;

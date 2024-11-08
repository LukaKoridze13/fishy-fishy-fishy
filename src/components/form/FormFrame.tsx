import React from "react";

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  className?: string;
  onSubmit: any;
}

const FormFrame = ({ children, className, onSubmit }: Props) => {
  return (
    <form onSubmit={onSubmit} className={`flex flex-col gap-6 ${className}`}>
      {children}
    </form>
  );
};

export default FormFrame;

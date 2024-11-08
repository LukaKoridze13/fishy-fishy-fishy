import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error: string | undefined;
}

const TextInput = ({ ...props }: Props) => {
  return (
    <div className="h-[48px]">
      <input className="bg-white w-[320px] bg-opacity-10 rounded-md p-2 focus:outline-none" {...props} />
      {props.error && <p className="text-red-500 mt-[2px] text-sm">{props.error}</p>}
    </div>
  );
};

export default TextInput;

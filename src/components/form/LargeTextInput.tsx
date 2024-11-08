import React from "react";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error: string | undefined;
}

const LargeTextInput = ({ ...props }: Props) => {
  return (
    <div className="h-[150px]">
      <textarea rows={6} className="bg-white w-[320px] resize-none bg-opacity-10 rounded-md p-2 focus:outline-none" {...props}></textarea>
      {props.error && <p className="text-red-500 mt-[2px] text-sm">{props.error}</p>}
    </div>
  );
};

export default LargeTextInput;

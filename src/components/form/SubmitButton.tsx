import React from "react";

interface Props {
  text: string;
}

const SubmitButton = ({ text }: Props) => {
  return <button className="bg-lightBlue w-[320px] py-2 rounded-md">{text}</button>;
};

export default SubmitButton;

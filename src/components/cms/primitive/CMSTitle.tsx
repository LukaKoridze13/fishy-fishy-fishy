import React from "react";

interface Props {
  text: string;
}

const CMSTitle = ({ text }: Props) => {
  return <h1 className="font-semibold text-lg mb-6">{text}</h1>;
};

export default CMSTitle;

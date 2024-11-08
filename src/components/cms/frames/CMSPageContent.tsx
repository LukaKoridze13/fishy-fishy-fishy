import React from "react";

interface Props {
  children: React.ReactNode;
}

const CMSPageContent = ({ children }: Props) => {
  return <section className="p-4 bg-darkBlue left-[332px] fixed top-[86px] rounded-lg w-[calc(100%-348px)]">{children}</section>;
};

export default CMSPageContent;

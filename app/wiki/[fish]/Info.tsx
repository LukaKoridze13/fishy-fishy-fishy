import React from "react";
import { IconType } from "react-icons";
import { Tooltip } from "@nextui-org/tooltip";

interface Props {
  icon: IconType;
  text: any;
  tooltip: string;
}

const Info = ({ icon, text, tooltip }: Props) => {
  const Icon = icon;
  return (
    <Tooltip showArrow color="success" placement="right-end" content={tooltip}>
      <div className="flex w-fit text-medium items-center cursor-pointer gap-2">
        <Icon size={20}/>
        <span>{text}</span>
      </div>
    </Tooltip>
  );
};

export default Info;

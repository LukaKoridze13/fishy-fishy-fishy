import FlexBox from "@/components/frames/FlexBox";
import HeaderFrame from "@/components/frames/HeaderFrame";
import MaxContent from "@/components/frames/MaxContent";
import Logo from "@/components/primitive/Logo";
import React from "react";
import CMSUser from "../primitive/CMSUser";
import SwitchLanguage from "@/components/i18n/SwitchLanguage";

const CMSHeader = () => {
  return (
    <HeaderFrame className="fixed z-10 h-[70px]">
      <MaxContent>
        <FlexBox className="justify-between">
          <Logo />
          <FlexBox>
            <CMSUser />
            <SwitchLanguage className="w-[20px]" />
          </FlexBox>
        </FlexBox>
      </MaxContent>
    </HeaderFrame>
  );
};

export default CMSHeader;

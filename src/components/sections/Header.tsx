import React from "react";
import Logo from "../primitive/Logo";
import MaxContent from "../frames/MaxContent";
import Search from "../form/Search";
import SignIn from "../primitive/SignIn";
import Facebook from "../primitive/Facebook";
import Cart from "../primitive/Cart";
import FlexBox from "../frames/FlexBox";
import Menu from "../primitive/Menu";
import HeaderFrame from "../frames/HeaderFrame";

const Header = () => {
  return (
    <HeaderFrame>
      <MaxContent className="flex items-center justify-between">
        <Logo />
        <FlexBox>
          <Search />
          <SignIn />
          <Facebook />
          <Cart />
          <Menu />
        </FlexBox>
      </MaxContent>
    </HeaderFrame>
  );
};

export default Header;

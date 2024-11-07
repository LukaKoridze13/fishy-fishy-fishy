import React from "react";
import Logo from "../primitive/Logo";
import MaxContent from "../frames/MaxContent";
import Search from "../form/Search";
import SignIn from "../primitive/SignIn";
import Facebook from "../primitive/Facebook";
import Cart from "../primitive/Cart";
import FlexBox from "../frames/FlexBox";
import Menu from "../primitive/Menu";

const Header = () => {
  return (
    <header className="bg-blue bg-opacity-10 w-full px-16 py-6">
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
    </header>
  );
};

export default Header;

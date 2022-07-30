import React, { FC, useState } from "react";
import HeaderNavTabs from "./headerNavTabs.component";
import HeaderNavBurger from "./headerNavBurger.component";
import { Div } from "../../../shared/atomicUI";

const HeaderNav: FC = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  debugger;
  return (
    <>
      <div className="inline-block">
        <HeaderNavTabs isOpen={isMenuOpen} />
      </div>
      <div className="inline-block float-right p-2">
        <HeaderNavBurger isOpen={isMenuOpen} handleToggle={handleMenuToggle} />
      </div>
    </>
  );
};

export default HeaderNav;

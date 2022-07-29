import React, { useState } from "react";
import HeaderNavTabs from "./headerNavTabs.component";
import HeaderNavBurger from "./headerNavBurger.component";
import { Div } from "../../../shared/atomicUI";
// import styles from "./header.module.scss";
// import classNames from 'classnames';

const HeaderNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  debugger;
  return (
    <>
      <Div classes="inline-block" colorize>
        {/* <HeaderNavTabs /> */}
        <HeaderNavTabs isOpen={isMenuOpen} />
      </Div>
      {/* <Div classes={styles.header__nav__burger}> */}
      <Div classes="inline-block float-right p-2" colorize>
        <HeaderNavBurger isOpen={isMenuOpen} handleToggle={handleMenuToggle} />
      </Div>
    </>
  );
};

export default HeaderNav;

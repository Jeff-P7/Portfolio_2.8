import React, { FC } from "react";
import { arrayGen } from "../../../shared/global/utilities";
import styles from "../header.module.scss";

interface IProps {
  isOpen: boolean;
  handleToggle: any;
}

const HeaderNavBurger: FC<IProps> = ({
  isOpen = false,
  handleToggle,
}): JSX.Element => (
  <button
    type="button"
    className={`${styles.burger} ${isOpen && styles.burger_active}`}
    onClick={handleToggle}
  >
      <span />
      <span />
      <span />
    {/* {arrayGen(0, 2, 1).map((item: any) => (
      <span key={item} />
    ))} */}
  </button>
);

export default HeaderNavBurger;

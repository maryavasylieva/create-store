import React from "react";
import Media from "react-media";
import { MenuOutlined } from "@ant-design/icons";


import BurgerMenu from "../Navigation/BurgerMenu/BurgerMenu"

const Nav = () => {
  return (
    <div>
      <Media
        queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
        }}
      >
        {matches => (
          <>
            {matches.small && <MenuOutlined />}
            {matches.medium && <p>I am medium!</p>}
          </>
        )}
      </Media>
    </div>
  );
};

export default Nav;

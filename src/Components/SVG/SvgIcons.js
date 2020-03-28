import React from "react";
import styled, { css } from "styled-components";

import { ReactComponent as Loupe } from "../../assets/icon/003-loupe.svg";
import { ReactComponent as LikeHeart } from "../../assets/icon/002-love-and-romance.svg";
import { ReactComponent as Cart } from "../../assets/icon/001-shopping-cart.svg";

const SvgIcon = () => {
  return (
    <>
      <LoupeSvg />
      <LikeHeartSvg />
      <CartSvg />
    </>
  );
};

const sharedStyles = css`
  display: inline-block;
  width: 20px;
  height: 20px;
  /* margin-top: 20px; */
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    fill: #afacac;
    transition: all 300ms ease-in-out;
  }
`;

const LoupeSvg = styled(Loupe)`
  ${sharedStyles}
`;

const LikeHeartSvg = styled(LikeHeart)`
  ${sharedStyles}
`;

const CartSvg = styled(Cart)`
  ${sharedStyles}
`;

export default SvgIcon;

import React from "react";
import styled, { css } from "styled-components";

import { ReactComponent as Loupe } from "../../../assets/icon/003-loupe.svg";
import { ReactComponent as LikeHeart } from "../../../assets/icon/002-love-and-romance.svg";
import { ReactComponent as Cart } from "../../../assets/icon/001-shopping-cart.svg";

const SvgIcon = () => {
  return (
    <>
      <LoupeSvg />
      <LikeHeartSvg />
      <CartSvg />
    </>
  );
};

const stylesSvg = css`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    fill: ${({ theme }) => theme.colors.softGrey};
    transition: all 300ms ease-in-out;
  }
`;

const LoupeSvg = styled(Loupe)`
  ${stylesSvg}
`;

const LikeHeartSvg = styled(LikeHeart)`
  ${stylesSvg}
`;

const CartSvg = styled(Cart)`
  ${stylesSvg}
`;

export default SvgIcon;

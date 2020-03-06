import React from "react";
import styled from 'styled-components';



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

const LoupeSvg = styled(Loupe)`
  display: inline-block;
  width: 20px;
  height: 20px;
  /* margin-top: 20px; */
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    fill: blue;
    transition: all 300ms ease-in-out;
  }
`;

const LikeHeartSvg = styled(LikeHeart)`
  display: inline-block;
  width: 20px;
  height: 20px;
  /* margin-top: 20px; */
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    fill: blue;
    transition: all 300ms ease-in-out;
  }
`;

const CartSvg = styled(Cart)`
  display: inline-block;
  width: 20px;
  height: 20px;
  /* margin-top: 20px; */
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    fill: blue;
    transition: all 300ms ease-in-out;
  }
`;

export default SvgIcon;

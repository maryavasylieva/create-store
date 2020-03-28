/**@jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { ReactComponent as LeftArrow } from "../../assets/icon/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../assets/icon/right-arrow.svg";

const Arrow = ({ direction, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      css={css`
        display: flex;
        position: absolute;
        top: 50%;
        ${direction === "right" ? `right: 15px` : `left: 15px`};
        height: 30px;
        width: 30px;
        fill: #edeaea;
        justify-content: center;
        /* background: white; */
        border-radius: 50%;
        cursor: pointer;
        align-items: center;
        transition: transform ease-in 0.1s;
        &:hover {
          transform: scale(1.1);
        }
        img {
          transform: translateX(${direction === "left" ? "-2" : "2"}px);
          &:focus {
            outline: 0;
          }
        }
      `}
    >
      {direction === "right" ? <RightArrow /> : <LeftArrow />}
    </div>
  );
};

export default Arrow;

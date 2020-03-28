import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Mail } from "../../assets/icon/navHeaderIcon/001-mail.svg";
import { ReactComponent as Phone } from "../../assets/icon/navHeaderIcon/contact.svg";
import { ReactComponent as Enter } from "../../assets/icon/navHeaderIcon/doorway.svg";
// import { ReactComponent as Exit } from "../../assets/icon/navHeaderIcon/emergency-exit.svg";
import { ReactComponent as Card } from "../../assets/icon/navHeaderIcon/credit-card.svg";

const IconNavHeader = () => {
  return (
    <>
      <HeadContainer>
        <HeadLeft>
          <Link to="/">
            <IconPhone />
          </Link>
          {/* TODO: Functional: при нажатии на link, открывается форма для отправки сообщения */}
          <Link to="/">
            <IconMail />
          </Link>
        </HeadLeft>

        <HeadRight>
          <Link to="/personalCard">
            <IconCard />
          </Link>
          <Link to="/auth">
            <IconEnter />
          </Link>
        </HeadRight>
      </HeadContainer>
    </>
  );
};

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #edeaea;
  margin-bottom: 10px;
  width: 100%;
  /* TODO: set hardcoded color to the variable */
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const HeadRight = styled.div`
  padding: 10px 0px;
`;

const HeadLeft = styled.div`
  padding: 10px 0px;
`;

const styleSvg = css`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  &:hover {
    fill: #afacac;
    transition: all 300ms ease-in-out;
  }
`;

const IconCard = styled(Card)`
  ${styleSvg}
`;
const IconEnter = styled(Enter)`
  ${styleSvg}
`;
// const IconExit = styled(Exit)`
//   display: inline-block;
//   width: 20px;
//   height: 20px;
// `;

const IconPhone = styled(Phone)`
  ${styleSvg}
`;

const IconMail = styled(Mail)`
  ${styleSvg}
`;

export default IconNavHeader;

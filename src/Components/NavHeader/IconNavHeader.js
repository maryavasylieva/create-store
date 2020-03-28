import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Mail } from "../../assets/icon/navHeaderIcon/001-mail.svg";
import { ReactComponent as Phone } from "../../assets/icon/navHeaderIcon/contact.svg";
import { ReactComponent as Enter } from "../../assets/icon/navHeaderIcon/doorway.svg";
import { ReactComponent as Exit } from "../../assets/icon/navHeaderIcon/emergency-exit.svg";
import { ReactComponent as Card } from "../../assets/icon/navHeaderIcon/credit-card.svg";

const IconNavHeader = () => {
  return (
    <>
      <HeadContainer>
        <HeadLeft>
          <HeadText to="/">
            <IconPhone />
          </HeadText>
          {/* TODO: Functional: при нажатии на link, открывается форма для отправки сообщения */}
          <HeadText to="/">
            <IconMail />
          </HeadText>
        </HeadLeft>

        <HeadRight>
          <HeadText to="/personalCard">
            <IconCard />
          </HeadText>
          <HeadText to="/auth">
            <IconEnter />
          </HeadText>
        </HeadRight>
      </HeadContainer>
    </>
  );
};

const HeadContainer = styled.div`
  /* display: none; */
  display: flex;
  justify-content: space-around;
  background-color: #edeaea;
  margin-bottom: 10px;
  width: 100%;
  /* TODO: set hardcoded color to the variable */
`;

const HeadRight = styled.div`
  padding: 10px 0px;
`;

const HeadLeft = styled.div`
  padding: 10px 0px;
`;

const HeadText = styled(Link)`
  @media screen and (min-width: 768px) {
    display: none;
    /* display: inline-block; */
    color: #c1bdbd;
    text-transform: uppercase;
    font-size: 11px;
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

const IconCard = styled(Card)`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
const IconEnter = styled(Enter)`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
const IconExit = styled(Exit)`
  display: inline-block;
  width: 20px;
  height: 20px;
`;

const IconPhone = styled(Phone)`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const IconMail = styled(Mail)`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export default IconNavHeader;

import React from "react";
import styled from "styled-components";
// import {Container, Row, Col} from 'reactstrap'

import css from "./Advantages.module.css";

const Advantages = () => {
  return (
  <ul className={css.section}>
      <li className={css.list}>
        <div className={css.delivery}>
          <SubTitle>Доставка по всей Украине и миру</SubTitle>
          <MainText>
            Вы можете посмотреть возможные способы и стоимость доставки в вашем
            городе или в вашей стране
          </MainText>
        </div>
      </li>
      <li className={css.list}>
        <div className={css.avaliability}>
          <SubTitle>Уточнить наличие</SubTitle>
          <MainText>
            На нашем сайте вы всегда можете посмотреть наличие товара в
            магазинах
          </MainText>
        </div>
      </li>
      <li className={css.list}>
        <div className={css.product}>
          <SubTitle>Сообщить о поступлении</SubTitle>
          <MainText>
            Если нужного товара временно нет в наличии, вы можете воспользовать
            функцией оповещения
          </MainText>
        </div>
      </li>
      <li className={css.list}>
        <div className={css.provider}>
          <SubTitle>Юридическим лицам</SubTitle>
          <MainText>Мы зарегистрированы на портале поставщиков</MainText>
        </div>
      </li>
    </ul>
  );
};

const SubTitle = styled.h4`
  font-size: 15px;
  font-weight: 400;
  text-transform: uppercase;
  padding-bottom: 10px;
  color: ${({theme}) => theme.colors.SubTitle};
`;

const MainText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: ${({theme}) => theme.colors.mainText};
`;

export default Advantages;

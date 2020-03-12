import React from "react";
import styled from "styled-components";

import css from "./HomePage.module.css";

const Advantages = () => {
  return (
    <ul className={css.section}>
      <li className = {css.list}>
          <div  className={css.delivery}>
        <SubTitle>Доставка по всей Украине и миру</SubTitle>
        <MainText>
          Вы можете посмотреть возможные способы и стоимость доставки в вашем
          городе или в вашей стране
        </MainText>
        </div>
      </li>
      <li className = {css.list}>
          <div className={css.avaliability}>
        <SubTitle>Уточнить наличие</SubTitle>
        <MainText>
          На нашем сайте вы всегда можете посмотреть нличие товара в магазинах
        </MainText>
        </div>
      </li>
      <li className = {css.list}>
          <div className={css.product}>
        <SubTitle>Сообщить о поступлении</SubTitle>
        <MainText>
          Если нужного товара временно нет в наличии, вы можете воспользовать
          функцией оповещения
        </MainText>
        </div>
      </li>
      <li className = {css.list}>
          <div className={css.provider}>
        <SubTitle>Юридическим лицам</SubTitle>
        <MainText>Мы зарегестрированы на портале поставщиков</MainText>
        </div>
      </li>
    </ul>
  );
};

// const Section = styled.section`
//   position: relative;
//   @media screen and (min-width: 768px) {
//     padding-top: 30px;
//     width: 100%;
//     margin: 0 auto;
//     display: flex;
//     flex-wrap: wrap;
//     align-content: center;
//     justify-content: space-evenly;
//   }
// `;

const SubTitle = styled.h4`
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  font-weight: 400;
  text-transform: uppercase;
  padding-bottom: 10px;
  color: #333333;
`;

const MainText = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #999999;
`;



export default Advantages;

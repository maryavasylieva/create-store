import React from "react";
import styled from "styled-components";

import css from "./HomePage.module.css";

const Advantages = () => {
  return (
    <Section className={css.section}>
      <div className={css.delivery}>
        <SubTitle>Доставка по всей Украине и миру</SubTitle>
        <MainText>
          Вы можете посмотреть возможные способы и стоимость доставки в вашем
          городе или в вашей стране
        </MainText>
      </div>
      <Availability>
        <SubTitle>Уточнить наличие</SubTitle>
        <MainText>
          На нашем сайте вы всегда можете посмотреть нличие товара в магазинах
        </MainText>
      </Availability>
      <Product>
        <SubTitle>Сообщить о поступлении</SubTitle>
        <MainText>
          Если нужного товара временно нет в наличии, вы можете воспользовать
          функцией оповещения
        </MainText>
      </Product>
      <Provider>
        <SubTitle>Юридическим лицам</SubTitle>
        <MainText>Мы зарегестрированы на портале поставщиков</MainText>
      </Provider>
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  @media screen and (min-width: 768px) {
    padding-top: 30px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-evenly;
  }
`;

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

const Delivery = styled.div`
  width: 210px;
  &:before {
    display: block;
    width: 32px;
    height: 31px;
    content: "";
    background-image: url("../../assets/icon/truck.svg");
    position: absolute;
    left: 0px;
    right: 50%;
  }
`;

const Availability = styled.div`
  width: 210px;
`;

const Product = styled.div`
  width: 210px;
`;

const Provider = styled.div`
  width: 210px;
`;
export default Advantages;

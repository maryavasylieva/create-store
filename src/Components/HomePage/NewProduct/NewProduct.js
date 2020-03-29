import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as Like } from "../../../assets/icon/001-heart.svg";
import { ReactComponent as Cart } from "../../../assets/icon/001-shopping-cart.svg";

const NewProduct = ({ newProduct }) => {

  const textSlice = title => {
    let sliceText;
    sliceText = title;

    if (title.length > 40) {
      sliceText =
        title
          .split(",")
          .join("")
          .slice(0, 39) + "...";
    }

    return sliceText;
  };

  return (
    <Container>
      <HeadlineSection>Новинки</HeadlineSection>
      <CardList>
        {newProduct.map(prod => (
          <CardItem key={prod.id}>
            <LinkItem to="/">
              <ImgWrap>
                <CardImage src={prod.image} alt="new" />
              </ImgWrap>
              <CardDescr>{textSlice(prod.title)}</CardDescr>
            </LinkItem>
            <CardBrandName>{prod.brandName}</CardBrandName>
            <CardPrice>{prod.price}</CardPrice>
            <IconWrap>
              <IconLike />
              <CartButton>
                <IconCart />В корзину
              </CartButton>
            </IconWrap>
          </CardItem>
        ))}
      </CardList>
    </Container>
  );
};

const Container = styled.div`
  /* margin-left: 10px; */
`;

const CartButton = styled.button`
  display: block;
  width: 105px;
  height: 35px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  background-color: ${({theme}) => theme.colors.buttonBackground};
  border: none;
  &:hover{
    background-color: ${({theme}) => theme.colors.hoverButton};
    transition: all 500ms ease-in-out;
  }
`;


const IconCart = styled(Cart)`
  width: 12px;
  height: 12px;
  margin-right: 5px;
`;

// const IconLike = styled(Like)`
//   display: inline-block;
//   width: 20px;
//   height: 20px;
//   margin-right: 10px;
//   border-left: 1px solid #dedede

//   /* &::after {
//     content: "";
//     border: 1px solid #000000;
//     margin-left: 20px;
//     background-color: #6b7d83;
//   } */

// `;

const IconLike = styled(Like)`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 8px 10px 0 0px;
`;

const IconWrap = styled.div`
  display: flex;
`;

const HeadlineSection = styled.h2`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.montserrat};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.lightGrey};
  padding-left: 30px;
`;

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-evenly;
  padding: 0;
  list-style-type: none;
`;

const CardItem = styled.li`
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  width: 193px;
  height: 400px;
  padding: 7px 7px 0px;
  background-color: ${({ theme }) => theme.colors.mainColor};
  margin: 20px 8px 9px 8px;
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`;

const ImgWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 10px;
`;

const CardImage = styled.img`
  display: inline-block;
  max-width: 100%;
  height: 190px;
  border: 2px solid ${({ theme }) => theme.colors.white};
`;

const CardDescr = styled.h3`
  font-weight: 600;
  line-height: 1.2;
  height: 46px;
  margin: 0 0 5px;
  padding: 0 5px;
  font-size: 13px;
  text-align: center;
`;

const CardBrandName = styled.p`
  text-align: center;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.montserrat};
  color: ${({ theme }) => theme.colors.lightGrey};
`;

const CardPrice = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.notoSans}, sans-serif;
`;

export default NewProduct;

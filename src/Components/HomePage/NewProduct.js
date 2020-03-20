import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";

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
              <CardImage src={prod.image} alt="new" />
              <CardDescr>{textSlice(prod.title)}</CardDescr>
            </LinkItem>
            <CardBrandName>{prod.brandName}</CardBrandName>
            <CardPrice>{prod.price}</CardPrice>
            {/* <FavoriteBorderOutlinedIcon /> */}
            {/* <AddShoppingCartOutlinedIcon /> */}
          </CardItem>
        ))}
      </CardList>
    </Container>
  );
};

const Container = styled.div`
  /* margin-left: 10px; */

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
  background-color: #edeaea;
  margin: 20px 8px 9px 8px;
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const CardImage = styled.img`
  display: inline-block;
  background-color: white;
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
  background-color: white;

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

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NewProduct = ({ newProduct }) => {
  return (
    <>
      <h2>Новинки</h2>
      <CardList>
        {newProduct.map(prod => (
          <CardItem key={prod.id}>
            <LinkItem to="/">
              <CardImage src={prod.image} alt="pet" />
              <CardDescr>{prod.title}</CardDescr>
            </LinkItem>
            <p>{prod.brandName}</p>
            <p>{prod.price}</p>
          </CardItem>
        ))}
      </CardList>
    </>
  );
};

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
  border-radius: 2px;
  width: 193px;
  height: 330px;
  padding: 20px;
  background-color: #edeaea;
  margin-bottom: 30px;
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const CardImage = styled.img`
  display: inline-block;
  /* width: auto; */
  max-width: 100%;
  /* height: 100%; */
  height: auto;
  margin-bottom: 10px;
  background-color: white;
`;

const CardDescr = styled.h3`
  font-weight: bold;
  /* overflow: hidden; */
  line-height: 1.2;
  height: 46px;
  margin: 0 0 5px;
  padding: 0 5px;

  font-size: 13px;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow-y: hidden;
`;

export default NewProduct;

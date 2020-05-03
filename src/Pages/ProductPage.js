import React from "react";
import styled from "styled-components";

import ProductItem from "../Components/HomePage/ProductItem/ProductItem";
import product from "../assets/newProduct.json"

const getProdObj = (arr, id) => arr.find((el) => el.id === id);

const ProductPage = ({ match, history }) => {
  const { id } = match.params;
  return (
    <Container>
      <Button

        type="button"
        onClick={() => history.push("/")}
      >
        Return
      </Button>
      <ProductItem {...getProdObj(product, id)} />
    </Container>
  );
};

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;


const Button = styled.button`
  display: block;
  width: 140px;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.buttonBackground};
  border: none;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverButton};
    transition: all 500ms ease-in-out;
  }

`
export default ProductPage;

import React, { useState } from "react";
import styled from "styled-components";

const SearchForm = () => {
  const [value, setState] = useState('');

  const handleSubmit = e => {
      console.log("Search form:" + value)
    e.preventDefault();
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit}>
        <Input
          type="search"
          value={value}
          name="search"
          placeholder="Поиск..."
          onChange={e => setState(e.target.value)}
        />
      </Form>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  margin-right: 10px;
`;

const Form = styled.form`
  width: 150px;
  position: absolute;
  right: 50%;
  top: -15px;
  /* max-width: 200px; */
  /* margin-left: auto; */
  /* margin-right: auto; */
`;

const Input = styled.input`
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  border: #f0fff0;
  border-radius: 20px;
  display: inline-block;
  width: 100%;
  padding: 6px 8px 6px 8px;
  font: inherit;
  font-size: 10px;
  font-style: italic;
  outline: none;
  margin-right: 10px;
`;

export default SearchForm;

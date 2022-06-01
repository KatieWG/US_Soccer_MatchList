import React from "react";
import styled from "styled-components";

/* STYLED COMPONENTS */
const StyledForm = styled.form`
margin: 35px 15px 30px 0px;
border-radius: 3px;
float: right;
`;

const StyledInput = styled.input`
width: 200px;
`;

const Search = ({ onSearchKeystroke }) => {
  return (
    <div>
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
      }}>
      <label>
        <StyledInput onChange={(e) => {
        onSearchKeystroke(e)
        }}
          type="text"
          size="sm"
          placeholder="Search"
        />
      </label>
      <button className="search-button">
        <i className="fa fa-search"></i>
      </button>
    </StyledForm>
    </div>
  )
}

export default Search;
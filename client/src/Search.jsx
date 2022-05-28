import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
float: right;
margin: 20px 15px 20px 15px;

`

const StyledInput = styled.input`
width: 200px;
`

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
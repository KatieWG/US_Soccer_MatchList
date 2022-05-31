import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
float: right;
margin: 35px 15px 30px 15px;
border-radius: 3px;
`

const StyledInput = styled.input`
width: 200px;
`

const StyledIcon = styled.i`
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
        <StyledIcon className="fa fa-search"></StyledIcon>
      </button>
    </StyledForm>
    </div>
  )
}

export default Search;
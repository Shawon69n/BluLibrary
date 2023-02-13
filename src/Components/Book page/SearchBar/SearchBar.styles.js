import styled from "styled-components";

export const SearchContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
 .serach-input[type="text"] {
    width: 40%;
    padding: 15px;
    border-radius: 5px 0 0 5px;
    border: 1px solid #00ADEF;
    outline: none;
  }
  
  .input-button {
    padding: 15px;
    border-radius: 0 5px 5px 0;
    border: 1px solid #00ADEF;
    background-color: #00ADEF;
    cursor: pointer;
    transition: background-color 0.3s ease;
    color: white;
  }
  
  .input-button:hover{
    background-color: #8dabc4;
    border: 1px solid #8dabc4;
  }
`;
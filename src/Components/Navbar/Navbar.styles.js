import styled from "styled-components";

export const Nav = styled.nav`
    background-color: #00ADEF;
    color: #fff;
    padding: 5px;
    position: relative;
    z-index: 2;
     ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
  }

  div{
    display: flex;
    margin-left: 100px;
    margin-right: 100px;
  }

   a {
    color: #fff;
    text-align: center;
    font-weight: 600;
    padding: 14px 16px;
    text-decoration: none;
    display: block;
  }
  a:hover {
    background-color: rgb(138, 183, 241);
  }
  
img{
   width: 50px;
}

`;
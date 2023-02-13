import styled,{createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
    };

    .card-img {
    width: 80%;
    height: 50%;
    margin-left: 20px;
    border-radius: 5px;
  }
  
  
`

export const Container = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    height:fit-content; 
`;

export const Button = styled.button`
    background-color: ${({bg}) => bg ? bg : "#00ADEF"}; 
    color: ${({color}) => color ? color : "white"};
    padding: ${({p}) => p ? p : "10px 20px"};
    border: none;
    margin-left: ${({ml}) => ml ? ml: ""};
    margin-right: ${({mr}) => mr ? mr: ""};
    margin-top: ${({mt}) => mt ? mt : ""}; 
    margin-bottom: ${({mb}) => mb ? mb : ""};
    width: ${({w}) => w ? w : "auto"};
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    :hover{
        background-color: rgb(84, 117, 180); 
    }
` ;

export const Title = styled.h3`
   text-align: ${({align}) => align ? align: ""};
   margin-top: ${({mt}) => mt ? mt : "0px"};
   font-size: ${({fontSize}) => fontSize ? fontSize : ""};

`;



export default GlobalStyles;
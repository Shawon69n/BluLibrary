import styled from "styled-components";

export const AuthContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height:fit-content; 
    margin-bottom: 80px;
    margin-top: 150px;
    place-items: center;
`;

export const FormContainer = styled.div`
    width: ${({w}) => w ? w : "auto"};
    height: ${({h}) => h ? h : "auto"};
    border-radius: 5px;
    margin: ${({m}) => m? m : ""};
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  .contents{
   margin-top: 50px;
}
.lgn-now{
    font-size: small;
    text-decoration: none;
    margin-top: 10px;
}
`;

export const AuthForm = styled.form`
    display: grid;
    
    height: ${({h}) => h ? h : "auto"};
    padding: ${({p}) => p ? p : "auto"};
    margin-top: ${({mt}) => mt ? mt : ""}; 
    margin-left: ${({ml}) => ml ? ml : ""}; 
    width: ${({w}) => w ? w : "auto"};
   

`;
    export const AuthContents = styled.div`
        width: 80%;
        height: 80%;
        margin-top: ${({mt}) => mt ? mt : ""}; 
        margin-left: ${({ml}) => ml ? ml : ""}; 
    `;

export const Label = styled.label`
    display: block;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
    
`;

export const Input = styled.input`
    display: block;
    width: ${({w}) => w ? w : "auto"};
    height: ${({h}) => h ? h : "auto"};
    border-radius: 3px;
    border: 1px solid  #acd9ff; ;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
`;



// margin-left: ${({ml}) => ml ? ml: ""};
// margin-right: ${({mr}) => mr ? mr: ""};
// margin-top: ${({mt}) => mt ? mt : ""}; 
// margin-bottom: ${({mb}) => mb ? mb : ""};
// width: ${({w}) => w ? w : "auto"};
// border-radius: 5px;
// box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
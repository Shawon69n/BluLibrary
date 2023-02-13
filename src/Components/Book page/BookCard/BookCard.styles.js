import styled  from "styled-components";

export const Card = styled.div`
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 200px;
    height: 350px;
    background-color: #f1f1f1;
    padding: 20px;
`;

export const CardImg = styled.img`
    width: 80%;
    height: 50%;
    margin-left: 20px;
    border-radius: 5px;
`;

export const CardContent = styled.div`
    margin-top:20px;
`;

export const LayoutContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 50px;
    margin-top: 50px;
    margin-bottom: 20px;
`;

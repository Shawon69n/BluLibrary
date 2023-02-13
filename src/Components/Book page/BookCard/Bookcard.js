import React, { useEffect, useState } from 'react';
import { Button, Container, Title } from '../../../GlobalStyles';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

import { Card, CardContent, LayoutContainer } from './BookCard.styles';
const Bookcard = () => {
    const [book,setBook] = useState([]);

    useEffect(()=>{
        fetch('book.json')           
        .then(response => response.json())
        .then(data => setBook(data));
    },[])

    return (
        <Container>
            
           <SearchBar></SearchBar>

            <LayoutContainer className='grid-container '>
                {book.map(b => 
                <Card >
                    <img className='card-img' src={b.name} alt="" />
                    <CardContent class="card-content">
                        <Title mb='10px'>Title</Title>
                        <p>Some card content here Lorem ipsum dolor sit amet consectetur adipisicing elit.... <Link to=''>seemore</Link></p>
                        <Button mt='20px' ml='130px'>Read</Button>
                    </CardContent>
                </Card>)}
            </LayoutContainer>

        </Container>
    );
};

export default Bookcard;
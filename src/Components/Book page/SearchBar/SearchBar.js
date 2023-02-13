import React from 'react';
import { SearchContainer } from './SearchBar.styles';

const SearchBar = () => {
    return (
        <SearchContainer className='search-container'>
                <input className='serach-input' type="text" placeholder="Search you book..." />
                <button className='input-button '>Find</button>
            </SearchContainer>
    );
};

export default SearchBar;
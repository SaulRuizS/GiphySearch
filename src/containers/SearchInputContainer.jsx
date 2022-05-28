import React from 'react';
import SearchInput from '@components/SearchInput';
import SearchButton from '@components/SearchButton';

const SearchInputContainer = () => {
    return (
        <div className='row mt-4'>
            <SearchInput />
            <SearchButton />
        </div>
    );
};

export default SearchInputContainer;
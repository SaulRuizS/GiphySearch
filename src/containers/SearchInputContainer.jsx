import React from 'react';
import SearchInput from '@components/SearchInput';
import SearchButton from '@components/SearchButton';

const SearchInputContainer = () => {
    return (
        // <form>
        //     <div className='row mt-4'>
        //         <SearchInput />
        //         <SearchButton />
        //     </div>
        // </form>
        <div className='row mt-4'>
            <SearchInput />
            <SearchButton />
        </div>
    );
};

export default SearchInputContainer;
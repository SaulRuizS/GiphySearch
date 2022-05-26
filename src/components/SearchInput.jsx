import React from 'react';

const SearchInput = () => {
    return (
        <div className='col-8'>
            <input 
                type="text"
                placeholder='Search gifs'
                className='form-control w-100'
            />
        </div>
    );
};

export default SearchInput;
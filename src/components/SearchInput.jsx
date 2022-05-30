import React, { useContext } from 'react';
import AppContext from '@context/AppContext';

const SearchInput = () => {

    const {
        setInputText,
    } = useContext(AppContext)

    return (
        <div className='col-8'>
            <input
                type="text"
                placeholder='Enter a topic'
                className='form-control w-100'
                onChange={(event) => {
                    setInputText(event.target.value)
                    // console.log(event.target.value)
                }}
            />
        </div>
    );
};

export default SearchInput;
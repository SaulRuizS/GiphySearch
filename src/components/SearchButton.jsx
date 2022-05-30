import React, { useContext, useState, useEffect } from 'react';
import AppContext from '@context/AppContext';

const SearchButton = () => {

    const {
        inputText,
        queryText,
        setQueryText,
    } = useContext(AppContext);

    return (
        <div className='col-4'>
            <button
                className='btn btn-info w-100 h-100'
                onClick={() => {
                    setQueryText(inputText)
                    console.log(queryText);
                }}
            >Search</button>
        </div>
    );
};

export default SearchButton;
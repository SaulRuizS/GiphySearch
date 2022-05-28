import React from 'react';
import useAPIcall from '@hooks/useAPIcall';

const SearchButton = () => {
    return (
        <div className='col-4'>
            <button
                className='btn btn-info w-100 h-100'
                onClick={useAPIcall}
            >Search</button>
        </div>
    );
};

export default SearchButton;
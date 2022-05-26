import React from 'react';
import SearchInputContainer from './SearchInputContainer';

const Header = () => {
    return (
        <div className="container-sm bg-dark p-4 position-fixed">
            <div className='row'>
                <div className='col'>
                    <h1 className='h1 text-white'>Giphy Search</h1>
                </div>
            </div>
            <SearchInputContainer />
        </div>
    );
};

export default Header;
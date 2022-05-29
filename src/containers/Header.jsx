import React from 'react';
import SearchInputContainer from './SearchInputContainer';
import giphyLogo from '@public/assets/Small/Dark Backgrounds/Poweredby_100px-Black_VertLogo.png'

const Header = () => {
    return (
        <div className="container-xl bg-dark p-4 position-fixed header">
            <div className='row'>
                <div className='col-8'>
                    <h1 className='h1 text-white'>Giphy Search</h1>
                </div>
                <div className='col-4'>
                    <img
                        src={giphyLogo}
                        alt=""
                        className='giphy-logo'    
                    />
                </div>
            </div>
            <SearchInputContainer />
        </div>
    );
};

export default Header;
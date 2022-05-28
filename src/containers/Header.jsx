import React from 'react';
import SearchInputContainer from './SearchInputContainer';
import '@styles/HeaderStyles.css';
import giphyLogo from '@public/assets/Small/Dark Backgrounds/Poweredby_100px-Black_VertLogo.png'

const Header = () => {
    return (
        <div className="container-sm bg-dark p-4 position-fixed">
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
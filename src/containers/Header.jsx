import React from 'react';
import SearchInputContainer from './SearchInputContainer';
import giphyLogo from '../../public/assets/Large/Dark Backgrounds/Poweredby_640px-Black_VertLogo.png'

const Header = () => {
    return (
        <div className="container-fluid bg-dark p-4 position-fixed header">
            <div className='row'>
                <div className='col-8'>
                    <h1 className='h1 text-white'>Giphy Search</h1>
                </div>
                <div className='col-4'>
                    <a href="https://giphy.com/">
                        <img
                            src={giphyLogo}
                            alt="Giphy Logo"
                            className='giphy-logo'    
                        />
                    </a>
                </div>
            </div>
            <SearchInputContainer />
        </div>
    );
};

export default Header;
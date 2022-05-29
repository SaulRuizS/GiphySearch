import React, { useContext } from 'react';
import 'bootstrap';
import Header from './Header';
import GifsContainer from './GifsContainer';
import '@styles/GlobalStyles.css';

const App = () => {

    return (
        <>
            <Header />
            <GifsContainer />
        </>
    );
};

export default App;
import React from 'react';
import 'bootstrap';
import Header from './Header';
import GifsContainer from './GifsContainer';
import AppContext from '../context/AppContext';
import useGlobalProps from '../hooks/useGlobalProps';
import '@styles/GlobalStyles.css';

const App = () => {

    const globalProps = useGlobalProps();

    return (
        <>
            <AppContext.Provider value={globalProps}>
                <Header />
                <GifsContainer />
            </AppContext.Provider>
        </>
    );
};

export default App;
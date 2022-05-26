import React from 'react';
import 'bootstrap';
import SearchInput from '../components/SearchInput';
import SearchInputContainer from './SearchInputContainer';

const App = () => {
    return (
        <div>
            <SearchInput />
            <SearchInputContainer />
        </div>
    );
};

export default App;
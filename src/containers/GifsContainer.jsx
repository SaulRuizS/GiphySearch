import React, { useContext } from 'react';
import GifCard from '@components/GifCard';
import useAPIcall from '@hooks/useAPIcall';
import AppContext from '@context/AppContext'

const GifsContainer = () => {

    const {
        queryText,
    } = useContext(AppContext);

    const gifsData = useAPIcall();

    return (
        <div className='container-fluid vw-100 bg-dark gifs-container'>
            <div className='row'>
                {
                    gifsData.map(
                        gifData => (
                            <GifCard
                                gifUrl={gifData.images.downsized.url}
                                key={gifData.id}
                            />
                        )
                    )
                }
            </div>
        </div>
    );
};

export default GifsContainer;
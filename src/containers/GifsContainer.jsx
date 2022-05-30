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
        <div className='container-xl bg-dark gifs-container'>
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
    );
};

export default GifsContainer;
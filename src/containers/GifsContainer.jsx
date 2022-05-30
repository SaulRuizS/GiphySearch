import React, { useContext } from 'react';
import GifCard from '@components/GifCard';
import useAPIcall from '@hooks/useAPIcall';

const GifsContainer = () => {

    const gifsData = useAPIcall();

    return (
        <div className='container-xl bg-danger gifs-container'>
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
import React from 'react';
import GifCard from '@components/GifCard';
import useAPIcall from '@hooks/useAPIcall';

const apiOptions = {
    api_key: 'Mo3yNbRox7H6GMPwmaXouUnqVZFq2vAy',
    q: 'dog',
    limit: 50,
    offset: 0,
    rating: 'g',
    lang: 'en',
}

const gifURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiOptions.api_key}&q=${apiOptions.q}&limit=${apiOptions.limit}&offset=${apiOptions.offset}&rating=${apiOptions.rating}&lang=${apiOptions.lang}`

const GifsContainer = () => {

    const gifsData = useAPIcall(gifURL);

    return (
        <div className='container-sm bg-danger gifs-container'>
            {
                gifsData.map(
                    gifData => (
                        <GifCard
                            gifUrl={gifData.images.downsized.url}
                        />
                    )
                )
            }
        </div>
    );
};

export default GifsContainer;
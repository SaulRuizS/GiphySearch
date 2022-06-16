import React from 'react';
import CopyUrlButton from '@components/CopyUrlButton';

const GifCard = ({gifUrl}) => {

    return (
        <div className='col-10 col-sm-5 col-md-3 col-lg-2 m-4 p-0 justify-content-center gif-card'>
            <img
                src={gifUrl}
                alt="gif"
                className='img-fluid mx-auto d-block'
            />
            <CopyUrlButton
                gifUrl={gifUrl}
            />
        </div>
    );
};

export default GifCard;
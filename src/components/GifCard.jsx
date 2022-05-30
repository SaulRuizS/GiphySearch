import React from 'react';
import CopyUrlButton from '@components/CopyUrlButton';

const GifCard = ({gifUrl}) => {

    return (
        <div className='row w-auto'>
            <div className='col m-4 p-0 gif-card'>
                <img
                    src={gifUrl}
                    alt=""
                    className='img-fluid mx-auto d-block'
                />
                <CopyUrlButton
                    gifUrl={gifUrl}
                />
            </div>
        </div>
    );
};

export default GifCard;
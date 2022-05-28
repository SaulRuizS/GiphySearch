import React from 'react';
import useAPIcall from '@hooks/useAPIcall';

const randomGif = "https://media3.giphy.com/media/ghAbYUswkmXHq/giphy.gif?cid=0a58050849e6d7c57e12e264244b269accccb0b1f19ea408&rid=giphy.gif&ct=g"

// const gifData = useAPIcall();

const GifCard = () => {
    return (
        <div className='row w-auto'>
            <div className='col m-4 p-0 gif-card'>
                <img
                    src={randomGif}
                    alt=""
                    className='img-fluid rounded mx-auto d-block'
                />
                {/* <button onClick={useAPIcall}>get data</button> */}
            </div>
        </div>
    );
};

export default GifCard;
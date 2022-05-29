import React from 'react';

// const randomGif = "https://media3.giphy.com/media/ghAbYUswkmXHq/giphy.gif?cid=0a58050849e6d7c57e12e264244b269accccb0b1f19ea408&rid=giphy.gif&ct=g"

const GifCard = ({gifUrl}) => {

    return (
        <div className='row w-auto'>
            <div className='col m-4 p-0 gif-card'>
                <img
                    src={gifUrl}
                    alt=""
                    className='img-fluid rounded mx-auto d-block'
                />
                {/* <button onClick={() => console.log(gifsData)}>get data</button> */}
            </div>
        </div>
    );
};

export default GifCard;
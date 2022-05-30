import React from 'react';

const CopyUrlButton = ({gifUrl}) => {

    const copyUrl = async (url) => {
        // console.log(gifUrl);
        // await navigator.permissions.query({
        //     name: 'clipboard-write'
        // })
        // .then(
        //     result => {
        //         if(result.state === 'granted' || result.state === 'prompt') {
        //             navigator.clipboard.writeText(url)
        //             .then(
        //                 () => console.log(url),
        //                 () => console.log('something went wrong...')
        //             );
        //         }
        //         else {
        //             console.log('Premission denied');
        //         }
        //     }
        // )
        
        await navigator.clipboard.writeText(url)
        .then(
            () => console.log(url),
            () => console.log('something went wrong...')
        );
    }

    return (
        <button
            type='button'
            className='btn btn-info w-100 copy-url-button'
            onClick={() => copyUrl(gifUrl)}
        >Copy GIF</button>
    );
};

export default CopyUrlButton;
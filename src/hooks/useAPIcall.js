
const apiOptions = {
    api_key: 'Mo3yNbRox7H6GMPwmaXouUnqVZFq2vAy',
    q: 'dog',
    limit: 3,
    offset: 0,
    rating: 'g',
    lang: 'en',
}

const gifURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiOptions.api_key}&q=${apiOptions.q}&limit=${apiOptions.limit}&offset=${apiOptions.offset}&rating=${apiOptions.rating}&lang=${apiOptions.lang}`

const useAPIcall = () => {
    async function APIcall() {
        const call = await fetch(gifURL);
        const jsonResponse = await call.json();
        return jsonResponse;
    }
    console.log(APIcall());
}

export default useAPIcall;
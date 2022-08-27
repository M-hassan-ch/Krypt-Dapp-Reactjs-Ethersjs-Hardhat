

const useFetch = (keyword) => {
    const APIKEY = 'AEaPyLH3q5fT54YtvV4urlqvlwKlmdTv';

    const fetchGifs = async () => {
        
        try {
            let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keyword.split(" ").join("")}&limit=1`);
            const { data } = await response.json();
            let gifUrl = data[0]?.images?.downsized_medium.url;
            return gifUrl;
        } catch (error) {
            console.log(error);
            let gifUrl = "https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284";
            return gifUrl;
        }
    };
    
    return fetchGifs();
};

export default useFetch;
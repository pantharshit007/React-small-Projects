import { useEffect, useState } from 'react'
import axios from 'axios'

function useGif(tag) {
    const [gif, setGif] = useState('')
    const [loader, setLoader] = useState(false)

    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

    const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const customUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    async function fetchData() {
        setLoader(true);
        try {
          
          const { data } = await axios.get(tag ? customUrl : randomUrl);
          const gifUrl = data.data.images.downsized_large.url;

          setGif(gifUrl);

        } catch (error) {
          console.error('Error fetching random GIF:', error);
        }
        finally{
            setLoader(false);
        }
    }
    
    useEffect(()=>{
         fetchData();
    },[])

    return {gif, fetchData, loader}

}

export default useGif;


//this is a custom hook file useGif
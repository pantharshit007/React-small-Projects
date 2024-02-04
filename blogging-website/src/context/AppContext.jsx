import { createContext, useState } from "react";
import {baseURL} from "../URLapi.js"

//1. creating the context
export const AppContext = createContext();

export default function AppContextProvider({children}) {

    const [loading, setLoading] = useState(false);
    const [posts , setposts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);

    //2. requesting data from API 
    async function fetchData(page=1){
        setLoading(true);
        let URL = `${baseURL}?page=${page}`;
        // console.log("url: " + URL);
        try{
            const response = await fetch(URL);
            const data = await response.json();
            // console.log(data);

            setPage(data.page);
            setposts(data.posts);
            setTotalPage(data.totalPages);
        }catch(err){
            console.log('error fetching data: ', err.message);
            setPage(1);
            setposts([]);
            setTotalPage(null);
        }
        finally{
            setLoading(false);
        }
    }

    function pageChangeHandler(page){
        setPage(page);
        fetchData(page);
    }

    const value = {
        loading, setLoading,
        posts, setposts, 
        page, setPage,
        totalPage, setTotalPage,
        fetchData,
        pageChangeHandler 
    }

    //3 calling Context.Provider
    //here childern is app.jsx which is called in main.jsx
    return <AppContext.Provider value={value} >
                {children}  
            </AppContext.Provider>
}

// export default AppContextProvider();
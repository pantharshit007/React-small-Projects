import { createContext, useState } from "react";
import {baseURL} from "../URLapi.js"

//1. creating the context
export const AppContext = createContext();

export default function AppContextProvider({children}) {

    const [loading, setLoading] = useState(false);
    const [post , setPost] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);

    //2. requesting data from API 
    async function fetchData(page=1){
        setLoading(true);
        let URL = `${baseURL}?page=${page}`;
        try{
            const response = await fetch(URL);
            const data = response.json();
            console.log(data);

            setPage(data.page);
            setPost(data.posts);
            setTotalPage(data.totalPages);
        }catch(err){
            console.log('error fetching data: ', err.message);
            setPage(1);
            setPost([]);
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

    const values = {
        loading, setLoading,
        post, setPost, 
        page, setPage,
        totalPage, setTotalPage,
        fetchData,
        pageChangeHandler 
    }

    //3 calling Context.Provider
    //here childern is app.jsx which is called in main.jsx
    return <AppContext.Provider values={values} >
                {children}  
            </AppContext.Provider>
}

// export default AppContextProvider();
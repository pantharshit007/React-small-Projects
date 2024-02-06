import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header.jsx'
import { useNavigate, useLocation } from 'react-router-dom'
import { AppContext } from '../context/AppContext.jsx';
import { baseURL } from '../URLapi.js';
import Spinner from '../components/Spinner.jsx';
import Card from '../components/Card.jsx';

function BlogPage() {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const blogId = location.pathname.split('/').at(-1);  //.at(-1)
  const {setLoading, loading} = useContext(AppContext);
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  
  async function fetchRelatedBlogs() {
    setLoading(true);
    let URL = `${newBaseUrl}get-blog?blogId=${blogId}`;

    try{
      const res = await fetch(URL)
      const data = await res.json()
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);

    }
    catch(err){
      console.error('error while fetching blog: ',err.message);
      setBlog(null);
      setRelatedBlogs([]);

    }
    finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  },[location.pathname])

  return (
    <div>
      <Header/>

      <div className='mt-[5rem] '>
        <button className='border px-3 py-2 rounded-md'
        onClick={()=>navigation(-1)}>
          Back
        </button>
      </div>

      {
        loading ?
          <Spinner/> :

          blog ?
            (<div>
              <Card post={blog} />

              <h2 className='font-bold'> Related Blogs</h2>

              {
                relatedBlogs.map((blogRelated) => (
                 <Card post={blogRelated} key={blogRelated.id} />
                ))
              }
              
            </div>) : 
            (<p>No Blogs Available</p>)
      }

    </div>
  )
}

export default BlogPage
import {useContext, useEffect } from 'react'
import './App.css'
import {Routes, Route, useSearchParams, useLocation} from 'react-router-dom'
import Home from './pages/Home.jsx'
import BlogPage from './pages/BlogPage.jsx'
import TagPage from './pages/TagPage.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import { AppContext } from './context/AppContext.jsx'

function App() {

  const {fetchData} = useContext(AppContext)

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(()=>{
    const page = searchParams.get('page') ?? 1; // if not available then 1
    // if we were to find the tags at the end of URL then we will call fetchDate with page and tag
    if (location.pathname.includes('tags')){
      // console.log('tag')
      const tag = location.pathname.split('/').at(-1).replaceAll('-',' ');
      fetchData(Number(page), tag);
    }
    //if we were to find the category then we will call fetchData with category
    else if (location.pathname.includes('categories')){
      // console.log('category found');
      const category = location.pathname.split('/').at(-1).replaceAll('-',' ');
      fetchData(Number(page), null, category);
    }
    else{
      // console.log('blog');
      fetchData(Number(page));
    }
//we will re render whenever either a new tag/category is added to the URL path or a new page is loaded which can be checked by search query .?
},[location.pathname, location.search])

  return (
    <div >

      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/blog/:blogId' element= {<BlogPage/>}/>
        <Route path='/tags/:tag' element= {<TagPage/>}/>
        <Route path='/categories/:category' element= {<CategoryPage/>}/>
      </Routes>
      
    </div>
  )
}

export default App

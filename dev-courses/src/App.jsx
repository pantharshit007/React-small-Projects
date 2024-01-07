import { useState, useEffect } from 'react'
import {apiUrl, filterData} from './data.js';
import './App.css'
import Navbar from './components/Navbar.jsx';
import Filter from './components/Filter.jsx';
import Cards from './components/Cards.jsx';
import Loader from './components/Loader.jsx';
import { toast } from 'react-toastify';

function App() {
  
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try{
      const response = await fetch(apiUrl);
      const result = await response.json();
      // console.log(result)
      setCourses(result.data);
    }
    catch(err){
        toast.error(err.message);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData()

  },[]);

  return (
    <div className='min-h-screen flex flex-col bg-[#034078] bg-opacity-75'>

      <Navbar/>

      <div>

        <Filter filterData={filterData}
          category={category}
          setCategory={setCategory}
        />
        <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
          {
          loading ? <Loader/> : <Cards courses={courses} category={category}/> 
          }
        </div>
      </div>
      

    </div>
  )
}

export default App

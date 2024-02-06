import React from 'react'
import Header from '../components/Header'
import {useNavigate, useLocation} from 'react-router-dom'
import Blogs from '../components/Blogs';
import Page from '../components/Page';

function CategoryPage() {
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split('/').at(-1);

  return (
    <div>
      <Header/>

      <div className="ml-5">
        <div className='mt-[5rem] '>
          <button className='border px-3 py-2 rounded-md'
          onClick={()=> navigation(-1)}>
            Back
          </button>
          <h2 className='font-bold'>
            Blogs On <span>{category}</span>
          </h2>
        </div>
        <Blogs/>
      </div>
      <Page/>

    </div>
  )
}

export default CategoryPage
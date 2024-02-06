import React from 'react'
import Header from '../components/Header'
import { useNavigate, useLocation } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Page from '../components/Page';

function TagPage() {
  const navigation = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split('/').at(-1)

  return (
    <div className=''>
      <Header/>

      <div className='ml-5'>
        <div className='mt-[5rem] '>
          <button className='border px-3 py-2 rounded-md'
          onClick={()=> navigation(-1)}
          >Back</button>
          
          <h2 className='font-bold'>
            Blogs Tagged <span>#{tag}</span>
          </h2>
        </div>

        <Blogs/>
      </div>
      <Page/>

    </div>
  )
}

export default TagPage
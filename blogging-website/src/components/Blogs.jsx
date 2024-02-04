import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'
import Spinner from './Spinner';
import Card from './Card';

function Blogs() {

  const {loading, posts} = useContext(AppContext);
  console.log("printing posts...");
  console.log(posts)

  return (

    <div className='my-16 h-full'>
      <div className='w-11/12 max-w-[660px]  py-6 flex flex-col gap-y-7 '>
          {
              loading ?
                  (<Spinner/>) :
                  (
                      posts.length === 0 ?
                      (<div>
                          No posts available.
                      </div>) :
                      ( posts.map((post) => (
                          <Card post={post}
                          key={post.id}
                        />) )
                      )
                  )
          }
      </div>
    </div>
  )
}

export default Blogs
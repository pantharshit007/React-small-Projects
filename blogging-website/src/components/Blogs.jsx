import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'
import Spinner from './Spinner';
import Card from './Card';

function Blogs() {

  const {loading, posts} = useContext(AppContext);
  console.log("printing posts...");
  console.log(posts)

  return (
    <div className='w-11/12 max-w-[660px] h-screen py-6 flex flex-col gap-y-7 mt-14 mb-14'>
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
  )
}

export default Blogs
import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'
import Spinner from './Spinner';
import Card from './Card';

function Blogs() {

  const {loading, posts} = useContext(AppContext);

  return (
    <div>
        {
            loading ? 
                (<Spinner/>) : 
                (
                    posts.length === 0 ? 
                    (<div>
                        No posts available.
                    </div>) : 
                    ( posts.map((post) => ( <Card post={post} />) ))

                )
        } 

    </div>
  )
}

export default Blogs
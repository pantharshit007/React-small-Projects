import React from 'react'
import { NavLink } from 'react-router-dom'

function Card({post}) {


  return (
    <div className="flex flex-col gap-y-1">
      <p className="font-bold text-lg hover:underline">
        <NavLink to ={`/blog/${post.id}`} >
          {post.title}
        </NavLink>
      </p>

      <p className='text-sm'>
        By <span className="italic">{post.author}</span> on 
        <NavLink to ={`/categories/${post.category.replaceAll(" ", "-")}`} >
          <span className="font-bold underline">
            {` ${post.category}`} </span>
        </NavLink>
          
      </p>

      <p className='text-sm '>
        Posted On {post.date}
      </p>

      <p className='mt-3 text-base'>
        {post.content}
      </p>

      <div className='text-xs font-bold text-blue-600 underline'>
        {
          post.tags.map((tag, index) => (
             
              <NavLink key={index} to={`/tags/${tag.replaceAll(' ','-')}`} >
                <span >
                 { `#${tag} `}
                </span>
              </NavLink>
              
          ))
        }
      </div>

    </div>
  )
}

export default Card
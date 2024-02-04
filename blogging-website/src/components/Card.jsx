import React from 'react'

function Card({post}) {


  return (
    <div className="flex flex-col gap-y-1">
      <p className="font-bold text-lg">
        {post.title}
      </p>

      <p className='text-sm'>
        By <span className="italic">{post.author}</span> on <span className="font-bold underline">{post.category} </span>
      </p>

      <p className='text-sm '>
        Posted On {post.date}
      </p>

      <p className='mt-3 text-base'>
        {post.content}
      </p>

      <div className='text-xs font-bold text-blue-600'>
        {
          post.tags.map((tag, index) => {
            return <span key={index}>{`#${tag} `}</span>
          })
        }
      </div>

    </div>
  )
}

export default Card
import React from 'react'

function Product({ post }) {

    return (
        <div>
            <div>
                <p>{post.title}</p>
            </div>
            <div>
                <p>{post.description}</p>
            </div>
            <div>
                <img src={post.image} alt={post.category} />
            </div>
            <div>
                <p>{post.price}</p>
            </div>
            <button>
                {
                    true ?
                        <p>Remove Item</p> : <p>Add Item</p>
                }
            </button>

        </div>
    )
}

export default Product
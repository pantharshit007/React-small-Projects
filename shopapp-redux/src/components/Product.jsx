import React from 'react'
import { toast } from "react-hot-toast";
import { useSelector, useDispatch } from 'react-redux'
import { add, remove } from '../redux/Slices/CartSlice'

function Product({ post }) {
    const { cart } = useSelector(state => state)
    const dispatch = useDispatch();

    function removeFromCart() {
        dispatch(remove(post.id));
        toast.error("Item removed")
    }

    function addToCart() {
        dispatch(add(post));
        toast.success("Item added")
    }

    return (
        <div >
            <div>
                <p>{post.title}</p>
            </div>
            <div>
                <p>{post.description}</p>
            </div>
            <div>
                <img src={post.image} alt={post.title} />
            </div>
            <div>
                <p>{post.price}</p>
            </div>
            <div>
                {/* checking if the selected product is available in cart based on that we toggle buttons*/}
                {
                    cart.some(product => product.id == post.id) ?
                        (<button onClick={removeFromCart}>
                            Remove Item
                        </button>) :
                        (<button onClick={addToCart}>
                            Add Item
                        </button>)
                }
            </div>

        </div>
    )
}

export default Product
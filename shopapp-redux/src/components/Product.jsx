import React from 'react'
import { toast } from "react-hot-toast";
import { useSelector, useDispatch } from 'react-redux'
import { add, remove } from '../redux/Slices/CartSlice'

function Product({ post }) {
    const { cart } = useSelector(state => state)
    const dispatch = useDispatch();

    function removeFromCart() {
        dispatch(remove(post.id));
        toast.error("Item removed from cart");
    }

    function addToCart() {
        dispatch(add(post));
        toast.success("Item added from cart")
    }

    return (
        <div className="bg-white flex flex-col justify-between items-center hover:scale-105 transition duration-200 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-slate-700 shadow-md hover:shadow-[7px_7px_0px_0px_#fcc00a] outline group" >
            <div>
                <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>
                    {post.title}
                </p>
            </div>
            <div>
                <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>
                    {post.description.split(" ").slice(0, 10).join(" ") + "..."}
                </p>
            </div>
            <div className='h-[180px]'>
                <img src={post.image} alt={post.title} className='h-full w-full' />
            </div>
            <div className='flex justify-between mt-5 items-center w-full'>
                <div>
                    <p className='text-green-600 font-bold'>${post.price}</p>
                </div>
                <div>
                    {/* checking if the selected product is available in cart based on that we toggle buttons*/}
                    {
                        cart.some(product => product.id == post.id) ?
                            (<button className='text-gray-700 border-gray-700 rounded-full border-2 text-[12px] p-1 px-3 font-semibold uppercase group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in'
                                onClick={removeFromCart} >
                                Remove Item
                            </button>) :
                            (<button className='text-gray-700 border-gray-700 rounded-full border-2 text-[12px] p-1 px-3 font-semibold uppercase group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in'
                                onClick={addToCart}>
                                Add to cart
                            </button>)
                    }
                </div>
            </div>

        </div>
    )
}

export default Product
import React from 'react'
import { toast } from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice'

function CartItem({ item, itemIndex }) {
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state)

    function removeFromCart() {
        dispatch(remove(item.id));
        toast.error("Item Removed from Cart");

    }

    return (
        <div className="flex items-center p-2 md:p-3 md:mx-5 ">
            <div className={`flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center ${cart.length === itemIndex + 1 ? "" : "border-b-2 border-slate-500"} my-2`}>
                <div className="w-[30%]">
                    <img className="object-cover " src={item.image} />
                </div>
                <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
                    <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
                    <h1 className="text-base text-slate-700 font-medium">{item.description.split(' ').slice(0, 15).join(' ') + "..."}</h1>
                    <div className="flex items-center justify-between">
                        <p className="font-bold text-lg text-green-600">${item.price}</p>
                        <div className="text-red-800  bg-red-200 group hover:bg-red-400 hover:text-white transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
                            onClick={removeFromCart}>
                            <MdDelete />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
import React from 'react'
import { toast } from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice'

function CartItem({ item, itemIndex }) {
    const dispatch = useDispatch();

    function removeFromCart() {
        dispatch(remove(item.id));
        toast.error("Item Removed");
    }

    return (
        <div>
            <div>
                <img src={item.image} alt={item.title} />
            </div>

            <div>
                <h1>{item.title}</h1>
                <h2>{item.description}</h2>
                <div>
                    <p>{item.price}</p>
                    <button onClick={removeFromCart}><MdDelete /></button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
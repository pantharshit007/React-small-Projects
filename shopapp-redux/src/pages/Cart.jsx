import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'

function Cart() {
    const { cart } = useSelector(state => state)
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
    }, [cart])

    return (
        <div>
            {
                cart.length > 0 ?
                    (<div>
                        <div>
                            {
                                cart.map((item, index) => (
                                    <CartItem key={item.id} item={item} itemIndex={index} />
                                ))
                            }
                        </div>
                        {/* Summary of Cart Items */}
                        <div>
                            <div>
                                <p>your Cart</p>
                                <p>summary</p>
                                <p>Total Items: {cart.length}</p>
                            </div>

                            <div>
                                <p>Total Amount: {totalAmount}</p>
                                <button>Check Out</button>
                            </div>
                        </div>
                    </div>) :
                    (<div>
                        <p>Cart Empty</p>
                        <Link to="/">
                            <button>Shop Now</button>
                        </Link>
                    </div>)
            }

        </div>
    )
}

export default Cart
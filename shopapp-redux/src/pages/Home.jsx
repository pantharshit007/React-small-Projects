import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

function Home() {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchProductData() {
        setLoading(true);
        try {
            const data = await fetch(API_URL);
            const res = await data.json();
            setPosts(res);

        } catch (e) {
            console.error("We have a error while fetching: " + e.message);
            setPosts([]);

        } finally {
            setLoading(false);
        }

        useEffect(() => {
            fetchProductData();
        }, [])


    }

    return (
        <div className='bg-slate-300'>
            <button onClick={fetchProductData}>click</button>
            {
                loading ? <Spinner /> :
                    posts.length > 0 ?
                        (<div>
                            {
                                posts.map((post) => (
                                    <Product key={post.id} post={post} />
                                ))
                            }
                        </div>) :
                        <div>
                            <p>No post Available</p>
                        </div>
            }
        </div>
    )
}

export default Home
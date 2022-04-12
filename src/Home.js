import { useEffect, useState } from 'react';
import ProductStore from './ProductStore';

function Home() {
    useEffect(() => {
        Fetch()

    }, [])
    const [data, setData] = useState(null)
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    function Fetch() {

        fetch('https://fakestoreapi.com/products')

            .then(res => {
                if (!res.ok) { throw Error("Can not find any data"); }
                return res.json();
            })

            .then(data => {
                setLoading(false)
                setData(data)
                setError(null)
            })

            .catch((error) => {
                setLoading(false)
                setData(null)
                setError(error.message)
            })
    }

    return (
        <div className='home'>
            {loading && <h2> Loading..... </h2>}
            {error && <div>{error}</div>}
            {data && <ProductStore Products={data} />}
        </div>
    )
}
export default Home
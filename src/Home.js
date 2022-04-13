import ProductStore from './components/ProductStore';
import useFetch from './useFetch.js';

function Home() {
    const { data, err, loading } = useFetch('https://fakestoreapi.com/products');

    return (
        <div className='home'>
            {loading && <div className="spinner-border text-danger" style={{color : "#f1356d" ,width: "3rem", height: "3rem"}} role="status"></div>}
            {err && <div>{err}</div>}
            {data && <ProductStore Products={data} />}
        </div>
    )
}


export default Home

import React from 'react'
import { Link } from 'react-router-dom'

function ProductStore(props) {
    return (
        <div>
            {props.Products.map(product => (
                <div className="card" style={{ width: "18rem" }} key={product.id}>
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <img className="card-img-top" src={product.image}></img>
                        <p className="card-text">{product.category}</p>
                        <Link className="btn btn-success" to={`/Products/${product.id}`}>Product Info</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ProductStore
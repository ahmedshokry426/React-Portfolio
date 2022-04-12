import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

function Product() {
  const { id } = useParams();
  useEffect(() => {
    Fetch()

}, [])
const [data, setData] = useState(null)
const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);

function Fetch() {

    fetch('https://fakestoreapi.com/products/'+id)

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
    <div className="card">
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <img width="200" height="200" src={data.image} />
          <h2>{data.title}</h2>
          <p>{data.category}</p>
          <div>{data.description}</div>
        </article>
      )}
    </div>
  )
}
export default Product
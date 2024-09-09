import React, { useEffect, useState } from 'react'

const Product = () => {
    const [product, setProduct] = useState([])
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((result) => {
                setProduct(result.products)

            });
    }, [])

    useEffect(() => {
        setLoader(false)
    }, [product])


    const searchProduct = (e) => {
        setLoader(true)
        fetch(`https://dummyjson.com/products/search?q=${e.target.value}`).then(res => res.json())
            .then((result) => {
                console.log(result);
                setProduct(result.products)

            });
    }
    return (
        <div>


            <div className="album  bg-light">
                <input style={{ width: '70%', margin: '20px' }} type="text" placeholder='Search Product' onKeyUp={(event) => {

                    searchProduct(event)
                }} />
                <div className="container">
                    {loader == true && <>
                        <svg class="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
                            <circle cx="170" cy="170" r="160" stroke="#E2007C" />
                            <circle cx="170" cy="170" r="135" stroke="#404041" />
                            <circle cx="170" cy="170" r="110" stroke="#E2007C" />
                            <circle cx="170" cy="170" r="85" stroke="#404041" />
                        </svg>
                    </>}

                    {loader == false && product.length == 0 && <>
                        <h1>Product Not Found</h1>
                    </>}

                    {loader == false && product.length > 0 && <>
                        <div className="row">

                            {product.map((prd) => {
                                return (
                                    <>

                                        <div className="col-md-4">
                                            <div className="card mb-4 box-shadow">
                                                <img
                                                    className="card-img-top"
                                                    data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail"
                                                    alt="Thumbnail [100%x225]"
                                                    src={prd.thumbnail}
                                                    data-holder-rendered="true"
                                                    style={{ height: 225, width: "100%", display: "block" }}
                                                />
                                                <div className="card-body">
                                                    <h6>{prd.title}</h6>
                                                    <p className="card-text">
                                                        {prd.description}
                                                    </p>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="btn-group">
                                                            <button
                                                                type="button"
                                                                className="btn btn-sm btn-outline-secondary"
                                                            >
                                                                View
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-sm btn-outline-secondary"
                                                            >
                                                                Edit
                                                            </button>
                                                        </div>
                                                        <small className="text-muted">9 mins</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}

                        </div>
                    </>}
                </div>
            </div>

        </div>
    )
}

export default Product
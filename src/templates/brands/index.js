import React from "react";
import { useState, useEffect } from "react";

const Brands = () => {

    const [brands, setBrands] = useState([])

    const fetchData = () => {
        fetch("https://dummyjson.com/products")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setBrands(data.products)
            })
    }

    useEffect(() => {
        fetchData();
    }, [])

    console.log(brands)

    return (
        <>
            <h1>Brand Directory</h1>
            <div>
            <ul>
            {brands.map((brand, index) =>
                    <li key={index}>{brand.brand}</li>    
                )}
            </ul>
            </div>
        </>
    )
}

export default Brands;
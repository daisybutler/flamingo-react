import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const Brands = () => {

    const [brands, setBrands] = useState([])
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "O", "P", "Q", "R", "S"];

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

    return (
        <>
            <h1>Brand Directory</h1>
            <div id="letter-buttons" className="container">
            {alphabet.map((letter, index) =>
                <Button href="#" className="letter-button" key={index}>{letter}</Button>    
            )}
            </div>
            <div id="brands-section" className="container">
            {brands.map((brand, index) =>
                    <div className="brand-item" key={index}><a href="/brands">{brand.brand}</a></div>    
            )}
            </div>
        </>
    )
}

export default Brands;
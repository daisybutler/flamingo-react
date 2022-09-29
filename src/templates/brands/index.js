import React from "react";

const Brands = () => {

    // Dummy data
    fetch('https://dummyjson.com/products')
        .then(res => res.json());

    const BrandDirSection = () => {

        const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

        const rows = [];
        console.log(rows)
        for (let i = 0; i < alphabet.length; i++) {
            rows.push(`<div key={${alphabet[i]}_entries} />`); 
        }

        return (
            <div className="dirSection">{rows}</div>
        )
    }

    
    return (
        <>
            <h1>Brand Directory</h1>
            <BrandDirSection />
        </>
    )
}

export default Brands;
import React from "react";
import CarouselMain from "../../components/CarouselHome";
import ImageCard from "../../components/ImageCard";
import CardGroup from 'react-bootstrap/CardGroup';

const Home = () => {
    
    return (
        <>
            <CarouselMain />
            <CardGroup id="image-cards-home" className="container">
                <ImageCard src={"https://cdn.shopify.com/s/files/1/0565/1166/0080/files/Jack_Black_900x.jpg?v=1663068300"} />
                <ImageCard src={"https://cdn.shopify.com/s/files/1/0565/1166/0080/files/Harrys_Razors_1100x.jpg?v=1663068708"} />
                <ImageCard src={"https://cdn.shopify.com/s/files/1/0565/1166/0080/files/The_Ordinary_3_900x.jpg?v=1663069706"} />
            </CardGroup>
        </>
    )
}

export default Home;
import React from "react";
import CarouselMain from "../../components/CarouselHome";
import ImageCard from "../../components/ImageCard";
import CardGroup from 'react-bootstrap/CardGroup';

const Home = () => {
    
    return (
        <>
            <CarouselMain />
            <CardGroup id="image-cards-home" className="container">
                <ImageCard />
                <ImageCard />
                <ImageCard />
            </CardGroup>
        </>
    )
}

export default Home;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';

function ProductCard() {

    const [products, setProducts] = useState([])

    const fetchData = () => {
        fetch("https://dummyjson.com/products")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setProducts(data.products)
            })
    }

    useEffect(() => {
        fetchData();
    }, [])

    const filteredProducts = products.filter(function (obj) {
        return obj.category === "skincare";
    })

    return (
        <>
        {filteredProducts.map((product, index) => 
        <Card className='product-card' style={{ width: '18rem' }} id={`product_${product.id}`}>
            <Card.Img variant="top" src={product.images[2]} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                {/* <Card.Text>
                    {product.description}
                </Card.Text> */}
                <Button className='view-details-button'>View Details</Button>
            </Card.Body>
        </Card>
        )}
        </>
    );
}

export default ProductCard;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';

// Redux
import { increaseCounter } from "./../redux/counter/counterActions"
import { useDispatch } from 'react-redux';

function ProductCard() {

    const [products, setProducts] = useState([])
    const dispatch = useDispatch();

    // Load product data
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


    // Handle item add
    const handleAddItem = () => {
        dispatch(increaseCounter())
    }

    // Display only skincare products
    const filteredProducts = products.filter(function (obj) {
        return obj.category === "skincare";
    })

    // Format the prices in readable format
    const formatPrice = (price) => {
        let formattedPrice;
        (typeof price === "number") ? formattedPrice = `£${price}.00` : formattedPrice = "Unavailable";
        return formattedPrice;
    }

    return (
        <>
        {filteredProducts.map((product, index) => 
        <Card bsPrefix='product-card' className='col-12 col-sm-4 col-md-3' style={{ width: '16rem' }} id={`product_${product.id}`} key={product.id}>
            <Card.Img variant="top" src={product.images[2]} style={{height: "300px", overflow: "hidden"}} />
            <Card.Body>
                <Card.Title className='product-title'>{product.title}</Card.Title>
                <p className='product-price'>{formatPrice(product.price)}</p>
                <Button onClick={handleAddItem} bsPrefix='view-details-button' className='view-details-button'>+ Add To Cart</Button>
            </Card.Body>
        </Card>
        )}
        </>
    );
}

export default ProductCard;
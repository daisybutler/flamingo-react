import { Button, Carousel } from "react-bootstrap";

const CarouselMain = () => {

  return (
    <Carousel variant="dark" id="carousel-home" controls={false} indicators={true} interval={2000}>
      <Carousel.Item>
        <div className="carousel-overlay"></div>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2087&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>What Matters</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button variant="dark" href="/skincare" >Shop now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-overlay"></div>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1643185539104-3622eb1f0ff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>What Matters</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button variant="dark" href="/brands" >Shop now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-overlay"></div>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1619451427882-6aaaded0cc61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h1>What Matters</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Button variant="dark" href="/fragrance" >Shop now</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselMain;
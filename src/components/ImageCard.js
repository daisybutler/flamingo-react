import Card from 'react-bootstrap/Card';

function ImageCard() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src="https://cdn.shopify.com/s/files/1/0565/1166/0080/files/Jack_Black_900x.jpg?v=1663068300" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Item Title</Card.Title>
        <Card.Link className='underlined-link'>Shop Now</Card.Link>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImageCard;
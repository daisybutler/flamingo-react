import Card from 'react-bootstrap/Card';

function ImageCard(src) {
  console.log(src)
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={src.src} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Item Title</Card.Title>
        <Card.Link className='underlined-link'>Shop Now</Card.Link>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImageCard;
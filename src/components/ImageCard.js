import Card from 'react-bootstrap/Card';

function ImageCard(props) {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={props.src} alt={props.alt} />
      <Card.ImgOverlay>
        <Card.Title>Item Title</Card.Title>
        <Card.Link className='underlined-link'>Shop Now</Card.Link>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImageCard;
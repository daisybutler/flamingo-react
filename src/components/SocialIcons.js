import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function SocialIcons() {
  return (
    <ButtonGroup id='social-buttons' aria-label="Social icons">
      <Button href="#" variant="secondary"><i className='fab fa-facebook'></i></Button>
      <Button href="#" variant="secondary"><i className='fab fa-instagram'></i></Button>
      <Button href="#" variant="secondary"><i className='fab fa-twitter'></i></Button>
    </ButtonGroup>
  );
}

export default SocialIcons;
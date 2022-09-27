import { Navbar, Nav, Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
        <Navbar  id="alert-banner">
            <Container className="d-flex justify-content-center vertical-align-middle">
                <p>See our 72 5-star reviews on Trustpilot</p>
            </Container>
        </Navbar>
        <Navbar bg="light" id="searchbar-nav" >
            <Container className="justify-content-center gap-5">
                <Form className="d-flex">
                <i className="fas fa-search"></i>
                <Form.Control
                type="search"
                placeholder="What are you looking for?"
                className="me-2"
                aria-label="Search"
                />
                {/* <Button>Search</Button> */}
            </Form>
                <Link to="/" className="navbar-brand">
                   <div>THE GROOMING CLINIC</div>
                </Link>
                <Nav>
                    <Nav.Link href="#"><i className="fas fa-envelope"></i></Nav.Link>
                    <Nav.Link href="#"><i className="fas fa-user"></i></Nav.Link>
                    <Nav.Link href="#"><i className="fas fa-shopping-basket"></i></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
         <Navbar bg="light" id="menu-nav">
            <Container>
                <Nav>
                    <Link to="/brands" className="nav-link">Brands</Link>
                    <Link to="/fragrance" className="nav-link">Fragrance</Link>
                    <Link to="/skincare" className="nav-link">Skincare</Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    )
}

export default Header;
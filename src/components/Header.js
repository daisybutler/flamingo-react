import { Navbar, Nav, Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header(props) {
    console.log(props.props.count)

    const handleMouseEnter = (e) => {
        document.querySelector(".Typewriter").style.display = "none";
    }

    const handleMouseLeave = (e) => {
        if (!e.target.value) document.querySelector(".Typewriter").style.display = "block";
    }

    const handleClick = (e) => {
        const url = "https://www.tripadvisor.co.uk";
        if (e.type === "click") window.open(url, '_blank', 'noopener,noreferrer');
    }

    const TypewriterSearch = () => {
        return (
            <Typewriter id="typewriterSearch"
                options={{ loop: true }}
                onInit={(typewriter) => {
                    typewriter.typeString('What are you looking for?')
                        .pauseFor(2500)
                        .deleteAll()
                        .start();
                }}
            />
        )
    }

    return (
        <>
            <Navbar id="alert-banner" onClick={handleClick}>
                <Container className="d-flex justify-content-center vertical-align-middle">
                    <p>See our 72 5-star reviews on Trustpilot</p>
                </Container>
            </Navbar>
            <Navbar bg="light" id="searchbar-nav" key={false} expand={false}>
                <Container className="md-justify-content-center gap-5">
                    <Form className="d-none d-md-flex">
                        <i className="fas fa-search"></i>
                        <Form.Control
                            type="text"
                            className="me-2"
                            aria-label="Search"
                            size="sm"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onFocus={handleMouseEnter}
                            onBlur={handleMouseLeave}
                        />
                        <TypewriterSearch />
                        {/* <Button>Search</Button> */}
                    </Form>
                    <Link to="/" className="navbar-brand">
                        <div className="d-none d-md-flex">THE GROOMING CLINIC</div>
                        <div className="d-flex d-md-none">TGC</div>
                    </Link>
                    {/* <Nav>
                        <Nav.Link href="#"><i className="fas fa-envelope"></i></Nav.Link>
                        <Nav.Link href="#"><i className="fas fa-user"></i></Nav.Link>
                        <Nav.Link href="#"><i className="fas fa-shopping-basket"></i></Nav.Link>
                    </Nav> */}
                    <div style={{display: "flex", justifyContent: "end"}}>
                        <Navbar.Toggle aria-controls={`shopping-cart-expand-false`} children={<i className="fas fa-shopping-basket"></i>} />
                    </div>
                    <Navbar.Offcanvas
                        id={`shopping-cart-expand-false`}
                        aria-labelledby={`shopping-cart-expand-false`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`shopping-cart-expand-false`}>
                            <i className="fas fa-shopping-basket" style={{paddingRight: "10px"}}></i>Basket
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav id="userControls" className="justify-content-end flex-grow-1 pe-3">
                                <p>Your shopping cart is empty.</p>
                                <p>Quantity: {props.props.count}</p>
                                <Nav.Link href="/skincare" className="btn">Shop Now</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
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
            {/* {[false].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                    <Container fluid>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="#action1">Home</Nav.Link>
                                    <Nav.Link href="#action2">Link</Nav.Link>
                                    <NavDropdown
                                        title="Dropdown"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))} */}
        </>
    )
}

export default Header;
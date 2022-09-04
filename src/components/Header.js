import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
    return (
        <Navbar bg="light" >
            <Container>
                <Navbar.Brand href="/" >Logo</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#">Item</Nav.Link>
                    <Nav.Link href="#">Item</Nav.Link>
                    <Nav.Link href="#">Item</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;
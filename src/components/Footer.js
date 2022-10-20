import { Nav } from "react-bootstrap";
import SocialIcons from "./SocialIcons";

const Footer = () => {

    return (
        <div id="footer-main" className="container">
            <div className="row">
                <div className="col-6 col-md-4 col-lg-3">
                <Nav id="footer-contact" className="flex-column">
                        <Nav.Link href="#" disabled>Need help?</Nav.Link>
                        <Nav.Link eventKey="link-1">Mon-Fri: 9:00am-5:00pm (UK Time)</Nav.Link>
                        <Nav.Link href="#">+44 (0)1483 600 469</Nav.Link>
                        <Nav.Link eventKey="link-1">support@thegroomingclinic.com</Nav.Link>
                    </Nav>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                    <Nav id="footer-info" className="flex-column">
                        <Nav.Link href="#" disabled>Information</Nav.Link>
                        <Nav.Link href="#">Delivery</Nav.Link>
                        <Nav.Link eventKey="link-1">Environmental Policy</Nav.Link>
                        <Nav.Link eventKey="link-2">Returns</Nav.Link>
                        <Nav.Link eventKey="link-3">Privacy Policy</Nav.Link>
                        <Nav.Link eventKey="link-4">Cookie Policy</Nav.Link>
                        <Nav.Link eventKey="link-5">Terms & Conditions</Nav.Link>
                    </Nav>
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                    newsletter
                </div>
                <div className="col-6 col-md-4 col-lg-3">
                    <SocialIcons />
                </div>
            </div>
        </div>
    )
}

export default Footer;
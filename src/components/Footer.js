import { Nav } from "react-bootstrap";
import SocialIcons from "./SocialIcons";
import { Form } from "react-bootstrap";

const Footer = () => {

    return (
        <>
        <div className="container-fluid" style={{borderBottom: "var(--grey-border)" }}>
            prompts
        </div>
        <div id="footer-main" className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <Nav id="footer-contact" className="flex-column">
                        <Nav.Link href="#" disabled className="footer-title">Need help?</Nav.Link>
                        <Nav.Link eventKey="link-1">Mon-Fri: 9:00am-5:00pm (UK Time)</Nav.Link>
                        <Nav.Link href="#">+44 (0)1483 600 469</Nav.Link>
                        <Nav.Link eventKey="link-1">support@thegroomingclinic.com</Nav.Link>
                    </Nav>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <Nav id="footer-info" className="flex-column">
                        <Nav.Link href="#" disabled className="footer-title">Information</Nav.Link>
                        <Nav.Link href="#">Delivery</Nav.Link>
                        <Nav.Link eventKey="link-1">Environmental Policy</Nav.Link>
                        <Nav.Link eventKey="link-2">Returns</Nav.Link>
                        <Nav.Link eventKey="link-3">Privacy Policy</Nav.Link>
                        <Nav.Link eventKey="link-4">Cookie Policy</Nav.Link>
                        <Nav.Link eventKey="link-5">Terms & Conditions</Nav.Link>
                    </Nav>
                </div>
                <div id="footerSearchbar" className="col-12 col-sm-6 col-md-4 col-lg-3">
                <Form className="d-none d-md-flex">
                        <Form.Control
                            type="text"
                            className="me-2"
                            aria-label="Search"
                            size="sm"
                        />
                        <i className="fas fa-arrow-right"></i>
                    </Form>
                    {/* eslint-disable-next-line */}
                    <p className="small-text pt-2">Before subscribing to our newsletter, please read our <a href="#">privacy policy</a>.</p>
                </div>
                <div className="col-6 col-md-4 col-lg-3 text-center">
                    <SocialIcons />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-8">
                    <p className="small-text">© The Grooming Clinic. The Grooming Clinic is a trading name of Henry's Opinion Ltd, 
                    a registered company in England & Wales (registration number 07121104). Address: 
                    TheGroomingClinic.com, Henry's Opinion Limited, Stable C. Knowle Lane, Cranleigh, Surrey, 
                    GU6 8JN, United Kingdom.</p>
                </div>
                <div className="col-4 d-none d-md-inline">
                    <p className="small-text">We accept all major credit and debit cards.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;
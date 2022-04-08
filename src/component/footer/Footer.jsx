import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../component/Logo.png";
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="bg-success text-white py-5">
        <Container>
          <Row>
            <Col xs="6">
              <Image src={logo} style={{ width: "100px", height: "100px", objectFit: "cover" }} />
              <p>Mengenal wisata yang ada di Pulau Sumbawa</p>
              <p>Contact Center :+6281353355475</p>
              <p>Email:Incredibleicarus03@gmail.com</p>
              <AiOutlineMail />
              <BsPhone />
              <AiOutlineInstagram />
            </Col>
            <Col xs="2">
              <div className="d-flex flex-column">
                <h6>Menu</h6>
                <Link className="text-decoration-none text-white" to="/">
                  Home
                </Link>
                <Link className="text-decoration-none text-white" to="/wisata">
                  Wisata
                </Link>
                <Link className="text-decoration-none text-white" to="/budaya">
                  Budaya
                </Link>
                <Link className="text-decoration-none text-white" to="/kuliner">
                  Kuliner
                </Link>
                <Link className="text-decoration-none text-white" to="/explore">
                  Explore
                </Link>
              </div>
            </Col>
            <Col xs="2">
              <div className="d-flex flex-column">
                <h6>Website Terkait</h6>
                <Link className="text-decoration-none text-white" to="/promosiwisata">
                  Promosi Wisata
                </Link>
                <Link className="text-decoration-none text-white" to="/promosikuliner">
                  Promosi Kuliner
                </Link>
                <Link className="text-decoration-none text-white" to="/promosievent">
                  Promosi Event
                </Link>
              </div>
            </Col>
            <Col xs="2">
              <div className="d-flex flex-column">
                <h6>Layanan Kami</h6>
                <Link className="text-decoration-none text-white" to="/informationcenter">
                  Information Center
                </Link>
                <Link className="text-decoration-none text-white" to="/form">
                  Form
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-primary">
        <p className="text-center text-white py-3 mb-0">CopyRight 2022 Reserved Visit Sumbawa Island</p>
      </div>
    </>
  );
};

export default Footer;

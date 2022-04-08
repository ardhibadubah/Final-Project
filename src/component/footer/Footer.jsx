import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoSumbawa1 from "../../assets/image/LogoSumbawa1.png";
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="bg-grey text-green py-5">
        <Container>
          <Row>
            <Col xs='6'>
              <Image
                src={LogoSumbawa1}
                style={{ width: "250px", height: "80px", objectFit: "cover" }}
              />
              <p>Mengenal wisata yang ada di Pulau Sumbawa</p>
              <p>Contact Center :+6281353355475</p>
              <p>Email:Incredibleicarus03@gmail.com</p>
              <AiOutlineMail />
              <BsPhone />
              <AiOutlineInstagram />
            </Col>
            <Col xs='2'>
              <div className="d-flex flex-column">
                <h6>Menu</h6>
                <Link className="text-decoration-none text-green" to="/">
                  Home
                </Link>
                <Link className="text-decoration-none text-green" to="/wisata">
                  Wisata
                </Link>
                <Link className="text-decoration-none text-green" to="/budaya">
                  Budaya
                </Link>
                <Link className="text-decoration-none text-green" to="/kuliner">
                  Kuliner
                </Link>
                <Link className="text-decoration-none text-green" to="/explore">
                  Explore
                </Link>
              </div>
            </Col>
            <Col xs='2'>
              <div className="d-flex flex-column">
                <h6>Website Terkait</h6>
                <Link
                  className="text-decoration-none text-green"
                  to="/promosiwisata"
                >
                  Promosi Wisata
                </Link>
                <Link
                  className="text-decoration-none text-green"
                  to="/promosikuliner"
                >
                  Promosi Kuliner
                </Link>
                <Link
                  className="text-decoration-none text-green"
                  to="/promosievent"
                >
                  Promosi Event
                </Link>
              </div>
            </Col>
            <Col xs='2'>
              <div className="d-flex flex-column">
                <h6>Layanan Kami</h6>
                <Link
                  className="text-decoration-none text-green"
                  to="/informationcenter"
                >
                  Information Center
                </Link>
                <Link className="text-decoration-none text-green" to="/form">
                  Form
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-">
        <p className="text-center text-green py-3 mb-0">
          CopyRight 2022 Reserved Visit Sumbawa Island
        </p>
      </div>
    </>
  );
};

export default Footer;

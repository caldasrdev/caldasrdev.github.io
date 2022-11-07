import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/logo.svg";
import footerIcon1 from "../../assets/img/Footer/footer-icon1.svg";
import footerIcon2 from "../../assets/img/Footer/footer-icon2.svg";
import footerIcon3 from "../../assets/img/Footer/footer-icon3.svg";

import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="www.google.com"><img src={footerIcon1} alt="Icon" /></a>
              <a href="www.google.com"><img src={footerIcon2} alt="Icon" /></a>
              <a href="www.google.com"><img src={footerIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

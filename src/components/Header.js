import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Đại Học sjok.me</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Trang chủ</Nav.Link>
            <Nav.Link href="#about">Giới thiệu</Nav.Link>
            <Nav.Link href="#programs">Chương trình đào tạo</Nav.Link>
            <Nav.Link href="#campus">Cơ sở vật chất</Nav.Link>
            <Nav.Link href="#testimonials">Cảm nhận</Nav.Link>
            <Nav.Link href="#contact">Liên hệ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header; 
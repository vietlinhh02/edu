import React from 'react';
import { Container, Row, Col, Form, Button, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <Container>
        <Row className="mb-5">
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4 text-primary fw-bold">Đại Học sjok.me</h5>
            <p>
              Đào tạo nhân tài, phụng sự đất nước. Với hơn 35 năm kinh nghiệm, chúng tôi cam kết cung cấp môi trường học tập chất lượng cao và toàn diện cho sinh viên.
            </p>
            <div className="social-icons d-flex gap-3 mt-4">
              <a href="#!" className="text-white bg-primary p-2 rounded-circle">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#!" className="text-white bg-info p-2 rounded-circle">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#!" className="text-white bg-danger p-2 rounded-circle">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#!" className="text-white bg-primary p-2 rounded-circle">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#!" className="text-white bg-danger p-2 rounded-circle">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4 text-secondary">Liên kết nhanh</h5>
            <Nav className="flex-column">
              <Nav.Link href="#about" className="text-white p-0 mb-2 footer-link">
                <i className="fas fa-angle-right me-2 text-secondary"></i>Giới thiệu
              </Nav.Link>
              <Nav.Link href="#programs" className="text-white p-0 mb-2 footer-link">
                <i className="fas fa-angle-right me-2 text-secondary"></i>Chương trình đào tạo
              </Nav.Link>
              <Nav.Link href="#campus" className="text-white p-0 mb-2 footer-link">
                <i className="fas fa-angle-right me-2 text-secondary"></i>Cơ sở vật chất
              </Nav.Link>
              <Nav.Link href="#testimonials" className="text-white p-0 mb-2 footer-link">
                <i className="fas fa-angle-right me-2 text-secondary"></i>Cảm nhận
              </Nav.Link>
              <Nav.Link href="#" className="text-white p-0 mb-2 footer-link">
                <i className="fas fa-angle-right me-2 text-secondary"></i>Tuyển sinh
              </Nav.Link>
              <Nav.Link href="#" className="text-white p-0 mb-2 footer-link">
                <i className="fas fa-angle-right me-2 text-secondary"></i>Học phí & Học bổng
              </Nav.Link>
              <Nav.Link href="#" className="text-white p-0 mb-2 footer-link">
                <i className="fas fa-angle-right me-2 text-secondary"></i>Việc làm & Thực tập
              </Nav.Link>
            </Nav>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4 text-secondary" id="contact">Liên hệ</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="fas fa-map-marker-alt me-2 text-secondary"></i>
                <strong>Cơ sở Hà Nội:</strong> 123 Đường Giáo Dục, Quận Cầu Giấy, Hà Nội
              </li>
              <li className="mb-3">
                <i className="fas fa-map-marker-alt me-2 text-secondary"></i>
                <strong>Cơ sở TP.HCM:</strong> 456 Đường Đại học, Quận 9, TP. Hồ Chí Minh
              </li>
              <li className="mb-3">
                <i className="fas fa-phone me-2 text-secondary"></i>
                <strong>Hotline:</strong> (028) 1234 5678
              </li>
              <li className="mb-3">
                <i className="fas fa-envelope me-2 text-secondary"></i>
                <strong>Email:</strong> info@sjok.me
              </li>
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4 text-secondary">Đăng ký nhận tin</h5>
            <p>Đăng ký nhận thông tin mới nhất về các chương trình đào tạo, học bổng và sự kiện của trường.</p>
            <Form className="mt-4">
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email của bạn" className="mb-2 border-0" />
                <Form.Control type="text" placeholder="Họ và tên" className="mb-2 border-0" />
                <Form.Select className="mb-3 border-0">
                  <option>Bạn quan tâm đến...</option>
                  <option value="undergraduate">Chương trình đại học</option>
                  <option value="graduate">Chương trình sau đại học</option>
                  <option value="scholarship">Học bổng</option>
                  <option value="events">Sự kiện</option>
                </Form.Select>
              </Form.Group>
              <Button variant="secondary" type="submit" className="w-100 rounded-pill">
                Đăng ký
              </Button>
            </Form>
          </Col>
        </Row>

        <Row className="mt-4 pt-4 border-top border-secondary">
          <Col md={6} className="mb-3 mb-md-0">
            <p className="mb-0 text-secondary">
              &copy; {new Date().getFullYear()} Đại Học sjok.me. Tất cả các quyền được bảo lưu.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <Nav className="justify-content-md-end">
              <Nav.Link href="#" className="text-white px-2 py-0 border-end border-secondary footer-link">Chính sách bảo mật</Nav.Link>
              <Nav.Link href="#" className="text-white px-2 py-0 border-end border-secondary footer-link">Điều khoản sử dụng</Nav.Link>
              <Nav.Link href="#" className="text-white px-2 py-0 footer-link">Sơ đồ trang</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 
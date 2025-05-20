import React from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';

const Hero = () => {
  return (
    <div id="home">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Badge bg="warning" text="dark" className="mb-3 fs-6">Tuyển sinh 2025</Badge>
            <h1 className="display-2 fw-bold mb-4 text-white">Chào mừng đến với Đại Học sjok.me</h1>
            <p className="lead mb-3 fs-4 text-white">
              Nơi ươm mầm tri thức và phát triển tài năng cho thế hệ tương lai. 
              Chúng tôi cung cấp môi trường học tập chất lượng cao với đội ngũ giảng viên giàu kinh nghiệm.
            </p>
            <p className="mb-5 text-white">
              Được xếp hạng #1 trong Top 10 Trường Đại học có môi trường học tập xuất sắc nhất.
              Tỷ lệ sinh viên có việc làm sau tốt nghiệp đạt 98.5% với mức lương khởi điểm cao.
              Đối tác với hơn 200 doanh nghiệp lớn trong và ngoài nước.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Button variant="primary" size="lg">Tìm hiểu thêm</Button>
              <Button variant="secondary" size="lg">Đăng ký tư vấn</Button>
              <Button variant="outline-light" size="lg">Xem học phí</Button>
            </div>
            
            <div className="mt-5 d-flex justify-content-center">
              <div className="px-4 border-end border-secondary">
                <h2 className="mb-0 text-white">35+</h2>
                <p className="mb-0 text-white">Năm kinh nghiệm</p>
              </div>
              <div className="px-4 border-end border-secondary">
                <h2 className="mb-0 text-white">50+</h2>
                <p className="mb-0 text-white">Ngành đào tạo</p>
              </div>
              <div className="px-4 border-end border-secondary">
                <h2 className="mb-0 text-white">20k+</h2>
                <p className="mb-0 text-white">Sinh viên</p>
              </div>
              <div className="px-4">
                <h2 className="mb-0 text-white">98%</h2>
                <p className="mb-0 text-white">Tỷ lệ việc làm</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero; 
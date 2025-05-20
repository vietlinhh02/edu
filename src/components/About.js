import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="section bg-light">
      <Container>
        <h2 className="section-title">Giới thiệu về Đại Học sjok.me</h2>
        <p className="section-subtitle">Hơn 35 năm xây dựng và phát triển</p>
        
        <Row className="mb-5">
          <Col lg={6} className="mb-4">
            <div className="p-4">
              <h3>Lịch sử phát triển</h3>
              <p>
                Đại học sjok.me được thành lập vào năm 1990, khởi đầu là một trường đại học chuyên đào tạo công nghệ thông tin.
                Qua hơn 3 thập kỷ phát triển, trường đã mở rộng quy mô và các ngành đào tạo, trở thành một trong những cơ sở
                giáo dục đại học uy tín hàng đầu Việt Nam với nhiều thành tích xuất sắc trong đào tạo và nghiên cứu khoa học.
              </p>
              
              <h3>Tầm nhìn</h3>
              <p>
                Đại Học sjok.me đặt mục tiêu trở thành một trong những trường đại học hàng đầu khu vực Đông Nam Á, 
                đào tạo nguồn nhân lực chất lượng cao, đáp ứng nhu cầu của xã hội và hội nhập quốc tế.
                Đến năm 2030, Đại học sjok.me sẽ lọt vào top 100 trường đại học hàng đầu châu Á, với các
                chương trình đào tạo đạt tiêu chuẩn quốc tế.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="p-4">
              <h3>Sứ mệnh</h3>
              <p>
                Cung cấp môi trường giáo dục đại học chất lượng cao, phát triển toàn diện người học, 
                đóng góp vào sự phát triển kinh tế - xã hội của đất nước thông qua các hoạt động đào tạo, 
                nghiên cứu khoa học và chuyển giao công nghệ.
              </p>
              
              <Accordion defaultActiveKey="0" className="mb-4">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Thành tích nổi bật</Accordion.Header>
                  <Accordion.Body>
                    <ul className="text-start">
                      <li>Top 5 trường đào tạo CNTT hàng đầu Việt Nam</li>
                      <li>Đứng thứ 3 về công bố quốc tế trong lĩnh vực khoa học kỹ thuật</li>
                      <li>100+ bằng sáng chế quốc tế trong 5 năm gần đây</li>
                      <li>Hơn 50 giải thưởng sinh viên cấp quốc gia và quốc tế hàng năm</li>
                      <li>Xếp hạng A+ về chất lượng đào tạo theo Bộ GD&ĐT</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Đối tác chiến lược</Accordion.Header>
                  <Accordion.Body>
                    <ul className="text-start">
                      <li>Hơn 200 doanh nghiệp trong và ngoài nước</li>
                      <li>50+ trường đại học đối tác tại Mỹ, Châu Âu, Úc và Châu Á</li>
                      <li>Thành viên của mạng lưới các trường đại học ASEAN</li>
                      <li>Đối tác nghiên cứu của Google, Microsoft, Intel và Samsung</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>
        
        <h3 className="text-center mb-4">Giá trị cốt lõi</h3>
        <Row>
          <Col md={3} className="mb-4">
            <Card className="h-100 text-center p-3">
              <Card.Body>
                <div className="display-4 mb-3 text-primary">
                  <i className="fas fa-award"></i>
                </div>
                <h4>Chất lượng</h4>
                <p>Cam kết chất lượng đào tạo và nghiên cứu khoa học với chuẩn mực quốc tế</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card className="h-100 text-center p-3">
              <Card.Body>
                <div className="display-4 mb-3 text-primary">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h4>Sáng tạo</h4>
                <p>Khuyến khích tư duy sáng tạo, đổi mới và tiên phong trong mọi hoạt động</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card className="h-100 text-center p-3">
              <Card.Body>
                <div className="display-4 mb-3 text-primary">
                  <i className="fas fa-handshake"></i>
                </div>
                <h4>Hợp tác</h4>
                <p>Xây dựng môi trường hợp tác, chia sẻ trong học tập, nghiên cứu và phát triển</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="mb-4">
            <Card className="h-100 text-center p-3">
              <Card.Body>
                <div className="display-4 mb-3 text-primary">
                  <i className="fas fa-balance-scale"></i>
                </div>
                <h4>Trách nhiệm</h4>
                <p>Đề cao trách nhiệm xã hội, đạo đức nghề nghiệp và phát triển bền vững</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About; 
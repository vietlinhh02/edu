import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Modal } from 'react-bootstrap';

const Programs = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = (program) => {
    setSelectedProgram(program);
    setShowModal(true);
  };

  const programs = [
    {
      id: 1,
      title: 'Công nghệ thông tin',
      description: 'Chương trình đào tạo chuyên sâu về phát triển phần mềm, trí tuệ nhân tạo, khoa học dữ liệu và an ninh mạng.',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      badge: 'Hot',
      badgeColor: 'danger',
      duration: '4 năm',
      degrees: ['Cử nhân', 'Thạc sĩ', 'Tiến sĩ'],
      overview: 'Chương trình đào tạo Công nghệ thông tin tại Đại học sjok.me được thiết kế hiện đại, cập nhật theo xu hướng công nghệ mới nhất trên thế giới. Sinh viên được đào tạo toàn diện từ kiến thức nền tảng đến chuyên sâu, với nhiều chuyên ngành hẹp để lựa chọn.',
      specializations: ['Trí tuệ nhân tạo & Học máy', 'Kỹ thuật phần mềm', 'An ninh mạng', 'Khoa học dữ liệu', 'Phát triển game'],
      careers: ['Kỹ sư phần mềm', 'Chuyên gia AI', 'Chuyên gia bảo mật', 'Quản lý dự án CNTT', 'Kiến trúc sư giải pháp'],
      partners: ['Google', 'Microsoft', 'FPT Software', 'Viettel', 'IBM'],
      tuition: '65.000.000 VNĐ/năm'
    },
    {
      id: 2,
      title: 'Quản trị kinh doanh',
      description: 'Đào tạo các kỹ năng quản lý, marketing, tài chính và khởi nghiệp cho sinh viên.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      badge: 'Top',
      badgeColor: 'primary',
      duration: '4 năm',
      degrees: ['Cử nhân', 'Thạc sĩ', 'MBA Quốc tế'],
      overview: 'Chương trình Quản trị Kinh doanh được xây dựng theo chuẩn quốc tế, kết hợp giữa lý thuyết và thực hành, giúp sinh viên phát triển tư duy kinh doanh, kỹ năng lãnh đạo và quản lý hiệu quả.',
      specializations: ['Marketing số', 'Quản trị nhân lực', 'Tài chính doanh nghiệp', 'Kinh doanh quốc tế', 'Khởi nghiệp'],
      careers: ['Quản lý doanh nghiệp', 'Chuyên gia marketing', 'Tư vấn kinh doanh', 'Giám đốc vận hành', 'Doanh nhân'],
      partners: ['HSBC', 'Unilever', 'P&G', 'Nestlé', 'Vingroup'],
      tuition: '55.000.000 VNĐ/năm'
    },
    {
      id: 3,
      title: 'Kỹ thuật điện - điện tử',
      description: 'Cung cấp kiến thức và kỹ năng về thiết kế, vận hành và bảo trì các hệ thống điện và điện tử.',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      duration: '4.5 năm',
      degrees: ['Cử nhân', 'Thạc sĩ'],
      overview: 'Chương trình Kỹ thuật Điện - Điện tử cung cấp nền tảng vững chắc về kỹ thuật điện, điện tử và tự động hóa. Sinh viên được thực hành trong các phòng lab hiện đại và tham gia các dự án thực tế.',
      specializations: ['Điện tử công nghiệp', 'Hệ thống nhúng', 'Tự động hóa', 'IoT', 'Năng lượng tái tạo'],
      careers: ['Kỹ sư điện', 'Kỹ sư điện tử', 'Kỹ sư tự động hóa', 'Quản lý dự án kỹ thuật', 'Nghiên cứu viên'],
      partners: ['Siemens', 'ABB', 'Schneider Electric', 'Samsung Electronics', 'LG'],
      tuition: '60.000.000 VNĐ/năm'
    },
    {
      id: 4,
      title: 'Ngôn ngữ Anh',
      description: 'Đào tạo sinh viên thành thạo tiếng Anh, hiểu biết về văn hóa Anh-Mỹ và kỹ năng biên-phiên dịch.',
      image: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      badge: 'Quốc tế',
      badgeColor: 'success',
      duration: '4 năm',
      degrees: ['Cử nhân', 'Thạc sĩ'],
      overview: 'Chương trình Ngôn ngữ Anh tập trung vào việc phát triển kỹ năng ngôn ngữ toàn diện, từ giao tiếp đến nghiên cứu học thuật. Sinh viên được học với đội ngũ giảng viên bản ngữ và có cơ hội trao đổi quốc tế.',
      specializations: ['Biên-phiên dịch', 'Giảng dạy tiếng Anh', 'Ngôn ngữ học ứng dụng', 'Văn hóa Anh-Mỹ', 'Tiếng Anh thương mại'],
      careers: ['Biên dịch viên', 'Phiên dịch viên', 'Giáo viên tiếng Anh', 'Chuyên viên quan hệ quốc tế', 'Điều phối viên dự án quốc tế'],
      partners: ['British Council', 'Cambridge University Press', 'Oxford University Press', 'ETS', 'IDP Education'],
      tuition: '50.000.000 VNĐ/năm'
    },
    {
      id: 5,
      title: 'Y học',
      description: 'Chương trình đào tạo bác sĩ đa khoa với kiến thức y khoa hiện đại và kỹ năng lâm sàng.',
      image: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      badge: 'Chất lượng cao',
      badgeColor: 'warning',
      duration: '6 năm',
      degrees: ['Bác sĩ', 'Thạc sĩ', 'Tiến sĩ'],
      overview: 'Chương trình Y học đào tạo bác sĩ đa khoa chất lượng cao theo tiêu chuẩn quốc tế. Sinh viên được học tập trong môi trường y khoa hiện đại, tiếp cận với các kỹ thuật và thiết bị y tế tiên tiến.',
      specializations: ['Y học nội', 'Y học ngoại', 'Sản phụ khoa', 'Nhi khoa', 'Y học gia đình'],
      careers: ['Bác sĩ lâm sàng', 'Bác sĩ nghiên cứu', 'Bác sĩ y tế công cộng', 'Quản lý y tế', 'Chuyên gia tư vấn y khoa'],
      partners: ['Bệnh viện Bạch Mai', 'Bệnh viện Chợ Rẫy', 'Bệnh viện Việt Đức', 'WHO', 'Tổ chức Y tế Pháp'],
      tuition: '120.000.000 VNĐ/năm'
    },
    {
      id: 6,
      title: 'Kiến trúc và Quy hoạch',
      description: 'Đào tạo kiến trúc sư có khả năng thiết kế công trình và quy hoạch đô thị bền vững.',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      duration: '5 năm',
      degrees: ['Kiến trúc sư', 'Thạc sĩ'],
      overview: 'Chương trình Kiến trúc và Quy hoạch đô thị kết hợp giữa nghệ thuật, kỹ thuật và quy hoạch không gian. Sinh viên được đào tạo để trở thành kiến trúc sư toàn diện với tư duy sáng tạo và kỹ năng thực hành chuyên nghiệp.',
      specializations: ['Kiến trúc công trình', 'Quy hoạch đô thị', 'Kiến trúc nội thất', 'Thiết kế cảnh quan', 'Kiến trúc xanh'],
      careers: ['Kiến trúc sư', 'Nhà quy hoạch đô thị', 'Nhà thiết kế nội thất', 'Quản lý dự án xây dựng', 'Tư vấn thiết kế'],
      partners: ['Tập đoàn Xây dựng Hòa Bình', 'Coteccons', 'Nikken Sekkei', 'Gensler', 'Aedas'],
      tuition: '70.000.000 VNĐ/năm'
    },
  ];

  return (
    <section id="programs" className="section">
      <Container>
        <h2 className="section-title">Chương trình đào tạo</h2>
        <p className="section-subtitle">Đa dạng ngành học đáp ứng nhu cầu xã hội</p>
        
        <Row>
          {programs.map(program => (
            <Col key={program.id} md={6} lg={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                  <Card.Img 
                    variant="top" 
                    src={program.image} 
                    alt={program.title}
                    style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                  />
                  {program.badge && (
                    <div 
                      style={{ 
                        position: 'absolute', 
                        top: '10px', 
                        right: '10px' 
                      }}
                    >
                      <Badge bg={program.badgeColor} className="px-3 py-2">{program.badge}</Badge>
                    </div>
                  )}
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-primary">{program.title}</Card.Title>
                  <Card.Text>{program.description}</Card.Text>
                  <div className="mt-2 mb-3">
                    <Badge bg="light" text="dark" className="me-2 border">Thời gian: {program.duration}</Badge>
                    <Badge bg="light" text="dark" className="border">Bằng cấp: {program.degrees[0]}</Badge>
                  </div>
                  <div className="mt-auto">
                    <Button 
                      variant="primary" 
                      className="w-100"
                      onClick={() => handleShow(program)}
                    >
                      Xem chi tiết
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleClose} size="lg">
        {selectedProgram && (
          <>
            <Modal.Header closeButton className="bg-light">
              <Modal.Title className="text-primary">
                {selectedProgram.title}
                {selectedProgram.badge && (
                  <Badge bg={selectedProgram.badgeColor} className="ms-2">{selectedProgram.badge}</Badge>
                )}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="mb-4" style={{ height: '300px', overflow: 'hidden', borderRadius: '8px' }}>
                <img 
                  src={selectedProgram.image} 
                  alt={selectedProgram.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              
              <h5 className="text-primary">Tổng quan</h5>
              <p>{selectedProgram.overview}</p>
              
              <Row className="mb-3">
                <Col md={6}>
                  <Card className="h-100 shadow-sm border-0 bg-light">
                    <Card.Body>
                      <h5 className="text-primary">Thông tin chương trình</h5>
                      <ul>
                        <li><strong>Thời gian đào tạo:</strong> {selectedProgram.duration}</li>
                        <li><strong>Bằng cấp:</strong> {selectedProgram.degrees.join(', ')}</li>
                        <li><strong>Học phí:</strong> {selectedProgram.tuition}</li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="h-100 shadow-sm border-0 bg-light">
                    <Card.Body>
                      <h5 className="text-primary">Chuyên ngành</h5>
                      <ul>
                        {selectedProgram.specializations.map((spec, index) => (
                          <li key={index}>{spec}</li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              
              <Row>
                <Col md={6}>
                  <Card className="h-100 shadow-sm border-0 bg-light">
                    <Card.Body>
                      <h5 className="text-primary">Cơ hội nghề nghiệp</h5>
                      <ul>
                        {selectedProgram.careers.map((career, index) => (
                          <li key={index}>{career}</li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="h-100 shadow-sm border-0 bg-light">
                    <Card.Body>
                      <h5 className="text-primary">Đối tác doanh nghiệp</h5>
                      <ul>
                        {selectedProgram.partners.map((partner, index) => (
                          <li key={index}>{partner}</li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Đóng
              </Button>
              <Button variant="primary">
                Đăng ký tư vấn
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </section>
  );
};

export default Programs; 
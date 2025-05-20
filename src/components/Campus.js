import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab, Card } from 'react-bootstrap';

const Campus = () => {
  const [key, setKey] = useState('hanoi');

  const campuses = [
    {
      id: 'hanoi',
      name: 'Cơ sở Hà Nội',
      address: '123 Đường Giáo Dục, Quận Cầu Giấy, Hà Nội',
      description: 'Là cơ sở chính của trường, tọa lạc trên diện tích 25 hecta với kiến trúc hiện đại, cảnh quan xanh mát. Cơ sở đào tạo chính cho các ngành Công nghệ, Kinh tế và Khoa học Xã hội.',
      image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      facilities: [
        {
          id: 1,
          image: 'https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Thư viện trung tâm',
          description: 'Thư viện 5 tầng với hơn 100,000 đầu sách, 50,000 tài liệu điện tử và không gian học tập hiện đại 24/7.'
        },
        {
          id: 2,
          image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Trung tâm nghiên cứu',
          description: '15 phòng thí nghiệm được trang bị thiết bị tiên tiến phục vụ nghiên cứu và học tập.'
        },
        {
          id: 3,
          image: 'https://images.pexels.com/photos/3049422/pexels-photo-3049422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Khu thể thao',
          description: 'Khu phức hợp thể thao với sân bóng đá, sân tennis, bể bơi Olympic và phòng tập gym hiện đại.'
        },
        {
          id: 4,
          image: 'https://images.pexels.com/photos/1571450/pexels-photo-1571450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Khu ký túc xá',
          description: 'Khu ký túc xá 10 tòa nhà, cung cấp chỗ ở cho 5,000 sinh viên với đầy đủ tiện nghi.'
        }
      ]
    },
    {
      id: 'hcm',
      name: 'Cơ sở TP.HCM',
      address: '456 Đường Đại học, Quận 9, TP. Hồ Chí Minh',
      description: 'Cơ sở hiện đại tọa lạc tại khu Công nghệ cao TP.HCM, tập trung đào tạo các ngành Công nghệ thông tin, Kỹ thuật và Kinh tế số.',
      image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      facilities: [
        {
          id: 1,
          image: 'https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Thư viện số',
          description: 'Thư viện hiện đại với hơn 50,000 đầu sách, kho dữ liệu điện tử truy cập 24/7.'
        },
        {
          id: 2,
          image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Data Center',
          description: 'Trung tâm dữ liệu hiện đại phục vụ nghiên cứu và phát triển công nghệ.'
        },
        {
          id: 3,
          image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Innovation Hub',
          description: 'Không gian sáng tạo và làm việc 24/7 cho sinh viên phát triển dự án và khởi nghiệp.'
        },
        {
          id: 4,
          image: 'https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Co-working Space',
          description: 'Không gian làm việc chung hiện đại với đầy đủ tiện nghi cho sinh viên và giảng viên.'
        }
      ]
    },
    {
      id: 'danang',
      name: 'Cơ sở Đà Nẵng',
      address: '789 Đường Biển, Quận Ngũ Hành Sơn, Đà Nẵng',
      description: 'Cơ sở ven biển xinh đẹp với kiến trúc thân thiện môi trường, chuyên về đào tạo ngành Du lịch, Khách sạn và Quản lý tài nguyên biển.',
      image: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      facilities: [
        {
          id: 1,
          image: 'https://images.pexels.com/photos/5059254/pexels-photo-5059254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Trung tâm hội nghị',
          description: 'Trung tâm hội nghị hiện đại với sức chứa 1,000 người, đáp ứng các sự kiện quốc tế.'
        },
        {
          id: 2,
          image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Khách sạn mô phỏng',
          description: 'Khách sạn mô phỏng đầy đủ tính năng giúp sinh viên thực hành kỹ năng quản lý khách sạn.'
        },
        {
          id: 3,
          image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Nhà hàng thực hành',
          description: 'Nhà hàng cao cấp phục vụ thực hành cho sinh viên ngành Ẩm thực và Quản lý nhà hàng.'
        },
        {
          id: 4,
          image: 'https://images.pexels.com/photos/2351286/pexels-photo-2351286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Trung tâm nghiên cứu biển',
          description: 'Cơ sở nghiên cứu hiện đại về biển, bảo tồn và phát triển tài nguyên biển bền vững.'
        }
      ]
    }
  ];

  return (
    <section id="campus" className="section bg-light">
      <Container>
        <h2 className="section-title">Cơ sở vật chất</h2>
        <p className="section-subtitle">Môi trường học tập và sinh hoạt hiện đại trên toàn quốc</p>
        
        <Tab.Container id="campus-tabs" activeKey={key} onSelect={(k) => setKey(k)}>
          <Nav variant="pills" className="justify-content-center mb-5">
            {campuses.map(campus => (
              <Nav.Item key={campus.id}>
                <Nav.Link eventKey={campus.id} className="px-4">{campus.name}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
          
          <Tab.Content>
            {campuses.map(campus => (
              <Tab.Pane eventKey={campus.id} key={campus.id}>
                <Row className="align-items-center mb-5">
                  <Col lg={6} className="mb-4">
                    <img 
                      src={campus.image} 
                      alt={campus.name} 
                      className="img-fluid rounded shadow"
                      style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                    />
                  </Col>
                  <Col lg={6}>
                    <Card className="border-0 shadow">
                      <Card.Body className="p-4">
                        <h3 className="mb-3 text-primary">{campus.name}</h3>
                        <p className="mb-3">
                          <strong>Địa chỉ:</strong> {campus.address}
                        </p>
                        <p>{campus.description}</p>
                        <div className="d-flex mt-3">
                          <div className="me-4">
                            <h5 className="text-primary mb-1">25+</h5>
                            <p className="text-muted mb-0">Giảng đường</p>
                          </div>
                          <div className="me-4">
                            <h5 className="text-primary mb-1">15+</h5>
                            <p className="text-muted mb-0">Phòng lab</p>
                          </div>
                          <div>
                            <h5 className="text-primary mb-1">10k+</h5>
                            <p className="text-muted mb-0">Sinh viên</p>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                
                <h4 className="text-center mb-4 text-primary">Tiện nghi nổi bật</h4>
                <Row>
                  {campus.facilities.map(facility => (
                    <Col key={facility.id} md={6} lg={3} className="mb-4">
                      <Card className="h-100 border-0 shadow hover-zoom">
                        <div style={{ height: '200px', overflow: 'hidden' }}>
                          <Card.Img 
                            variant="top" 
                            src={facility.image} 
                            alt={facility.title}
                            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                          />
                        </div>
                        <Card.Body>
                          <Card.Title className="text-primary">{facility.title}</Card.Title>
                          <Card.Text>{facility.description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  );
};

export default Campus; 
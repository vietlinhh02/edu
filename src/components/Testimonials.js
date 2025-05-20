import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      position: 'Cựu sinh viên, Khoa CNTT',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      quote: 'Thời gian học tập tại Đại Học sjok.me là khoảng thời gian tuyệt vời nhất trong cuộc đời tôi. Tôi đã được trang bị đầy đủ kiến thức và kỹ năng để tự tin bước vào thị trường lao động.',
      year: '2020',
      currentJob: 'Senior Software Engineer tại Google',
      achievement: 'Phát triển ứng dụng AI với hơn 1 triệu người dùng'
    },
    {
      id: 2,
      name: 'Trần Thị B',
      position: 'Sinh viên năm 3, Khoa Kinh tế',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      quote: 'Môi trường học tập năng động, thầy cô giàu kinh nghiệm và nhiệt tình giúp đỡ sinh viên. Tôi cảm thấy rất may mắn khi được học tập ở ngôi trường này.',
      year: 'Hiện tại',
      achievement: 'Đạt học bổng trao đổi tại Đại học Harvard, Mỹ',
      internship: 'Thực tập tại Unilever Việt Nam'
    },
    {
      id: 3,
      name: 'Lê Văn C',
      position: 'Cựu sinh viên, CEO Công ty ABC',
      image: 'https://randomuser.me/api/portraits/men/62.jpg',
      quote: 'Những kiến thức và kỹ năng tôi học được tại Đại Học sjok.me đã giúp tôi rất nhiều trong sự nghiệp. Tôi luôn tự hào là cựu sinh viên của trường.',
      year: '2015',
      currentJob: 'Founder & CEO tại ABC Technology',
      achievement: 'Gọi vốn thành công 5 triệu USD cho startup'
    },
    {
      id: 4,
      name: 'Hoàng Thị D',
      position: 'Cựu sinh viên, Khoa Y',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      quote: 'Đại học sjok.me không chỉ dạy tôi kiến thức chuyên môn mà còn trang bị kỹ năng mềm, đạo đức nghề nghiệp, và tầm nhìn quốc tế. Những điều đó rất quan trọng trong công việc của tôi.',
      year: '2018',
      currentJob: 'Bác sĩ tại Bệnh viện Quốc tế',
      achievement: 'Nhận học bổng nghiên cứu tại Nhật Bản'
    },
    {
      id: 5,
      name: 'Bùi Văn E',
      position: 'Cựu sinh viên, Khoa Kiến trúc',
      image: 'https://randomuser.me/api/portraits/men/55.jpg',
      quote: 'Chương trình đào tạo thực tiễn và cơ sở vật chất hiện đại tại sjok.me giúp tôi có nền tảng vững chắc để phát triển sự nghiệp quốc tế. Tôi trân trọng mọi khoảnh khắc tại đây.',
      year: '2017',
      currentJob: 'Kiến trúc sư tại Foster + Partners, London',
      achievement: 'Giải thưởng Kiến trúc sư trẻ xuất sắc 2022'
    },
    {
      id: 6,
      name: 'Ngô Thị F',
      position: 'Sinh viên năm 4, Khoa Ngôn ngữ Anh',
      image: 'https://randomuser.me/api/portraits/women/22.jpg',
      quote: 'Tôi đã có cơ hội tham gia chương trình trao đổi quốc tế và trải nghiệm văn hóa mới. Đại học sjok.me thực sự mở ra cánh cửa toàn cầu cho sinh viên.',
      year: 'Hiện tại',
      achievement: 'Quán quân cuộc thi hùng biện tiếng Anh toàn quốc',
      internship: 'Thực tập tại British Council'
    }
  ];

  return (
    <section id="testimonials" className="section">
      <Container>
        <h2 className="section-title">Cảm nhận của sinh viên</h2>
        <p className="section-subtitle">Những chia sẻ từ cộng đồng sinh viên sjok.me</p>
        
        <div className="text-center mb-5 py-4 px-3 bg-light rounded shadow-sm">
          <h4 className="text-primary mb-4">Tỷ lệ hài lòng của sinh viên</h4>
          <div className="d-flex justify-content-center flex-wrap gap-5">
            <div className="stat-item">
              <h2 className="text-primary mb-0 display-4">98%</h2>
              <p className="text-secondary">Hài lòng với chất lượng đào tạo</p>
            </div>
            <div className="stat-item">
              <h2 className="text-primary mb-0 display-4">95%</h2>
              <p className="text-secondary">Hài lòng với cơ sở vật chất</p>
            </div>
            <div className="stat-item">
              <h2 className="text-primary mb-0 display-4">92%</h2>
              <p className="text-secondary">Hài lòng với đội ngũ giảng viên</p>
            </div>
          </div>
        </div>
        
        <Row className="justify-content-center">
          {testimonials.map(testimonial => (
            <Col key={testimonial.id} md={6} lg={4} className="mb-4">
              <Card className="h-100 testimonial-card border-0 shadow">
                <Card.Body className="text-center p-4">
                  <div 
                    className="testimonial-image mx-auto mb-4"
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '5px solid var(--primary-color)'
                    }}
                  >
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <Card.Text className="font-italic mb-4 fst-italic">"{testimonial.quote}"</Card.Text>
                  <h5 className="mb-1 text-primary">{testimonial.name}</h5>
                  <p className="text-secondary mb-2">{testimonial.position}</p>
                  <p className="text-muted small mb-0">Tốt nghiệp: {testimonial.year}</p>
                  
                  {testimonial.currentJob && (
                    <p className="text-primary small mb-0">{testimonial.currentJob}</p>
                  )}
                  
                  {testimonial.achievement && (
                    <div className="mt-3 p-2 bg-light rounded">
                      <strong className="text-secondary">Thành tích:</strong> {testimonial.achievement}
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-5">
          <p className="mb-4">Xem thêm câu chuyện thành công của hơn 100,000 cựu sinh viên sjok.me trên toàn cầu</p>
          <Button variant="primary" size="lg" className="px-5 rounded-pill">Xem thêm cảm nhận</Button>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials; 
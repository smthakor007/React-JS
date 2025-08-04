import React from 'react';
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Carousel,
} from 'react-bootstrap';

const cardData = [
  {
    id: 1,
    title: 'Beautiful Landscape',
    image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg',
  },
  {
    id: 2,
    title: 'Space Galaxy',
    image: 'https://png.pngtree.com/thumb_back/fh260/background/20240715/pngtree-galactic-panorama-a-journey-through-space-image_15994831.jpg',
  },
  {
    id: 3,
    title: 'Ocean Vibes',
    image: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg',
  },
  {
    id: 4,
    title: 'Sunset Glory',
    image: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg',
  },
];

function Home() {
  const styles = {
    navbar: {
      backgroundColor: '#000',
    },
    navBrand: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#fff',
    },
    navLink: {
      color: '#ccc',
      fontSize: '18px',
      marginRight: '15px',
    },
    sectionHeading: {
      textAlign: 'center',
      fontSize: '36px',
      margin: '50px 0 20px',
      color: '#222',
    },
    cardSection: {
      padding: '40px 20px',
      backgroundColor: '#f5f5f5',
    },
    cardGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
    },
    cardImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    cardContent: {
      padding: '15px',
      fontSize: '18px',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    aboutSection: {
      backgroundColor: '#fff',
      padding: '60px 20px',
      textAlign: 'center',
    },
    aboutText: {
      maxWidth: '800px',
      margin: 'auto',
      fontSize: '18px',
      color: '#555',
      lineHeight: '1.7',
    },
    contactSection: {
      backgroundColor: '#f8f9fa',
      padding: '60px 20px',
      textAlign: 'center',
    },
    contactForm: {
      maxWidth: '600px',
      margin: 'auto',
      textAlign: 'left',
    },
    footer: {
      backgroundColor: '#111',
      color: '#ccc',
      textAlign: 'center',
      padding: '30px 15px',
    },
    footerLink: {
      color: '#aaa',
      margin: '0 10px',
      textDecoration: 'none',
      fontSize: '16px',
    },
  };

  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" variant="dark" style={styles.navbar}>
        <Container>
          <Navbar.Brand href="#" style={styles.navBrand}>
            Unique Page 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link href="#slider" style={styles.navLink}>Home</Nav.Link>
              <Nav.Link href="#gallery" style={styles.navLink}>Gallery</Nav.Link>
              <Nav.Link href="#about" style={styles.navLink}>About</Nav.Link>
              <Nav.Link href="#contact" style={styles.navLink}>Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control type="text" placeholder="Search" className="me-2" />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Slider */}
      <div id="slider">
        <Carousel fade>
          {[
            {
              title: 'Nature',
              subtitle: 'Explore natural beauty',
              image: 'https://images.pexels.com/photos/4383745/pexels-photo-4383745.jpeg',
            },
            {
              title: 'Ocean',
              subtitle: 'Dive into the blue',
              image: 'https://images.pexels.com/photos/220213/pexels-photo-220213.jpeg',
            },
            {
              title: 'Sky',
              subtitle: 'Fly beyond the clouds',
              image: 'https://images.pexels.com/photos/46160/field-clouds-sky-earth-46160.jpeg',
            },
          ].map((slide, index) => (
            <Carousel.Item key={index} interval={2000}>
              <img
                className="d-block w-100"
                src={slide.image}
                alt={slide.title}
                style={{ height: '500px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h3>{slide.subtitle}</h3>
                <h1>{slide.title}</h1>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Gallery Section */}
      <section id="gallery" style={styles.cardSection}>
        <h2 style={styles.sectionHeading}>Image Gallery</h2>
        <div style={styles.cardGrid}>
          {cardData.map((card) => (
            <div key={card.id} style={styles.card}>
              <img src={card.image} alt={card.title} style={styles.cardImage} />
              <div style={styles.cardContent}>{card.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.aboutSection}>
        <h2 style={styles.sectionHeading}>About Us</h2>
        <p style={styles.aboutText}>
          We are a creative team passionate about visual design, tech innovation, and user experience. Our mission is to deliver modern interfaces that look great and perform seamlessly.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.contactSection}>
        <h2 style={styles.sectionHeading}>Contact Us</h2>
        <Form style={styles.contactForm}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Your name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Your email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Your message" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Send Message
          </Button>
        </Form>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={{ marginBottom: '10px' }}>
          <a href="#slider" style={styles.footerLink}>Home</a>
          <a href="#gallery" style={styles.footerLink}>Gallery</a>
          <a href="#about" style={styles.footerLink}>About</a>
          <a href="#contact" style={styles.footerLink}>Contact</a>
        </div>
        <p>© 2025 Unique Page. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Home;

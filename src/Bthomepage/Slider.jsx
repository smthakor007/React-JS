import Carousel from 'react-bootstrap/Carousel';


function Slider() {
  return (
    <Carousel fade>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/4383745/pexels-photo-4383745.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Slide 1</h2>
          <p><h1>Nature</h1></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/220213/pexels-photo-220213.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2> Slide 2</h2>
          <p><h1>Water</h1></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2> slide 3</h2>
          <p><h1>Cloud</h1></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;

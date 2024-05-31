import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import Container from "../../containers/container";

export default function index(img) {
  return (
    <Container>
      <div
        style={{
          display: "block",
          width: "100%",  
          padding: 30,
          margin: "0 auto",
        }}
      >
        <Carousel>
          <Carousel.Item interval={1500}>
            <div className="relative left-[170px] top-[60px]">
              <img src={img.text} className="absolute top-[-20px] w-[1100px] -z-10" alt="img" />
              <img
                className="d-block w-[1020px] relative z-0"
                src={img.img}
                alt="Image One"
              />
            </div>
            <Carousel.Caption className="relative z-30"></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <div className="relative left-[170px] top-[60px]">
              <img src={img.text} className="absolute top-[-20px] w-[1100px] -z-10" alt="img" />
              <img
                className="d-block w-[1020px] relative z-0"
                src={img.img}
                alt="Image Two"
              />
            </div>
            <Carousel.Caption className="relative z-30"></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <div className="relative left-[170px] top-[60px]">
              <img src={img.text} className="absolute top-[-20px] w-[1100px] -z-10" alt="img" />
              <img
                className="d-block w-[1020px] relative z-0"
                src={img.img}
                alt="Image Three"
              />
            </div>
            <Carousel.Caption className="relative z-30"></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
}
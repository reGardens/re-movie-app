import Carousel from "react-bootstrap/Carousel";
import { useSelector } from "react-redux";

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";

const ImageSlider = () => {
  const baseImgUrl = "https://image.tmdb.org/t/p/original";
  const movies = useSelector((state) => state.reducer.data);

  return (
    <div className="image-wrap">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${baseImgUrl}${movies[1]?.poster_path}`}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${baseImgUrl}${movies[1]?.poster_path}`}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`${baseImgUrl}${movies[1]?.poster_path}`}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageSlider;

import { Carousel } from "react-bootstrap";
import styles from "./Testimonials.css"; 

const Testimonials = () => {
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui.",
      image: "/examples/images/clients/1.jpg",
      name: "Paula Wilson",
      position: "Media Analyst / SkyNet",
      rating: 4,
    },
    {
      text: "Vestibulum quis quam ut magna consequat faucibus. Duis tristique metus eu posuere viverra.",
      image: "/examples/images/clients/2.jpg",
      name: "Antonio Moreno",
      position: "Web Developer / SoftBee",
      rating: 5,
    },
    {
      text: "Donec vel libero ac sapien luctus faucibus. Sed vehicula nisi ut lectus aliquam, a ultricies lectus bibendum.",
      image: "/examples/images/clients/3.jpg",
      name: "Michael Holz",
      position: "Web Developer / DevCorp",
      rating: 4,
    },
  ];

  return (
    <div className={ container}>
      <h2>
        Customer <b>Testimonials</b>
      </h2>
      <Carousel>
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <div className={ testimonial}>
              <p className={ text}>{testimonial.text}</p>
              <div className={ media}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={ image}
                />
                <div className={ mediaBody}>
                  <div className={ name}>{testimonial.name}</div>
                  <div className={ position}>{testimonial.position}</div>
                  <div className={ starRating}>
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={
                          i < testimonial.rating
                            ? "fa fa-star " +  star
                            : "fa fa-star-o " +  star
                        }
                      ></i>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;

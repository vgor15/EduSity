import "./App.css";
import About from "./components/About/About";
import Campus from "./components/Campus Photos/Campus";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Program/Programs";
import Testimonials from "./components/Testimonial/Testimonials";
import Title from "./components/Title/Title";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Programs" title="What we offer" />
        <Programs />
        <About />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="Testimonials" title="What our students says" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <C
      </div>
    </div>
  );
};

export default App;

import "./App.css";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Program/Programs";
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
        <Title subTitle="Gallery" title="Camous " />
      </div>
    </div>
  );
};

export default App;

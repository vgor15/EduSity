import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Program/Programs";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Programs />
    </div>
  );
};

export default App;

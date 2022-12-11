import Heading from "../../components/heading/Heading";
import NavBar from "../../components/navBar/NavBar";
import Details from "./details/Details";

const About = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-screen-2xl">
      <NavBar />
      <Heading name='About'/>
      <Details />
    </div>
  );
};

export default About;

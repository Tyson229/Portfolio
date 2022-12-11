import NavBar from "../../components/navBar/NavBar";
import Introduction from "./introduction/Introduction";
import "./Home.scss";
const Home = () => {
  return (
    <div className="style flex flex-col items-center w-full max-w-screen-2xl">
      <NavBar></NavBar>
      <Introduction />
    </div>
  );
};

export default Home;

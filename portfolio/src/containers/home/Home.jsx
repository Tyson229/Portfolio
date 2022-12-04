import NavBar from "../../components/navBar/NavBar";
import Introduction from "./introduction/Introduction";
import "./Home.scss";
const Home = () => {
  return (
    <div className="style">
      <NavBar></NavBar>
      <Introduction />
    </div>
  );
};

export default Home;

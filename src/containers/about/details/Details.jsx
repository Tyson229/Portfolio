import TabBar from "../../../components/tabBar/TabBar";
import Education from "../../../components/education/Education";
import Skills from "../../../components/skills/Skills";
import Hobbies from "../../../components/hobbies/Hobbies";
const Details = () => {
  return (
    <div className=" flex flex-col lg:justify-center w-full lg:grid lg:grid-cols-2 lg:grid-rows-3 p-5">
      
        <div className="lg:row-span-3 flex justify-center items-center">
          <img
            src="/profile.jpg"
            className="rounded w-full max-w-lg"
          />
        </div>
        <Education />
        <Skills />
        <Hobbies />
    </div>
  );
};

export default Details;

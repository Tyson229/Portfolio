import TabBar from "../../../components/tabBar/TabBar";
import Education from "../../../components/education/Education";
import Skills from "../../../components/skills/Skills";
import Hobbies from "../../../components/hobbies/Hobbies";
const Details = () => {
  return (
    <div className="h-full">
      <TabBar name="About Me" />
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-3 px-10 pb-10 gap-6 box-border">
        <div className="lg:row-span-3 lg:flex lg:items-center lg:justify-center">
          <img src='../../../public/profile.jpg' className="rounded w-full max-w-screen-md "/>
        </div>
        <Education/>
        <Skills/>
        <Hobbies/>
      </div>
    </div>
  )
}

export default Details;
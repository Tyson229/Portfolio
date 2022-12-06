import TabBar from "../../../components/tabBar/TabBar";
import Education from "../../../components/education/Education";
import Skills from "../../../components/skills/Skills";
import Hobbies from "../../../components/hobbies/Hobbies";
const Details = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="lg:hidden">
        <TabBar name="About Me" className="lg:hidden"/>
      </div>
      <div className="flex flex-col px-10 pb-10 gap-6 box-border lg:grid lg:grid-cols-2 lg:grid-rows-4">
        <div className="lg:row-span-4">
          <img src='../../../public/profile.jpg' className="rounded w-full"/>
        </div>
        <div className="hidden lg:flex lg:items-center">
          <TabBar name="About Me"/>
        </div>
        <Education/>
        <Skills/>
        <Hobbies/>
      </div>
    </div>
  )
}

export default Details;
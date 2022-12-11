import { BiCodeAlt } from "react-icons/bi";
import { RxCamera } from "react-icons/rx";
import { CgIfDesign } from "react-icons/cg";
import { RiCustomerService2Line } from "react-icons/ri";
import Card from "../card/Card";
const Skills = () => {
  return (
    <div className="flex flex-col box-border gap-2">
      <div className="text-lg">SKILLS</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <Card image={<BiCodeAlt size={"2em"} />} title="Programming" />
        <Card image={<RxCamera size={"2em"} />} title="Photography" />
        <Card image={<CgIfDesign size={"2em"} />} title="Design" />
        <Card
          image={<RiCustomerService2Line size={"2em"} />}
          title="Customer Service"
        />
      </div>
    </div>
  );
};
export default Skills;

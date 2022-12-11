import { GiConverseShoe } from "react-icons/gi";
import { MdOutlineCoffee } from "react-icons/md";
import { BiDumbbell } from "react-icons/bi";
import { BsPuzzle } from "react-icons/bs";
import Card from "../card/Card";
const Hobbies = () => {
  return (
    <div className="flex flex-col box-border gap-2">
      <div className="text-lg">HOBBIES</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <Card image={<GiConverseShoe size={"2em"} />} title="Sneakers" />
        <Card image={<MdOutlineCoffee size={"2em"} />} title="Coffee" />
        <Card image={<BiDumbbell size={"2em"} />} title="Workout" />
        <Card image={<BsPuzzle size={"2em"} />} title="Puzzle" />
      </div>
    </div>
  );
};
export default Hobbies;

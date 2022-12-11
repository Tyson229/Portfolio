import TabBar from "../../../components/tabBar/TabBar";
import { FaSass } from "react-icons/fa";
import {
  SiTypescript,
  SiNestjs,
  SiJava,
  SiCplusplus,
  SiTailwindcss,
  SiReact,
  SiMysql,
} from "react-icons/si";
import { DiPhp, DiJavascript1 } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";

const Tech = () => {
  const iconArr = [AiOutlineHtml5, TbBrandCss3, DiJavascript1, SiTypescript, SiNestjs,SiJava,DiPhp,FaSass,SiTailwindcss,SiReact,SiMysql ];
  return (
    <div className="w-full max-w-screen-2xl">
      <TabBar name="Tech"/>
      <div className="flex flex-wrap justify-center items-center gap-10 box-border w-full">
        {iconArr.map((icon, i) => {
          return (
            <div className="p-3" key={i}>
              {icon({ size: "3em" })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tech;

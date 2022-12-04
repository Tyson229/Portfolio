import TabBar from "../../../components/tabBar/TabBar";
import { FaSass } from "react-icons/fa";
import {SiTypescript, SiNestjs, SiJava, SiCplusplus, SiTailwindcss, SiReact, SiMysql} from 'react-icons/si';
import {DiPhp, DiJavascript1} from 'react-icons/di';
import {AiOutlineHtml5} from 'react-icons/ai';
import {TbBrandCss3} from 'react-icons/tb';
const Tech = () => {
  return (
    <div className="w-full h-full">
      <TabBar name="Tech" />
      <div className="flex flex-wrap justify-center py-20 px-5 gap-10 box-border">
        <div className="flex justify-center items-center">
          <AiOutlineHtml5 size='4em' />
        </div>
        <div className="flex justify-center items-center">
          <TbBrandCss3 size='4em' />
        </div>
        <div className="flex justify-center items-center">
          <DiJavascript1 size='4em'/>
        </div>
        <div className="flex justify-center items-center">
          <SiTypescript size='4em'/>
        </div>
        <div className="flex justify-center items-center">
          <SiNestjs size='4em'/>
        </div>
        <div className="flex justify-center items-center">
          <SiJava size='4em'/>
        </div>
        <div className="flex justify-center items-center">
          <SiCplusplus size='4em'/>
        </div>
        <div className="flex justify-center items-center">
          <DiPhp size='4em'/>
        </div>
        <div className="flex justify-center items-center">
          <FaSass size='4em'/>
        </div>
        <div className="flex justify-center items-center">
          <SiTailwindcss size='4em'/>
        </div>
        <div className="flex justify-center items-center">
          <SiReact size='4em'/>
        </div>
        <div className="flex justify-center items-center">
          <SiMysql size='4em'/>
        </div>

      </div>
    </div>
  );
};

export default Tech;

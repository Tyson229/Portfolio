import {BiCodeAlt} from 'react-icons/bi';
import {RxCamera} from 'react-icons/rx';
import {CgIfDesign} from 'react-icons/cg';
import {RiCustomerService2Line} from 'react-icons/ri'
const Skills = () => {
  return (
    <div className="flex flex-col box-border gap-2">
      <div className="font-bold">SKILLS</div>
      <div className="grid grid-cols-2 box-border rounded bg-white">
        <div className='flex flex-col justify-center items-center p-10 box-border '>
          <BiCodeAlt size={'2em'}/>
          <div className="text-center">Programming</div>
        </div>
        <div className='flex flex-col justify-center items-center p-10 box-border '>
          <RxCamera size={'2em'}/>
          <div className="text-center">Photography</div>
        </div>
        <div className='flex flex-col justify-center items-center p-10 box-border '>
          <CgIfDesign size={'2em'}/>
          <div className="text-center">Design</div>
        </div>
        <div className='flex flex-col justify-center items-center p-10 box-border'>
          <RiCustomerService2Line size={'2em'}/>
          <div className="text-center">Customer Service</div>
        </div>
      </div>
    </div>
  );
};
export default Skills;

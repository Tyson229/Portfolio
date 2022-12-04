import {GiConverseShoe} from 'react-icons/gi';
import {MdOutlineCoffee} from 'react-icons/md'
import {BiDumbbell} from 'react-icons/bi';
import {BsPuzzle} from 'react-icons/bs'
const Hobbies = () => {
  return (
    <div className="flex flex-col box-border gap-2">
      <div className="font-bold">HOBBIES</div>
      <div className="grid grid-cols-2 box-border gap-3 bg-white rounded">
        <div className='flex flex-col justify-center items-center p-10 box-border'>
          <GiConverseShoe size={'2em'}/>
          <div className="text-center">Sneakers</div>
        </div>
        <div className='flex flex-col justify-center items-center p-10 box-border '>
          <MdOutlineCoffee size={'2em'}/>
          <div className="text-center">Coffee</div>
        </div>
        <div className='flex flex-col justify-center items-center p-10 box-border '>
          <BiDumbbell size={'2em'}/>
          <div className="text-center">Workout</div>
        </div>
        <div className='flex flex-col justify-center items-center p-10 box-border '>
          <BsPuzzle size={'2em'}/>
          <div className="text-center">Puzzle</div>
        </div>
      </div>
    </div>
  );
};
export default Hobbies;

import Heading from "../../components/heading/Heading";
import NavBar from "../../components/navBar/NavBar";
import {BsGithub} from 'react-icons/bs'

const Connect = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-screen-2xl">
      <NavBar/>
      <div className="">
        <Heading name='Connect'/>
        <div className="flex flex-col bg-white/80 justify-center w-full p-5">
          <div>
            <BsGithub size={'2em'}/>
            <div>Tyson229</div>
          </div>
          <div>
            <BsGithub size={'2em'}/>
            <div>Tyson229</div>
          </div>
          <div>
            <BsGithub size={'2em'}/>
            <div>Tyson229</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connect;
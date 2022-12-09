import Heading from "../../components/heading/Heading";
import NavBar from "../../components/navBar/NavBar";
import Projects from "./projects/Projects";
import Tech from "./tech/Tech";

const Work = () => {
    return (
        <div className="flex flex-col items-center box-border w-full pb-10 max-w-screen-2xl">
            <NavBar/>
            <Heading name={'Work'}/>
            <Projects/>
            <Tech/>
        </div>
    )
}

export default Work;
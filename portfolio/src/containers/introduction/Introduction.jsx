import NavBar from "../../components/navBar/NavBar";
import { IoApertureOutline } from "react-icons/io5";
import TabBar from "../../components/tabBar/TabBar";

const Introduction = () => {
  return (
    <div className="">
      <NavBar></NavBar>
      <div className="w-full box-border flex flex-col justify-center items-center">
        {/* <div className="hidden md:grid grid-cols-3 grid-rows-3 w-full max-w-screen-xl box-border">
                    <div className="row-span-3 col-span-2 relative">
                        <img src="../../../public/profile.jpg" className="w-full"></img>
                        <div className="absolute top-2 left-0 justify-center items-center -space-x-5"> 
                            <div className="z-40 flex justify-center items-center w-4 h-4 outline"></div>
                            <div className="z-0 flex justify-center items-center w-4 h-4 rounded-full bg-black"></div>
                        </div>
                    </div>
                    <div className="bg-black m-2 text-white flex items-center rounded-full ">Tien Nguyen</div>
                </div> */}

        <div
          className="flex flex-col justify-center items-center
                 p-10 box-border overflow-hidden md:flex-row"
        >
          <div>
            <div className="text-2xl text-black/60 w-full text-end">
              Hi, you've just met
            </div>
            <div className="text-5xl w-full text-end">Tien Khoa Nguyen</div>
            <img
              src="../../../public/profile.jpg"
              className="rounded my-5"
            ></img>
          </div>

          <div className="w-full">
            <div className="w-full text-xl mb-3">Roles</div>
            <div className="grid grid-cols-3 w-full box-border gap-9 md:flex md:flex-col">
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1336/1336494.png"
                  className="w-8"
                ></img>
                <div className="font-semibold">Web Developer</div>
              </div>
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1583/1583198.png"
                  className="w-8"
                ></img>
                <div className="font-semibold">Junior Designer</div>
              </div>
              <div>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2560/2560114.png"
                  className="w-8"
                ></img>
                <div className="font-semibold">Software Engineer</div>
              </div>
            </div>
          </div>
        </div>
        <TabBar name="About"></TabBar>
        <div className="w-full flex flex-col p-5 ">
            <div className="italic">Graduated ICT degree</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vero aspernatur nihil doloremque totam at dicta magni eos pariatur aut, dolores corporis cupiditate, tenetur accusamus fuga praesentium voluptas blanditiis adipisci.</div>
            <div className="italic mt-5">Graduated ICT degree</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed vero aspernatur nihil doloremque totam at dicta magni eos pariatur aut, dolores corporis cupiditate, tenetur accusamus fuga praesentium voluptas blanditiis adipisci.</div>
        </div>
       <TabBar name="Tech"></TabBar>
      </div>
    </div>
  );
};

export default Introduction;

import Roles from "../../../components/roles/Roles";
import DecorationBars from "../../../components/decorationBars/DecorationBars";
import { Link } from "react-router-dom";
const Introduction = () => {
  return (
    <div
      className="h-screen w-full flex flex-col justify-center
                 p-10 box-border "
    >
      <div className="h-full flex flex-col md:grid md:grid-cols-2 justify-center w-full gap-1 box-border">
        <div className="w-full flex flex-col justify-center">
          <div className="text-2xl text-black/60 w-full text-end">
            Hi, you've just met
          </div>
          <div className="text-5xl w-full text-end py-4 rounded">
            Tien Khoa Nguyen
          </div>
          <Roles />
          <DecorationBars />
        </div>
        <div className="flex flex-col w-full md:justify-center text-end md:text-center pt-10 box-border gap-5">
          <Link to="/about" className="uppercase text-lg">
            About.
          </Link>
          <Link to="/work" className="uppercase text-lg">
            Work.
          </Link>
          <Link to="/connect" className="uppercase text-lg">
            Connect.
          </Link>
        </div>
      </div>
      <div className="flex w-full justify-between items-center mt-10">
        <div className="text-black/30">Designed with love</div>
        <div className="w-4 h-4 outline-dashed opacity-20 rounded-full"></div>
      </div>
    </div>
  );
};
export default Introduction;

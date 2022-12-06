import { TbCertificate } from "react-icons/tb";
const Education = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-lg">EDUCATION</div>
      <div className="flex box-border gap-5 p-5 items-center w-full">
        <TbCertificate size={"3em"} />
        <div className="flex flex-col gap-2 rounded">
          <div className="">
            Bachelor of Information and Communications Technology (ICT)
          </div>
          <div className="italic font-semibold">With Distinction</div>
          <div className="text-gray-400 text-justify">
            at Western Sydney University (2019-2022)
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;

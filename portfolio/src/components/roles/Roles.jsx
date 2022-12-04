const Roles = () => {
  return (
    <div className="w-full my-3">
      <div className="grid grid-cols-3 w-full box-border gap-9">
        <div className="flex flex-col items-end justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1336/1336494.png"
            className="w-8 sm:w-10"
          ></img>
          <div className="font-semibold text-sm text-end">Web Developer</div>
        </div>
        <div className="flex flex-col items-end justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1583/1583198.png"
            className="w-8 sm:w-10"
          ></img>
          <div className="font-semibold text-sm text-end">Junior Designer</div>
        </div >
        <div className="flex flex-col items-end justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2560/2560114.png"
            className="w-8 sm:w-10"
          ></img>
          <div className="font-semibold text-sm text-end">Software Engineer</div>
        </div>
      </div>
    </div>
  );
};

export default Roles;

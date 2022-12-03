const TabBar = ({name}) => {
  return (
    <>
      <div className="py-5 px-10 bg-gray-100 w-full flex items-center box-border">
          <div className="w-full text-xl font">{name}</div>
          <div className="flex -space-x-1">
            <div className="w-4 h-4 bg-black rounded-full"></div>
            <div className="w-4 h-4 bg-slate-500 rounded-full"></div>
          </div>
        </div>
    </>
  )
}

export default TabBar;
const Card = ({image, title}) => {
  return (
    <div className='flex flex-col justify-center items-center p-7'>
          {image}
          <div className="text-center">{title}</div>
        </div>
  )
} 

export default Card;
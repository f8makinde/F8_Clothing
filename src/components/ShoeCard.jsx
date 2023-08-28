import React from 'react'

const ShoeCard = ({imgURL, changeCloth, cloth}) => {
    const handleClick = () => {
        if(cloth !== imgURL.cloth){
            changeCloth(imgURL.cloth)
        }
    }
    
  return (
    <div className={`border-2 rounded-xl
    ${cloth === imgURL.cloth ? 'border-purple' : 'border-transparent'}
    cursor-pointer max-sm:flex-1
    `} onClick={handleClick}>
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img src={imgURL.thumbnail} alt="small-image" width={127}
          height={103.34} 
          className='object-contain max-w-full max-h-full'/>
      </div>
    </div>
  )
}

export default ShoeCard

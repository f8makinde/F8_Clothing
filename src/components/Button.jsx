import React from 'react'

const Button = ({label, iconURL, backgroundColor,borderColor,textColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : `bg-purple text-white`}
    rounded-full ${fullWidth && 'w-full'}`}>
      {label}
      {iconURL && <img src={iconURL} alt="arrow-right icon"
      className='ml-2 rounded-full w-6 h -6' />}
    </button>
  )
}

export default Button

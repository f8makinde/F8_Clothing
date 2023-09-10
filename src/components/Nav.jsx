import {header} from "../assets/images"
import { hamburger } from "../assets/icons"
import { navLinks } from '../constants'
import { useState } from "react"
const Nav = () => {
  const [openNav, setOpenNav] = useState(false)
  return (
    <header className='md:padding-x py-4 absolute z-10 w-full'>
      <nav className='flex justify-between max-container items-center'>
        <a href="/" >
            <img src={header} alt="nike-logo" width={80} height={20}/>
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
                <a className='font-montserrat leading-normal text-lg text-slate-gray' href={item.href}>
                    {item.label}
                </a>
            </li>
          ))}
        </ul>
     
      </nav>
      <div className="hidden max-lg:block h-full fixed w-full"    onClick={() => setOpenNav((open) => !open)}>
        <div className="flex justify-between items-center px-4">
      {/* <a href="/">
            <img src={header} alt="nike-logo" width={40} height={20}/>
        </a>  */}
        {openNav ? <button>❌</button> : <button>
        <img src={hamburger} alt="hamburger-icon" width={25} height={25} className="flex justify-end items-end"/>
</button>}
</div>
{openNav &&  <div className=" bg-black/80  w-full h-full px-4">
        
        <ul className='flex-col justify-start items-start flex w-full'>
         {navLinks.map((item) => (
           <li key={item.label}>
               <a className='font-montserrat leading-normal text-lg text-white' href={item.href}>
                   {item.label}
               </a>
           </li>
         ))}
       </ul>
       </div>}
       </div>
    </header>
  )
}

export default Nav

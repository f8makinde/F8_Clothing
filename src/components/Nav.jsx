import {header} from "../assets/images"
import { hamburger } from "../assets/icons"
import { navLinks } from '../constants'
const Nav = () => {
  return (
    <header className='padding-x py-4 absolute z-10 w-full'>
      <nav className='flex justify-between max-container items-center'>
        <a href="/">
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
        <div className="hidden max-lg:block">
            <img src={hamburger} alt="hamburger-icon" width={25} height={25}/>
        </div>
      </nav>
    </header>
  )
}

export default Nav

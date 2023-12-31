import { useState } from "react"
import { arrowRight } from "../assets/icons"

import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import {shoes, statistics} from "../constants"
import { cloth1 } from "../assets/images"
const Hero = () => {
  const [cloth, setCloth] = useState(cloth1)
  return (
    <section id="home" className="w-full max-sm:overflow-hidden flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full   max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-purple">Our Summer collections</p>
        <h1 className="mt-10 font-palanquin xl:text-8xl lg:text-[90px] md:text-[86px] sm:text-[64px]  text-4xl leading-[72px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-purple pr-10 flex flex-wrap mt-3">F8_Clothing</span>
Store
</h1>
 <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">"Elevate Your Style: Discover Fashion at its Finest with F8_Clothing. Unveil Your Unique Elegance Today!"</p>
   <Button label="Shop now" iconURL={arrowRight} />
   <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
    {statistics.map((stat) => {
      return<div key={stat.label}>
        <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
        <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
        </div>
    })}
   </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={cloth} alt="shoe"
        width={610} height={500} className="object-contain relative z-10"/>
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
           {shoes.map((shoe) => {
            return(
              <div key={shoe}>
              <ShoeCard imgURL={shoe} changeCloth={(shoe) => {
                setCloth(shoe)
              }}
              cloth={cloth}/>
              </div>
            )
           })}
        </div>
      </div>
    </section>
  )
}

export default Hero

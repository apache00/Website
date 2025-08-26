"use client";

import React from 'react'
import Image from 'next/image'
import LocationMap from './LocationMap'

const Stores = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        {/* <Image src="/products.png" alt="camp" width={128} height={128} /> */}
        <p className="uppercase regular-18 -mt-1 mb-3 text-primary-hpj">
          
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Our Stores</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
        </p>
        </div>

        <h3 className="bold-20 lg:bold-32 pt-16 capitalize">Purani Bazar</h3>
      <p className="regular-16  bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
      <a href="https://www.google.com/maps?q=26.1237455,85.3934585" target="_blank" className="regular-16 ml-1 flex "><Image src="/location.svg" alt="location" width={48} height={48} />Purani Bazar, Sonarpatti, Muzaffarpur. (Click to locate us on google map)</a></p>
      {/* <LocationMap lat={26.1237455} lng={85.3934585} label="Hira Panna Jewellers - Purani Bazar" /> */}
      <h3 className="bold-20 lg:bold-32 pt-16 capitalize">Brahampura</h3>
      <p className="regular-16  bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
          <a href="https://www.google.com/maps?q=26.1350801,85.3651653" target="_blank" className="regular-16 ml-1 flex "><Image src="/location.svg" alt="location" width={48} height={48} />Brahampura, Near Prasad Hospital, Main Rd, Muzaffarpur. (Click to locate us on google map)</a>
          </p>
        {/* <LocationMap lat={26.1350801} lng={85.3651653} label="Hira Panna Jewellers - Brahampura" /> */}
        
      </div>
    </section>
  )
}

export default Stores
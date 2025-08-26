import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Contact Us!</h2>
          <p className="regular-16 text-gray-10">All Week 11 am - 8 pm</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button 
              type="button"
              title="Purani Bazar"
              icon="/call.svg"
              variant="btn_white"
              full
              href='tel:+917050916916'
            />
            <Button 
              type="button"
              title="Brahampura"
              icon="/call.svg"
              variant="btn_white"
              full
              href="tel:+918298916916"
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
        <div className="relative padding-container max-container w-full pb-24">

        <h3 className="bold-20 lg:bold-32  pt-16 capitalize">⁠Discover Our Exceptional Products at</h3>
        <p className="regular-16 pd-l-32 text-white lg:mt-[30px] lg:bg-none">
        Experience the elegance and craftsmanship of our jewelry store.</p>
        <p className="regular-16 pd-l-32 text-white lg:mt-[30px] lg:bg-none"> <span className='text-white-90'>Registered Address 🏢 </span>: Hira Panna Jewellers, Brahmantoli, Purani Bazar, Muzaffarpur (Bihar) - 842001</p>
        <p className="regular-16 pd-l-32 text-white lg:mt-[30px] lg:bg-none"> GST : 10AADCH3102L1Z7</p>
     
        
        </div>
        </div>
      </div>
    </section>
  )
}

export default GetApp

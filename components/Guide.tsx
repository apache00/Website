import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        {/* <Image src="/camp.svg" alt="camp" width={50} height={50} /> */}
        
        <div className="relative padding-container max-container w-full pb-24 ">
          <h2 className="bold-40 w-full flex justify-center items-center px-4 py-4">Exquisite Jewellery for Every Occasion</h2>
          <h3 className="bold-20 text-green-50 pt-16 w-full flex justify-center items-center px-4 py-8">GOLD | SILVER | DIAMOND | PLATINUM</h3>
          <h4 className="bold-20 pt-4 w-full flex justify-center items-center px-4 py-8">Elegant and timeless pieces crafted with passion</h4>
          <h2 className="bold-40 pt-16 w-full flex justify-center items-center px-4 py-8">Discover the Beauty of Our Collections</h2>
      <p className="regular-24  bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none w-full flex justify-center items-center px-4 py-8 pt-4">At our jewellery store, we offer a wide range of stunning pieces that are perfect for any occasion. Whether you're looking for a special gift or treating yourself, our collection features exquisite designs that will captivate your heart. From sparkling diamond necklaces to delicate pearl earrings, each piece is meticulously crafted with attention to detail and a commitment to quality. Explore our collections and find the perfect piece to add a touch of elegance to your style.</p>
        </div>
      </div>

      
    </section>
  )
}

export default Guide
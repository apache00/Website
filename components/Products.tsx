import React from 'react'
import Image from 'next/image'

const Product = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/products.png" alt="camp" width={128} height={128} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-primary-hpj">
          
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]"> Products</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">We offer exquisite gold jewellery, elegant silver pieces, and luxurious platinum creations. Our IGI-certified diamonds ensure unmatched quality and brilliance. From classic to contemporary designs, we craft jewellery that reflects your style. We also accept custom orders, creating personalized pieces to celebrate your special moments.
        </p>
        </div>

        <h3 className="bold-20 lg:bold-32 pt-16 capitalize">Gold</h3>
      <p className="regular-16  bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
      Gold Jewllery</p>

      <h3 className="bold-20 lg:bold-32 pt-16 capitalize">Silver</h3>
      <p className="regular-16  bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
      Silver Jewllery</p>

      <h3 className="bold-20 lg:bold-32 pt-16 capitalize">Platinum</h3>
      <p className="regular-16  bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
      Platinum jewllery</p>
      <h3 className="bold-20 lg:bold-32 pt-16 capitalize">Diamonds</h3>
      <p className="regular-16  bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
      Diamonds for different occasions.</p>
      </div>
    </section>
  )
}

export default Product
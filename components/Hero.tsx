import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {/* <div className="hero-map" /> */}
      <div className="w-full flex justify-center items-center px-4 py-8">
      <div className="relative w-full max-w-5xl h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden ">
        <Image
          src="/hpjlogo.png"
          alt="Responsive showcase"
          layout="fill"
          objectFit="cover"
          priority
        />
        {/* <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h2 className="text-white text-xl sm:text-2xl md:text-4xl font-bold drop-shadow-lg">
            Your Image Block
          </h2>
        </div> */}
      </div>
    </div>
      
    </section>
  )
}

export default Hero
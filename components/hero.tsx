import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src="/assets/wall-bg.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="absolute inset-0"></div>
      <div className="relative flex items-center justify-end h-full">
        <div className="bg-[#FFF3E3] p-8 rounded-lg shadow-lg max-w-lg mr-12">
          <h3 className="text-base font-semibold text-[#333333] mb-2">
            New Arrival
          </h3>
          <h1 className="text-5xl font-bold text-[#B88E2F] mb-4">
            Discover Our New Collection
          </h1>
          <p className="text-[#333333] text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="w-[222px] px-6 py-3 bg-[#B88E2F] text-white">
            Buy Now
          </button>
        </div>
      </div>
    </section>
    // <div>
    //     <div className='w-full h-screen '>
    //         <Image
    //         src="/assets/wall-bg.png"
    //         alt='backgroung image'
    //         width={1440}
    //         height={100}
    //         />
    //         <div className='bg-[#FFF3E3] w-[739px] h-[253px]'>
    //             <div>
    //                 <div></div>
    //                 <h1></h1>
    //                 <p></p>
    //                 <div></div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
  )
}

export default 



Hero
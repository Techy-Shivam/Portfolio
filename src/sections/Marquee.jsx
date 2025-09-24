import React from 'react'
import star from '../assets/star.svg'
const Marquee = () => {
  return (
    <>
    <div className="bg-white text-black pb-28 lg:pb-44 overflow-hidden">
      {/* row 1 */}
      <div className='whitespace-nowrap animate-marque text-6xl lg:text-[7vw] font-heading font-semibold leading-[1] tracking-tight'>
        <span className='flex gap-4 lg:gap-8 mx-8'>
          CREATE <img src={star} alt="" className='marque-start1 w-[7vw]' />
          DESIGN <img src={star} alt="" className='marque-start1 w-[7vw]' />
          INSPIRE <img src={star} alt="" className='marque-start1 w-[7vw]' />
          CREATE <img src={star} alt="" className='marque-start1 w-[7vw]' />
          DESIGN <img src={star} alt="" className='marque-start1 w-[7vw]' />
          INSPIRE <img src={star} alt="" className='marque-start1 w-[7vw]' />
          CREATE <img src={star} alt="" className='marque-start1 w-[7vw]' />
          DESIGN <img src={star} alt="" className='marque-start1 w-[7vw]' />
          INSPIRE <img src={star} alt="" className='marque-start1 w-[7vw]' />
          CREATE <img src={star} alt="" className='marque-start1 w-[7vw]' />
          DESIGN <img src={star} alt="" className='marque-start1 w-[7vw]' />
          INSPIRE <img src={star} alt="" className='marque-start1 w-[7vw]' />
        </span>
      </div>
      {/* row 2 */}
      <div className='whitespace-nowrap animate-marque-reverse text-6xl lg:text-[7vw] font-heading font-semibold leading-[1] tracking-tight'>
        <span className='flex gap-4 lg:gap-8 mx-8'>
          CREATE <img src={star} alt="" className='marque-start2 w-[7vw]' />
          DESIGN <img src={star} alt="" className='marque-start2 w-[7vw]' />
          INSPIRE <img src={star} alt="" className='marque-start2 w-[7vw]' />
          CREATE <img src={star} alt="" className='marque-start2 w-[7vw]' />
          DESIGN <img src={star} alt="" className='marque-start2 w-[7vw]' />
          INSPIRE <img src={star} alt="" className='marque-start2 w-[7vw]' />
          CREATE <img src={star} alt="" className='marque-start2 w-[7vw]' />
          DESIGN <img src={star} alt="" className='marque-start2 w-[7vw]' />
          INSPIRE <img src={star} alt="" className='marque-start2 w-[7vw]' />
          CREATE <img src={star} alt="" className='marque-start2 w-[7vw]' />
          DESIGN <img src={star} alt="" className='marque-start2 w-[7vw]' />
          INSPIRE <img src={star} alt="" className='marque-start2 w-[7vw]' />
        </span>
      </div>
    </div>
    </>
  )
}

export default Marquee
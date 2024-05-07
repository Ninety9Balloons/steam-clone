import Carousel from './Carousel'
import SectionHeading from '../Shared/SectionHeading'


export default function SpecialOffers() {



  return (
    <div className="py-4 px-2 w-full">
      {/* Heading */}
      <div className='flex justify-between w-full items-center'>

        {/* Title */}
        <SectionHeading>Special Offers</SectionHeading>

        {/* More */}
        <a className='text-white/50 text-sm'>More</a>
      </div>
      {/* Carosaul Container */}
      <div className='w-full overflow-x-auto h-full'>
        <Carousel />
      </div>




    </div>
  )
}
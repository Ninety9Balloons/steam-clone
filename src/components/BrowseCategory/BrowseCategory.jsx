import Carousel from './Carousel'
import SectionHeading from '../Shared/SectionHeading'


export default function BrowseCategory() {
  return (
    <div className="px-2 mt-10">
      {/* Text */}
      <SectionHeading>Browse By Category</SectionHeading>

      {/* Carousel */}
      <div className='w-full overflow-x-auto h-full'>
        <Carousel />
      </div>

    </div>
  )
}
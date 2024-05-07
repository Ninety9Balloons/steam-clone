import Carousel from './Carousel'
import Button from './Button'
import SectionHeading from '../Shared/SectionHeading'


export default function Under10() {

  return (
    <div className='px-2'>
      {/* Heading */}
      <SectionHeading>Under $10</SectionHeading>

      {/* Carousel */}
      <div className='w-full overflow-x-auto'>
        <Carousel />
      </div>

      {/* Buttons */}
      <div className='flex w-full justify-center gap-1 mt-3'>
        <Button>Under $10</Button>
        <Button>Under $5</Button>
      </div>
    </div>
  )
}

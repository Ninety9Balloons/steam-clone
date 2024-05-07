import Button from './Button'
import SectionHeading from '../Shared/SectionHeading'


export default function BrowseSteam() {
  return (
    <div className="my-10 px-2">

      {/* Heading */}
      <SectionHeading>Browse Steam</SectionHeading>

      {/* Grid for Buttons */}
      <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:grid-rows-1 w-full gap-2 ">
        <Button text="new releases" />
        <Button text="specials" />
        <Button text="free games" />
        <Button text="by user tag" />
      </div>
    </div>
  )
}
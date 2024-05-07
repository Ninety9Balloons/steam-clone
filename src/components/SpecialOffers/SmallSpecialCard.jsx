import DiscountShort from '../Shared/DiscountShort';

export default function SmallSpecialCard({ fullPrice, discount, currentPrice, image }) {
  return (
    <div className="row-span-1 col-span-1 relative h-[178px] flex flex-col">
      {/* Image */}
      <img src={image} className="flex-1 object-cover" />

      {/* Text */}
      <div className="w-full flex justify-between gap-1 text-white bg-gradient-to-t from-white to-[#abdaf4]">
        <p className="text-sm text-black p-1">Today's Deal</p>
        <DiscountShort discount={discount} fullPrice={fullPrice} currentPrice={currentPrice} />
      </div>
    </div>
  )
}
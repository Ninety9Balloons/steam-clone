import DiscountShort from '../Shared/DiscountShort';

export default function LargeSpecialCard({ fullPrice, discount, currentPrice, image }) {
  return (
    <div className="row-span-2 col-span-1 h-full ">
      {/* Image */}
      <img src={image} className="w-full h-[70%] object-cover" />

      {/* Text */}
      <div className="flex flex-col gap-1 py-1 px-2 pb-4 text-white bg-[url('background_spotlight.jpg')]">
        <p className="text-sm">Weekend Deal</p>
        <p className="text-xs text-[#acdbf5]">Offer ends May 9 @ 1:00pm.</p>
        <DiscountShort discount={discount} fullPrice={fullPrice} currentPrice={currentPrice} />
      </div>
    </div>
  )
}
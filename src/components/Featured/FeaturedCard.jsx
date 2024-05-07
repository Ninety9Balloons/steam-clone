import DiscountLong from '../Shared/DiscountLong';

export default function FeaturedCard({ title, fullPrice, image, discount, currentPrice, promo }) {

  // Take the price and add a decimal to it 
  function insertDecimal(num) {
    return Number((num / 100).toFixed(2));
  }
  const formattedPrice = insertDecimal(currentPrice).toFixed(2)

  return (
    <div className="w-full flex flex-col lg:flex-row lg:h-[350px] items-start rounded shadow-lg shadow-[0_0_7px_0_#000000] lg:overflow-hidden">
      {/* Image */}
      <img src={image} className="w-full lg:h-full lg:w-[70%] lg:object-cover lg:shadow-[0_0_10px_5px_#000000] z-20" />

      {/* Info */}
      <div className="text-white w-full lg:h-full p-2 pb-4 lg:pb-2 lg:flex lg:flex-col 
        lg:justify-between lg:items-start lg:p-4
        bg-gradient-to-b from-[#0A141D] to-[rgba(10,20,29,0.2)] lg:to-[#0A141D]">
        {/* Title */}
        <h2 className="font-bold lg:font-semibold lg:text-xl">{title}</h2>

        {/* thumbnails(Data does not have thumbnails) */}

        {/* Reason for Featured */}
        <div className='hidden lg:flex flex-col items-start'>
          <p className='text-xl'>Now Available</p>
          <p className='text-xs bg-[rgba(255,255,255,0.2)] px-1 py-[1px] rounded'>Top Seller</p>
        </div>

        {/* Price */}
        {discount != null ? <DiscountLong discount={discount} fullPrice={fullPrice} currentPrice={currentPrice} />
          : <p className="text-sm">{formattedPrice == 0 ? "Free to Play" : `$${formattedPrice}`}</p>}
      </div>
    </div >
  )
}
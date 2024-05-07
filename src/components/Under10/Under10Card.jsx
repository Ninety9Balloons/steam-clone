import DiscountLong from "../Shared/DiscountLong"

export default function under10Card({ image, fullPrice, currentPrice, discount }) {
  // Take the price and add a decimal to it 
  function insertDecimal(num) {
    return Number((num / 100).toFixed(2));
  }
  const formattedPrice = insertDecimal(currentPrice).toFixed(2)

  return (
    <div className="flex flex-col bg-gradient-to-r from-[rgba(64,121,153,1)] to-[rgba(42,62,89,1)] hover:brightness-110 transition-all
      h-full shadow-[0_0_5px_0_#000000] cursor-pointer">
      <img src={image} className="object-cover h-[75%] w-full" />

      <div className="h-[25%] flex justify-start items-center">
        {discount != null ? <DiscountLong discount={discount} fullPrice={fullPrice} currentPrice={currentPrice} />
          : <p className="text-sm text-white bg-[rgba(20,31,44,0.4)] py-[1px] px-1 ml-1">{formattedPrice == 0 ? "Free to Play" : `$${formattedPrice}`}</p>}
      </div>
    </div>
  )
}
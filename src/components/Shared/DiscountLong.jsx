export default function DiscountLong({ discount, fullPrice, currentPrice }) {
  // Take the price and add a decimal to it 
  function insertDecimal(num) {
    return Number((num / 100).toFixed(2));
  }
  const formattedPrice = insertDecimal(fullPrice)

  // Take the discount and add a decimal to it 
  function insertDecimal(num) {
    return Number((num / 100).toFixed(2));
  }
  const formattedDiscountPrice = insertDecimal(currentPrice)

  return (
    <div className="flex justify-start items-center text-xs">
      {/* Percentage */}
      <div className="bg-[#4c6b22] p-1">
        <p className="text-[#beee11] font-bold">-{discount}%</p></div>

      {/* Original Price */}
      <div className="bg-dark-pale-blue p-1 relative flex items-center justify-center">
        <p className="text-[#738895]">${formattedPrice}</p>
        <span className="w-[90%] h-[1px] bg-[#738895] absolute -rotate-12"></span>
      </div>

      {/* Discounted Price */}
      <div className="bg-dark-pale-blue p-1">
        <p className="text-[#beee11]">${formattedDiscountPrice}</p>
      </div>
    </div>
  )
}
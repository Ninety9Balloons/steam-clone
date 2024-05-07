export default function ListItem({ loading, title, fullPrice, discount, currentPrice, image, platforms, tags }) {
  const platformsArray = platforms?.split(',') || []

  const tagsArray = tags?.split(',') || []
  let randomTagsArray = []

  // Get random tags from the item and place them in an array
  if (!loading) {
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * tagsArray.length);
      const randomTag = tagsArray[randomIndex];
      randomTagsArray.push(randomTag)
    }
  }

  // Take the price and add a decimal to it 
  function insertDecimal(num) {
    return Number((num / 100).toFixed(2));
  }
  const formattedPrice = insertDecimal(fullPrice)

  // Take the discount and add a decimal to it 
  function insertDecimal(num) {
    return Number((num / 100).toFixed(2));
  }
  const formattedDiscountPrice = insertDecimal(currentPrice).toFixed(2)

  return (
    <li className="group h-[70px] w-full flex h-full justify-between items-center bg-black/20 cursor-pointer transition-all
      hover:bg-gradient-to-r hover:from-[#c6e6f8] hover:to-[#84bcd3] hover:text-black">
      {/* Left side information */}
      <div className="flex w-[80%] h-full">
        {/* Image */}
        <img src={image} className="w-1/3 object-cover h-full" />

        {/* Details */}
        <div className="flex flex-col h-full justify-around text-[#c7d5e0] group-hover:text-black ml-3 text-sm">
          {/* Title */}
          <h3>{title}</h3>
          {/* Available Systems */}
          <div className="flex opacity-30 group-hover:opacity-100">
            {platformsArray.map((item) => {
              if (item === "WIN") {
                return <span><img src="icon_platform_win.png" alt="Windows Icon" /></span>
              }
              if (item === "MAC") {
                return <span><img src="icon_platform_mac.png" alt="Mac Icon" /></span>
              }
              if (item === "LNX") {
                return <span><img src="icon_platform_linux.png" alt="Linux Icon" /></span>
              }
            })}
          </div>

          {/* Tags */}
          <div className="text-xs flex text-[#384959]">
            {randomTagsArray.slice(0, 4).join(", ")}
          </div>

        </div>
      </div>

      {/* Right side pricing */}
      <div className="flex items-center justify-between gap-8 w-[20%]">
        {/* Discount */}
        {discount !== null ? <div className="bg-[#4c6b22] p-1 h-[28px]">
          <p className="text-[#beee11] text-sm font-bold">-{discount}%</p>
        </div> : ""}

        {/* Price */}
        <div className="text-right mr-2 flex justify-end w-full">
          {discount !== null ?
            <div className="flex flex-col justify-center">
              {/* Original Price */}
              < div className="p-0 relative flex items-center justify-center">
                <p className="text-[#738895] text-xs">${formattedPrice}</p>
                <span className="w-[90%] h-[1px] bg-[#738895] absolute -rotate-12"></span>
              </div>

              {/* Current Price */}
              <div className="p-0">
                <p className="text-[#beee11] text-sm">${formattedDiscountPrice}</p>
              </div>
            </div>

            :
            <div className="w-full flex justify-end">{(formattedPrice === 0 ?
              <p className="text-white group-hover:text-black text-right text-xs">Free to Play</p> :
              <p className="text-white group-hover:text-black text-right text-sm">${formattedPrice}</p>)}</div>
          }
        </div>
      </div>
    </li >
  )
}
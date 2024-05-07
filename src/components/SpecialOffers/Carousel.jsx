import LargeSpecialCard from './LargeSpecialCard.jsx';
import SmallSpecialCard from './SmallSpecialCard.jsx';
import { DataContext } from "../../context/DataContext"
import { useContext } from "react"

export default function Carousel() {

  const { steamData, loading } = useContext(DataContext);

  const discountGameArray = []

  // Get random discounted games from steamData to add into a discount only array
  if (!loading) {
    for (let i = 0; i < steamData.length; i++) {
      if (steamData[i]?.discount != null) {
        discountGameArray.push(steamData[i])
      }
    }
  }

  const randomDiscountGameArray = []

  // Get random discounted games from discount array to display
  if (!loading) {
    for (let i = 0; i < 20; i++) {
      const randomIndex = Math.floor(Math.random() * discountGameArray.length);
      const randomGame = discountGameArray[randomIndex];
      randomDiscountGameArray.push(randomGame)
    }
  }

  return (
    <div className='h-full'>
      {!loading ? <div className="grid grid-cols-6 grid-rows-2 grid-flow-col 
                    w-[1836px] h-[390px] max-h-[390px] gap-x-3">
        <LargeSpecialCard key={randomDiscountGameArray[0]?.sid} fullPrice={randomDiscountGameArray[0]?.full_price} discount={randomDiscountGameArray[0]?.discount} currentPrice={randomDiscountGameArray[0]?.current_price} image={randomDiscountGameArray[0]?.image} />

        <LargeSpecialCard key={randomDiscountGameArray[1]?.sid} title={randomDiscountGameArray[1]?.name} fullPrice={randomDiscountGameArray[1]?.full_price} discount={randomDiscountGameArray[1]?.discount} currentPrice={randomDiscountGameArray[1]?.current_price} image={randomDiscountGameArray[1]?.image} />

        <SmallSpecialCard key={randomDiscountGameArray[3]?.sid} title={randomDiscountGameArray[3]?.name} fullPrice={randomDiscountGameArray[3]?.full_price} discount={randomDiscountGameArray[3]?.discount} currentPrice={randomDiscountGameArray[3]?.current_price} image={randomDiscountGameArray[3]?.image} />

        <SmallSpecialCard key={randomDiscountGameArray[4]?.sid} title={randomDiscountGameArray[4]?.name} fullPrice={randomDiscountGameArray[4]?.full_price} discount={randomDiscountGameArray[4]?.discount} currentPrice={randomDiscountGameArray[4]?.current_price} image={randomDiscountGameArray[4]?.image} />

        <LargeSpecialCard key={randomDiscountGameArray[2]?.sid} title={randomDiscountGameArray[2]?.name} fullPrice={randomDiscountGameArray[2]?.full_price} discount={randomDiscountGameArray[2]?.discount} currentPrice={randomDiscountGameArray[2]?.current_price} image={randomDiscountGameArray[2]?.image} />

        <LargeSpecialCard key={randomDiscountGameArray[5]?.sid} title={randomDiscountGameArray[5]?.name} fullPrice={randomDiscountGameArray[5]?.full_price} discount={randomDiscountGameArray[5]?.discount} currentPrice={randomDiscountGameArray[5]?.current_price} image={randomDiscountGameArray[5]?.image} />

        <LargeSpecialCard key={randomDiscountGameArray[6]?.sid} title={randomDiscountGameArray[6]?.name} fullPrice={randomDiscountGameArray[6]?.full_price} discount={randomDiscountGameArray[6]?.discount} currentPrice={randomDiscountGameArray[6]?.current_price} image={randomDiscountGameArray[6]?.image} />

      </div>
        : <p className="text-white">Loading</p>}


    </div>
  )
}
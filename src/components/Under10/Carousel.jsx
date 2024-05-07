import { DataContext } from "../../context/DataContext"
import { useContext } from "react"
import Under10Card from './Under10Card.jsx'

export default function Carousel() {
  const { steamData, loading } = useContext(DataContext);

  const under10Array = []

  for (let i = 0; i < steamData.length; i++) {

    const randomIndex = Math.floor(Math.random() * steamData.length);
    const randomGame = steamData[randomIndex];

    if (randomGame.current_price <= 1000) {
      under10Array.push(randomGame)
    }
  }

  return (
    <div className="grid grid-rows-1 grid-flow-col w-[2300px] h-[122px] max-h-[122px] mb-5 gap-x-2">
      {loading ? <p>Loading</p> :
        under10Array.slice(0, 10).map((item) => (
          <Under10Card key={item?.id} discount={item?.discount} image={item?.image} fullPrice={item?.full_price} currentPrice={item?.current_price} />
        ))
      }

    </div>
  )
}

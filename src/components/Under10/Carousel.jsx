import { DataContext } from "../../context/DataContext";
import { useContext } from "react";
import Under10Card from "./Under10Card.jsx";

export default function Carousel({ amount }) {
  const { steamData, loading } = useContext(DataContext);

  const under10Array = [];
  const uniqueArray = [];

  // Grabs a random game under the chosen amount and also makes sure the array doesn't have duplicates
  for (let i = 0; i < steamData.length; i++) {
    const randomIndex = Math.floor(Math.random() * steamData.length);
    const randomGame = steamData[randomIndex];

    if (randomGame.current_price <= amount) {
      uniqueArray.push(randomGame);
    }

    uniqueArray.forEach((item) => {
      if (!under10Array.includes(item)) {
        under10Array.push(item);
      }
    });
  }

  return (
    <div className="grid grid-rows-1 grid-flow-col w-[2300px] h-[122px] max-h-[122px] mb-5 gap-x-2">
      {loading ? (
        <p>Loading</p>
      ) : (
        under10Array
          .slice(0, 10)
          .map((item) => (
            <Under10Card
              key={item?.sid}
              discount={item?.discount}
              image={item?.image}
              fullPrice={item?.full_price}
              currentPrice={item?.current_price}
            />
          ))
      )}
    </div>
  );
}

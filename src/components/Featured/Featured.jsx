import { DataContext } from "../../context/DataContext"
import { useContext } from "react"
import FeaturedCard from './FeaturedCard'
import { Carousel, IconButton } from "@material-tailwind/react";
import SectionHeading from '../Shared/SectionHeading'

export default function Featured() {
  const { steamData, loading } = useContext(DataContext);
  const randomGameArray = []

  // Get random games from steamData to display as Featured Games
  if (!loading) {
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * steamData.length);
      const randomGame = steamData[randomIndex];
      randomGameArray.push(randomGame)
    }
  }

  return (
    <div className="w-full pt-6 px-2 lg:px-0 h-full relative overflow-visible">

      <img src="cluster_bg.png" alt="background" className="w-full lg:w-screen absolute bottom-0 left-0" />

      <SectionHeading>Featured & Recommended</SectionHeading>
      <Carousel
        autoplay={true}
        loop={true}
        className="h-full pb-10 static"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="hidden lg:block !absolute top-2/4 left-4 lg:-left-[48px] -translate-y-2/4 
            bg-gradient-to-r from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0)] hover:from-[rgba(255,255,255,0.1)] px-1 py-14 rounded-l-sm rounded-r-none"
          >
            <div className="">
              <i className="fas fa-angle-left text-6xl"></i>
            </div>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="hidden lg:block !absolute top-2/4 right-4 lg:-right-[48px] -translate-y-2/4
            bg-gradient-to-l from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0)] hover:from-[rgba(255,255,255,0.2)] px-1 py-14 rounded-r-sm rounded-l-none"
          >
            <div className="">
              <i className="fas fa-angle-right text-6xl"></i>
            </div>
          </IconButton>)}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          // Scroll bar thing under the items
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 lg:h-2 cursor-pointer rounded-2xl lg:rounded-sm transition-all content-[''] 
                ${activeIndex === i ? "w-14 lg:w-4 bg-white/50" : "w-4 bg-transparent lg:bg-white/20"
                  }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {!loading ? (randomGameArray.map((item) => (
          <FeaturedCard key={item?.sid} title={item?.name} promo={item?.store_promo_url} fullPrice={item?.full_price} discount={item?.discount} currentPrice={item?.current_price} image={item?.image} />
        ))) : <p className="text-white">Loading</p>}
      </Carousel>
    </div>

  )
}
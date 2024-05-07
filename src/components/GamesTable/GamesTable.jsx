import { useState, useEffect } from "react"
import { DataContext } from "../../context/DataContext"
import { useContext } from "react"
import ListItem from './ListItem'

export default function GamesTable() {
  const { steamData, loading } = useContext(DataContext);

  // State for determining which list is gameList
  const [gameList, setGameList] = useState([])

  // State for determining which tab is active
  const [activeTab, setActiveTab] = useState("newTrending")

  // Active style for the gameList tab
  const activeStyle = "text-[#ffffff] bg-[#2a475e]"

  // Set the newTrending array to the 10 most recent games
  let newTrending = steamData.slice(0, 10)

  // On page load, set the gameList game array to newTrending
  useEffect(() => {
    newTrending = steamData.slice(0, 10);
    setGameList(newTrending)
  }, [steamData])

  // Specials array for games on discount
  const specials = steamData.filter((item) => item?.discount != null).slice(0, 10);

  // Top rated array for the top 10 hightest rated games
  const topRated = [...steamData].sort(({ meta_score: a }, { meta_score: b }) => (a ??= '0') > (b ??= '0') ? -1 : a < b ? 1 : 0).slice(0, 10)

  return (
    <div className="flex flex-col w-full my-10">
      {/* Tabs */}
      <ul className="text-[#4f94bc] items-center flex gap-1 ml-2">
        <li
          onClick={() => { setGameList(newTrending); setActiveTab("newTrending") }}
          className={`cursor-pointer py-[1px] px-2 pb-1 hover:text-white transition-all text-sm rounded-t-sm transition-all ${activeTab === "newTrending" ? activeStyle : ""}`}>New & Trending</li>
        <li
          onClick={() => { setGameList(topRated); setActiveTab("topRated") }}
          className={`cursor-pointer py-[1px] px-2 pb-1 hover:text-white transition-all text-sm rounded-t-sm transition-all ${activeTab === "topRated" ? activeStyle : ""}`}>Top Rated</li>
        <li
          onClick={() => { setGameList(specials); setActiveTab("specials") }}
          className={`cursor-pointer py-[1px] px-2 pb-1 hover:text-white transition-all text-sm rounded-t-sm transition-all ${activeTab === "specials" ? activeStyle : ""}`}>Specials</li>
      </ul>

      {/* List of Games */}
      <ul className="flex flex-col gap-1 bg-gradient-to-b from-[rgba(42,71,94,1.0)] via-[rgba(42,71,94,0.1)] to-[rgba(42,71,94,0.0)] p-2">
        {(gameList.map((item) => (
          <ListItem key={item?.sid} loading={loading} title={item?.name} fullPrice={item?.full_price} discount={item?.discount} currentPrice={item?.current_price} image={item?.image} platforms={item?.platforms}
            tags={item?.tags} />
        )))}
        {/* {!loading ?  : <p className="text-white">Loading</p>} */}
      </ul>

      {/* Bottom Section */}
      <div className="flex justify-end gap-1 items-center bg-black/20 mx-2 p-1">
        <p className="text-[#c7d5e0] text-xs">See more:</p>
        <button className="text-white px-2 py-1 border border-white uppercase text-xs rounded-sm">New Releases</button>
      </div>

    </div>
  )
}
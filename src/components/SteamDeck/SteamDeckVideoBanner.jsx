export default function SteamDeckVideoBanner() {
  return (
    <div className="px-2 my-10">
      <video autoPlay loop muted alt="Video of steam deck">
        <source src="deck_banner_animated_webm_english.webm" type="video/webm" />
      </video>
    </div>
  )
}


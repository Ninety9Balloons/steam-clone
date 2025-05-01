export default function SteamDeckVideoBanner() {
  return (
    <div className="px-2 my-10 flex justify-center">
      <video
        autoPlay
        loop
        muted
        alt="Video of steam deck"
        className="cursor-pointer shadow-[0_0_10px_0_rgba(0,0,0,1)] transition-all  hover:shadow-light-blue"
      >
        <source
          src="deck_banner_animated_webm_english.webm"
          type="video/webm"
        />
      </video>
    </div>
  );
}

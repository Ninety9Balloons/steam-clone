export default function Header() {
  return (
    <div className="flex items-center justify-center p-2 w-full h-14 bg-very-dark-blue relative shadow-lg">
      {/* Hamburger */}
      <div className="flex flex-col place-self-start items-center gap-1 absolute left-0 top-0 m-2">
        <span className="bg-white w-6 h-1"></span>
        <span className="bg-white/70 w-6 h-1"></span>
        <span className="bg-white/50 w-6 h-1"></span>
      </div>
      {/* Logo */}
      <div className="flex items-center">
        <img src="Steam_icon_logo.png" alt="Steam Logo" className="h-10 w-auto mr-1" />
      </div>
    </div>
  )
}
import Search from './Search';

export default function MenuSearch() {
  return (
    <div className="w-full lg:max-w-[1000px] lg:mx-auto lg:mt-5 flex flex-col lg:flex-row lg:items-center lg:justify-between 
      bg-gradient-to-r from-[rgba(62,103,150,0.919)] via-[rgba(58,120,177,0.8)] to-[rgb(15,33,110)] py-2 lg:py-0 px-3 lg:px-0">
      {/* Menu */}
      <ul className="font-semibold text-white flex flex-col lg:flex-row gap-2 lg:gap-4 text-sm drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]">
        <li className='hover:bg-gradient-to-r from-blue-400/50 to-transparent cursor-pointer h-full py-2 px-3 transition-all'>Your Store</li>
        <li className='hover:bg-gradient-to-r from-blue-400/50 to-transparent cursor-pointer h-full py-2 px-3 transition-all'>New & Noteworthy</li>
        <li className='hover:bg-gradient-to-r from-blue-400/50 to-transparent cursor-pointer h-full py-2 px-3 transition-all'>Categories</li>
        <li className='hover:bg-gradient-to-r from-blue-400/50 to-transparent cursor-pointer h-full py-2 px-3 transition-all'>Points Shop</li>
        <li className='hover:bg-gradient-to-r from-blue-400/50 to-transparent cursor-pointer h-full py-2 px-3 transition-all'>News</li>
        <li className='hover:bg-gradient-to-r from-blue-400/50 to-transparent cursor-pointer h-full py-2 px-3 transition-all'>Labs</li>
      </ul>

      {/* Search */}
      <Search />
    </div>
  )
}
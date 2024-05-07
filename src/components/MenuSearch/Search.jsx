export default function Search() {
  return (
    <form className="flex mt-2 lg:mt-0 rounded shadow-[inset_0_0_4px_#000000] bg-[rgba(96,133,155,0.979)] text-sm 
     hover:border-blue-500 border-[1px] border-transparent">
      <input className="w-full h-auto rounded-l bg-transparent leading-[28px] 
        px-3 text-white placeholder:italic placeholder-[#0e1c25]" placeholder="search" />
      <button className="rounded-r h-auto p-1">
        <img src="search_icon_btn.png" alt="Search Button" className="" />
      </button>
    </form>
  )
}
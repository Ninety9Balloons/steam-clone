export default function Button({ text }) {
  return (
    <button className="text-white uppercase text-sm font-semibold bg-gradient-to-r from-[#06bfff] to-[#2d73ff] h-[58px] 
      rounded shadow-[0_0_4px_0_rgba(0,0,0,1)] hover:brightness-110 transition-all">{text}</button>
  )
}
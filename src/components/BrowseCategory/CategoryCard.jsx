import color from './color.json'


export default function CategoryCard({ image, name, index }) {

  return (
    <div className="group relative flex items-end justify-center w-[236px] h-[233px] hover:scale-105 transition-all cursor-pointer">
      {/* Image */}
      <img src={image} alt={`Image of ${name} group`} className="absolute z-0" />

      {/* Color Underlay */}
      <div style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0), ${color[index].end})` }}
        className={`bg-gradient-to-b from-[rgba(0,0,0,0)] to-[${color[index].end}] w-full h-full absolute group-hover:brightness-125 transition-all`}></div>

      {/* Title */}
      <h3 className="font-semibold text-white z-10 mb-5 uppercase">{name}</h3>

    </div>
  )
}
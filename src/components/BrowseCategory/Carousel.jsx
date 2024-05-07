import categoryData from './categoryData.json'
import CategoryCard from './CategoryCard'

export default function Carousel() {

  const copy = categoryData.slice();
  const randomCategories = Array.from({ length: 10 }, (_, i) => copy.splice(Math.random() * copy.length | 0, 1)[0]);
  randomCategories.forEach((c, i) => console.log(i + 1, c));

  return (
    <div className="grid grid-rows-1 grid-flow-col w-[2360px] h-[233px] max-h-[233px] mb-5 gap-x-2">
      {randomCategories.map((item, i) => (
        <CategoryCard key={item?.id} name={item?.name} image={item?.image} index={i} />
      ))}

    </div>
  )
}
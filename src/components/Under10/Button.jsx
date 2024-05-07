export default function Button({ children }) {
  return (
    <button className="text-white px-3 py-1 border border-white uppercase text-sm rounded-sm">
      {children}
    </button>
  )
}
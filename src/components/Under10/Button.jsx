export default function Button({ children, setAmount, amount }) {
  return (
    <button
      className="text-white px-3 py-1 border border-white uppercase text-sm rounded-sm hover:shadow-[0_0_5px_0_#fff] transition-all"
      onClick={() => setAmount(amount)}
    >
      {children}
    </button>
  );
}

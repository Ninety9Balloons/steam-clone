export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center py-4 mx-2 text-[#8f98a0] bg-[rgba(0,0,0,0.2)]">
      <p>Sign In to view personalized recommendations</p>

      <button className="mt-3 mb-4 text-[#D2E885] bg-gradient-to-b from-[#a4d007] to-[#536904] px-4 py-1 rounded hover:brightness-125 transition-all">
        Sign In
      </button>

      <p>
        Or{" "}
        <a className="text-white hover:text-light-blue transition-all cursor-pointer">
          sign up
        </a>{" "}
        and join Steam for free
      </p>
    </div>
  );
}

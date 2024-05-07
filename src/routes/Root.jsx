import { Outlet } from "react-router-dom";
import Header from '../components/Header/Header'
import MenuSearch from '../components/MenuSearch/MenuSearch'


export default function Root() {
  return (
    // Background
    <div className="flex justify-center bg-dark-blue w-full h-full min-h-screen">
      {/* Content */}
      <div className="w-full max-w-[900px] lg:max-w-full">
        {/* Header */}
        <Header />

        {/* Menu and Search */}
        <MenuSearch />

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
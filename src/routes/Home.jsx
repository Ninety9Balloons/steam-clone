import Featured from "../components/Featured/Featured";
import SteamDeckBanner from "../components/SteamDeck/SteamDeckBanner";
import SteamDeckVideoBanner from "../components/SteamDeck/SteamDeckVideoBanner";
import SpecialOffers from "../components/SpecialOffers/SpecialOffers";
import BrowseCategory from "../components/BrowseCategory/BrowseCategory";
import BrowseSteam from "../components/BrowseSteam/BrowseSteam";
import SignIn from "../components/SignIn/SignIn";
import Under10 from "../components/Under10/Under10";
import GamesTable from "../components/GamesTable/GamesTable";
import Footer from "../components/Footer/Footer";
import MobileMenu from "../components/Header/MobileMenu";

export default function Home() {
  return (
    <div className="lg:max-w-[1000px] lg:w-[90%] mx-auto relative">
      {/* Mobile Menu */}
      <MobileMenu />

      {/* Featured & Recommended */}
      <Featured />

      {/* Steam Deck Banner */}
      <SteamDeckBanner />

      {/* Special Offers */}
      <SpecialOffers />

      {/* Browse by Category */}
      <BrowseCategory />

      {/* Steam Deck */}
      <SteamDeckVideoBanner />

      {/* Personalized Recommendations */}
      <SignIn />

      {/* Browse Steam */}
      <BrowseSteam />

      {/* Under $10 */}
      <Under10 />

      {/* New, Top, Popular, Discounted */}
      <GamesTable />

      {/* Sign In */}
      <SignIn />

      {/* Footer */}
      <Footer />
    </div>
  );
}

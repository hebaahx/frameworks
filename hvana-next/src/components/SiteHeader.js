import NavHeader from "./NavHeader";
import HvanaLogo from "./HvanaLogo";
import SocialLinks from "./SocialLinks";

export default function SiteHeader() {
  return (
    <header>
      <NavHeader />
      <HvanaLogo />

      <div className="header-actions">
        <SocialLinks />
        <button className="search-button" type="button">Zoeken</button>
        <button className="menu-button" type="button">Menu</button>
      </div>
    </header>
  );
}
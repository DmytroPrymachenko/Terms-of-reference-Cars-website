import { NavLink, Outlet } from "react-router-dom";
import {
  CatalogNavLink,
  FavoritesNavLink,
  Header,
  HeaderDiv,
  HeaderNav,
  HomeNavLink,
  INavLink,
  SpanNavLink,
} from "./LayoutStyles";
import HomeSvGIcon from "../image/Home/IconHeader.png";

const Layout = () => {
  return (
    <>
      <Header>
        <HeaderDiv>
          <div>
            <NavLink to="/">
              <img src={HomeSvGIcon} alt="Home Icon" />{" "}
            </NavLink>
          </div>
          <HeaderNav>
            <HomeNavLink to="/">
              <SpanNavLink>Home</SpanNavLink>
              <INavLink></INavLink>
            </HomeNavLink>
            <CatalogNavLink to="/catalog">
              <SpanNavLink>Catalog</SpanNavLink>
              <INavLink></INavLink>
            </CatalogNavLink>
            <FavoritesNavLink to="/favorites">
              <SpanNavLink>Favorites</SpanNavLink>
              <INavLink></INavLink>
            </FavoritesNavLink>
          </HeaderNav>
        </HeaderDiv>
      </Header>
      <Outlet />
    </>
  );
};

export default Layout;

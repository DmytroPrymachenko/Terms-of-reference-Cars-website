import { NavLink, Outlet } from "react-router-dom";
import {
  CatalogNavLink,
  FavoritesNavLink,
  Header,
  HeaderNav,
  HomeNavLink,
  INavLink,
  SpanNavLink,
} from "./LayoutStyles";

const Layout = () => {
  return (
    <>
      <Header>
        <div>
          <NavLink></NavLink>
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
      </Header>
      <Outlet />
    </>
  );
};

export default Layout;

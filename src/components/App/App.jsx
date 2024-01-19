import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import CatalogPage from "../pages/CatalogPage";
import FavoritesPage from "../pages/FavoritesPage";
import HomePage from "../pages/HomePage";

const App = () => {
  return (
    <>
      {/* <GlobalBackgraund /> */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

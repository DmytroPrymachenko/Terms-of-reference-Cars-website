import { useSelector } from "react-redux";
import FilterForm from "../filter/FilterForm";
import ItemList from "../itemList/ItemList";

const CatalogPage = () => {
  const cars = useSelector((state) => state.cars);
  const uniqueCarModels = [...new Set(cars.map((car) => car.model))];
  return (
    <>
      <FilterForm uniqueCarModels={uniqueCarModels} />
      <ItemList />
    </>
  );
};

export default CatalogPage;

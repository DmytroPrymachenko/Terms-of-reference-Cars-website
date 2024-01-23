import { useDispatch, useSelector } from "react-redux";
import FilterForm from "../filter/FilterForm";
import ItemList from "../itemList/ItemList";
import { selectFilter } from "../../store/cars/selector";
import { useEffect, useState } from "react";
import { getFilterParamsThunk } from "../../store/cars/thunk";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilter);
  const uniqueCarModels = [...new Set(filters.map((car) => car.make))];
  const uniqueCarPrice = [...new Set(filters.map((car) => car.rentalPrice))];
  const [filter, setFilter] = useState(null);

  function getFilter(obj) {
    if (obj) {
      setFilter(obj);
    }
  }
  useEffect(() => {
    dispatch(getFilterParamsThunk());
  }, [dispatch]);
  return (
    <>
      <FilterForm
        filter={getFilter}
        uniqueCarModels={uniqueCarModels}
        uniqueCarPrice={uniqueCarPrice}
      />
      <ItemList filter={filter} />
    </>
  );
};

export default CatalogPage;

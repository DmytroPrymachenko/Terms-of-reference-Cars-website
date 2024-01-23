import Select, { components } from "react-select";
import {
  ButtonSearchFilter,
  DivFilterSelectContainer,
  DivFilterinputContainer,
  DivSelectContainer,
  DivSelectContainerPrice,
  FilterFormForm,
  FilterFormP,
  FilterInputFrom,
  FilterInputTo,
  customStyles,
} from "./FilterFormStyled";
import { useState } from "react";
import { getCarThunk } from "../api/Auth/Thunk";
import { useDispatch, useSelector } from "react-redux";
import { incrementPage, setCars, setSearch } from "../api/Auth/slise";
import { selectCars } from "../api/Auth/selector";
import ArrowDownSvg from "../image/FilterImage/ArrowDownSvg";
import ArrowUpSvg from "../image/FilterImage/ArrowUpSvg";

const FilterForm = ({ uniqueCarModels, uniqueCarPrice, filter }) => {
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");
  const cars = useSelector(selectCars);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const dispatch = useDispatch();

  const options = uniqueCarModels.map((el) => {
    return { value: el.toLowerCase(), label: el };
  });

  const priceOptions = uniqueCarPrice.map((el) => ({
    value: el,
    label: ` To ${el}`,
  }));

  const handleMileageChange = (e, type) => {
    const value = e.target.value;

    if (type === "from") {
      setMileageFrom(value);
    } else if (type === "to") {
      setMileageTo(value);
    }

    const filteredCars = cars.filter((car) => {
      const mileage = car.mileage || 0;

      if (type === "from") {
        return mileage >= +value;
      } else if (type === "to") {
        return mileage <= +value;
      }

      return true;
    });

    dispatch(setCars({ payload: filteredCars }));
  };

  const handleSearch = (e) => {
    e.preventDefault();

    dispatch(setSearch(true));
    dispatch(incrementPage(1));
    dispatch(
      getCarThunk({
        page: 1,
        carsPerPage: 12,
        make: selectedModel?.value,
        rentalPrice: selectedPrice?.value.replace("$", ""),
      })
    )
      .unwrap()
      .then((res) => filter(res.length));
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        {props.selectProps.menuIsOpen ? <ArrowUpSvg /> : <ArrowDownSvg />}
      </components.DropdownIndicator>
    );
  };

  return (
    <section>
      <FilterFormForm onSubmit={handleSearch}>
        <DivFilterSelectContainer>
          <FilterFormP>Car brand</FilterFormP>
          <DivSelectContainer>
            <Select
              placeholder={"Enter the text"}
              options={options}
              styles={customStyles}
              onChange={setSelectedModel}
              value={selectedModel}
              components={{
                DropdownIndicator,
                IndicatorSeparator: () => null,
              }}
            />
          </DivSelectContainer>
        </DivFilterSelectContainer>
        <DivFilterSelectContainer>
          <FilterFormP>Price/ 1 hour</FilterFormP>
          <DivSelectContainerPrice>
            <Select
              placeholder={"To $"}
              options={priceOptions}
              styles={customStyles}
              onChange={setSelectedPrice}
              value={selectedPrice}
              components={{
                DropdownIndicator,
                IndicatorSeparator: () => null,
              }}
            />
          </DivSelectContainerPrice>
        </DivFilterSelectContainer>
        <DivFilterSelectContainer>
          <FilterFormP>Car mileage / km</FilterFormP>
          <DivFilterinputContainer>
            <FilterInputFrom
              type="text"
              placeholder="From"
              value={mileageFrom}
              onChange={(e) => handleMileageChange(e, "from")}
            />
            <FilterInputTo
              type="text"
              placeholder="To"
              value={mileageTo}
              onChange={(e) => handleMileageChange(e, "to")}
            />
            <ButtonSearchFilter onClick={handleSearch}>
              Search
            </ButtonSearchFilter>
          </DivFilterinputContainer>
        </DivFilterSelectContainer>
      </FilterFormForm>
    </section>
  );
};

export default FilterForm;

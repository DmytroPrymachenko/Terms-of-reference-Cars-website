import Select, { components } from "react-select";
import {
  ButtonSearchCliner,
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
import { getCarThunk } from "../../store/cars/thunk";
import { useDispatch, useSelector } from "react-redux";
import { setCars } from "../../store/cars/slise";

import ArrowDownSvg from "../image/FilterImage/ArrowDownSvg";
import ArrowUpSvg from "../image/FilterImage/ArrowUpSvg";
import { selectFilter } from "../../store/cars/selector";
import { toast } from "react-toastify";

const FilterForm = ({ uniqueCarModels, uniqueCarPrice, filter }) => {
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");
  const Filters = useSelector(selectFilter);

  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const dispatch = useDispatch();

  const options = uniqueCarModels.map((el) => {
    return { value: el.toLowerCase(), label: el };
  });

  // Тест

  // Тест

  const priceOptions = uniqueCarPrice.map((el) => ({
    value: el,
    label: ` To ${el}`,
  }));

  const handleSearch = (e) => {
    e.preventDefault();
    let filteredByMileage = [];

    if (mileageFrom !== "" || mileageTo !== "") {
      filteredByMileage = Filters.filter((car) => {
        const carMileage = car.mileage;
        return (
          (mileageFrom === "" || carMileage >= parseInt(mileageFrom, 10)) &&
          (mileageTo === "" || carMileage <= parseInt(mileageTo, 10))
        );
      });
    }

    if (
      filteredByMileage.length > 0 &&
      (selectedModel !== null || selectedPrice !== null)
    ) {
      filteredByMileage = filteredByMileage.filter((car) => {
        const modelMatch =
          selectedModel === null ||
          car.make.toLowerCase() === selectedModel.value;
        const priceMatch =
          selectedPrice === null ||
          car.rentalPrice === selectedPrice.value.replace("$", "");

        return modelMatch && priceMatch;
      });
    }

    if (filteredByMileage.length > 0) {
      dispatch(setCars(filteredByMileage));
    } else {
      dispatch(
        getCarThunk({
          page: 1,
          carsPerPage: 12,
          make: selectedModel?.value,
          rentalPrice: selectedPrice?.value.replace("$", ""),
        })
      )
        .unwrap()
        .then((res) => filter(res.length))
        .catch(() =>
          toast.error(
            "The car according to these parameters was not found. Try changing the settings."
          )
        );
    }
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        {props.selectProps.menuIsOpen ? <ArrowUpSvg /> : <ArrowDownSvg />}
      </components.DropdownIndicator>
    );
  };

  const clinerPage = () => {
    window.location.reload();
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
              onChange={(e) => {
                setMileageFrom(e.target.value);
              }}
            />
            <FilterInputTo
              type="text"
              placeholder="To"
              value={mileageTo}
              onChange={(e) => {
                setMileageTo(e.target.value);
              }}
            />
            <ButtonSearchFilter onClick={handleSearch}>
              Search
            </ButtonSearchFilter>
            <ButtonSearchCliner onClick={clinerPage}>Cliner</ButtonSearchCliner>
          </DivFilterinputContainer>
        </DivFilterSelectContainer>
      </FilterFormForm>
    </section>
  );
};

export default FilterForm;

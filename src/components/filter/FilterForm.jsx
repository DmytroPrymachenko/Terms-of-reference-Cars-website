import {
  FilterFormForm,
  FilterFormP,
  FilterFormSelect,
} from "./FilterFormStyled";

const FilterForm = ({ uniqueCarModels }) => {
  return (
    <section>
      <FilterFormForm>
        <div>
          <FilterFormP>Car brand</FilterFormP>
          <FilterFormSelect>
            <option value="" disabled selected>
              Select model
            </option>
            {uniqueCarModels.map((model) => (
              <option key={model}>{model}</option>
            ))}
          </FilterFormSelect>
        </div>
        <div>
          <FilterFormP>Price/ 1 hour</FilterFormP>
          <select>
            <option>Test1</option>
            <option>Test2</option>
            <option>Test3</option>
          </select>
        </div>
        <div>
          <FilterFormP>Car mileage / km</FilterFormP>
          <input></input>
          <input></input>
        </div>
      </FilterFormForm>
    </section>
  );
};

export default FilterForm;

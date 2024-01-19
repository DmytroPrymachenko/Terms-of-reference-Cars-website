import {
  FilterFormForm,
  FilterFormP,
  FilterFormSelect,
} from "./FilterFormStyled";

const FilterForm = () => {
  return (
    <section>
      <FilterFormForm>
        <div>
          <FilterFormP>Car brand</FilterFormP>
          <FilterFormSelect>
            <option>Test1</option>
            <option>Test2</option>
            <option>Test3</option>
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

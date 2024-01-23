import styled from "styled-components";
export const FilterFormForm = styled.form`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
  gap: 18px;
`;

export const FilterFormP = styled.p`
  color: #8a8a89;

  font-size: 14px;

  font-weight: 500;
  line-height: 18px;
`;

export const DivSelectContainer = styled.div`
  min-width: 224px;
`;
export const ButtonSearchFilter = styled.button`
  margin-left: 18px;
  color: var(--White, #fff);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  display: flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
`;

export const DivFilterSelectContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: flex-start;
`;
export const DivFilterinputContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: row;
`;
export const DivSelectContainerPrice = styled.div`
  min-width: 125px;
`;

export const FilterInputFrom = styled.input`
  padding: 14px 93px 14px 24px;
  border-radius: 14px 0px 0px 14px;
  border: none;
  width: 160px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
  color: #121417;
  height: 48px;
  &:hover,
  &:focus {
    border: none;
    outline: none;
  }
`;

export const FilterInputTo = styled.input`
  padding: 14px 115px 14px 24px;
  border-radius: 14px 0px 0px 14px;
  border: none;
  width: 160px;
  height: 48px;
  background: #f7f7fb;
  color: #121417;
  min-width: 50px;
  &:hover,
  &:focus {
    border: none;
    outline: none;
  }
`;

export const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "none",
    borderRadius: "14px",
    background: "#F7F7FB",
    color: "#121417",
    fontFamily: "Manrope",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "16px",
    width: "100%",
    height: "48px",
    "&:hover, &:focus": {
      border: "none",
      outline: "none",
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#121417",
    fontFamily: "Manrope",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
    background: "transparent",
    padding: 0,
    margin: 0,
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#121417",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "14px",
    border: "1px solid rgba(18, 20, 23, 0.05)",
    boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.02)",

    background: "#FFF",
    color: "rgba(18, 20, 23, 0.20)",
    fontFamily: "Manrope",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "20px",
  }),
  option: (provided, state) => ({
    ...provided,
    borderRadius: "8px",
    background: state.isSelected ? "rgba(255, 255, 255, 0.10)" : "transparent",
    color: state.isSelected ? "#121417" : provided.color,
    ":hover": {
      background: "rgba(255, 255, 255, 0.10)",
      color: "#121417",
    },
  }),
  menuList: (base) => ({
    ...base,
    height: "100%",

    "::-webkit-scrollbar": {
      width: "2px",
    },
    "::-webkit-scrollbar-track": {
      background: "inset 0 0 2px rgba(0, 0, 0, 0.2)",
    },
    "::-webkit-scrollbar-thumb": {
      background: " var(--transparency-20)",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: " var(--transparency-20)",
    },
  }),
};

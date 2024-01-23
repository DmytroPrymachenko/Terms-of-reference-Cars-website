import styled from "styled-components";
export const HashtagDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 28px;
`;

export const HashtagDivBorder = styled.div`
  display: flex;
`;

export const H1Text = styled.h1`
  display: flex;
`;

export const ItemListUl = styled.ul`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  padding-bottom: 100px;
`;

export const HashtagSpan = styled.span`
  margin-right: 6px;
  border-right: 2px solid rgba(18, 20, 23, 0.1);
  padding-right: 6px;

  color: rgba(18, 20, 23, 0.5);

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  &:last-child {
    border-right: none;
    margin-right: 0;
  }
`;
export const NeimengCostDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
  padding-right: 9px;
`;
export const NeimengDiv = styled.div``;
export const NeimengSpan = styled.span`
  color: #121417;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
export const NeimengModelSpan = styled.span`
  color: #3470ff;
`;
export const ButtonLoadMore = styled.button`
  color: #3470ff;
  font-family: Manrope;
  font-size: 16px;

  font-weight: 500;
  line-height: 24px;
  text-decoration-line: underline;
  border: none;
  background: transparent;
  &:active,
  &:hover,
  &:focus {
    color: #0b44cd;
  }
  cursor: pointer;
  padding: 10px;

  margin-bottom: 100px;
`;

export const DivButtonLoadMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

export const CostSpan = styled.span`
  color: #121417;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
export const ItemListLi = styled.li`
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
`;

export const ItemFavoriteLi = styled.li`
  display: flex;
  width: 274px;
  height: 500px;
  flex-direction: column;
`;

export const ItemListImageDiv = styled.div`
  position: relative;
  padding-bottom: 14px;
`;
export const ItemListImageButton = styled.button`
  position: absolute;
  top: 5%;
  left: 85%;
  border: none;
  background: transparent;
  cursor: pointer;
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

export const ItemListImage = styled.img`
  border-radius: 14px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
  width: 274px;
  height: 268px;
  object-fit: cover;
`;

export const ItemListButtonModal = styled.button`
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  border: none;

  color: var(--White, #fff);

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
  &:active,
  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;

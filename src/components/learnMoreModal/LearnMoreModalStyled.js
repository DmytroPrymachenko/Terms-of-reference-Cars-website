import styled from "styled-components";
export const LearnMoreModalContainer = styled.div`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  position: absolute;
  z-index: 10;
  align-content: center;
  align-items: center;
  justify-content: space-around;
`;

export const LearnMoreModalDiv = styled.div`
  min-width: 541px;
  min-height: 752px;
  position: relative;
  border-radius: 24px;
  background: #fff;
  padding: 40px;
`;

export const LearnMoreImg = styled.img`
  width: 461px;
  height: 248px;
  border-radius: 14px;
  background: #f3f3f2;
`;
export const LearnMoreImgDiv = styled.div`
  padding-bottom: 14px;
`;
export const LearnMoreBtnClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  border-radius: 50px;
  border: none;
  background: transparent;
`;
export const LearnMoreNeimengDiv = styled.div`
  padding-bottom: 8px;
`;
export const LearnMoreHashtagDiv = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  padding-bottom: 14px;
`;
export const LearnMoreP = styled.p`
  width: 461px;
  min-height: 40px;
  margin: 0 auto;

  color: #121417;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  padding-bottom: 24px;
`;
export const LearnMoreH2 = styled.h2`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
export const LearnMoreAccessoriesDiv = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;
export const LearnMoreRentalConditionsDiv = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  width: 461px;
  padding-bottom: 24px;
`;

export const LearnMoreUl = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 8px;
  flex-wrap: wrap;
`;

export const LearnMoreLi = styled.li`
  padding: 7px 14px;
  color: #363535;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;
export const LearnMoreLiSpan = styled.span`
  color: #3470ff;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.24px;
`;
export const LearnMoreRentalButton = styled.button`
  padding: 12px 50px;
  min-width: 168px;
  border-radius: 12px;
  background: #3470ff;
  display: inline-flex;
  border: none;
  justify-content: center;
  align-items: center;
  color: var(--White, #fff);

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;
export const BackraundDiv = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  z-index: 2;
  background: rgba(18, 20, 23, 0.5);
  position: fixed;
  top: 0;
  left: 0;
`;

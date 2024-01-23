import styled, { keyframes } from "styled-components";
export const HomePageSection = styled.section`
  display: flex;
`;

export const HomePageImgBacgraund = styled.img`
  position: absolute;
  right: 0;
`;

const moveAnimation = keyframes`
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1200px; 
  }
`;

export const HomePageLi = styled.li`
  flex: 0 0 auto;
  margin-right: 5px;
`;

export const HomePageImg = styled.img`
  min-width: 500px;
  max-height: 500px;
  border-radius: 5px;
  object-fit: cover;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const HomePageUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  width: 2000px;
  overflow: hidden;
  animation: ${moveAnimation} 10s linear infinite;
`;

export const HomePageDivUl = styled.div`
  width: 600px;
  overflow: hidden;
  border-radius: 60px;
`;

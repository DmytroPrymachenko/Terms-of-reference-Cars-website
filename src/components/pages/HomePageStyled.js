import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
export const HomePageSection = styled.section`
  display: flex;
  align-content: center;
  justify-content: space-around;
  align-items: center;
`;

export const HomePageImgBacgraund = styled.img`
  position: absolute;
  right: 0;
  top: -5%;
  z-index: -999;
  opacity: 0.4;
`;

const moveAnimation = keyframes`
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -3800px;
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
  width: 4500px;
  overflow: hidden;
  animation: ${moveAnimation} 20s linear infinite;
`;

export const HomePageDivUl = styled(NavLink)`
  width: 600px;
  overflow: hidden;
  border-radius: 60px;
`;
export const HomeNavLink = styled(NavLink)`
  background: #3470ff;
  padding: 20px;
  width: 100%;
  color: var(--White, #fff);
  font-family: Manrope;
  font-size: 23px;
  font-style: normal;
  font-weight: 600;
  line-height: 33px;
  text-decoration: none;
  text-align: center;
  border-radius: 20px;
`;
export const HomePageH1Title = styled.h1`
  color: #3470ff;

  font-size: 78px;
  font-style: normal;
  font-weight: 500;
  line-height: 100px;
`;
export const HomePageH1 = styled.h1`
  color: #121417;
  font-family: Manrope;
  font-size: 78px;
  font-style: normal;
  font-weight: 500;
  line-height: 100px;
`;
export const HomePageDivTitle = styled.div`
  display: flex;
  width: 455px;
  flex-direction: column;
  gap: 100px;
`;

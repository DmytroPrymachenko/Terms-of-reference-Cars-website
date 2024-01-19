import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  height: 100px;
  align-items: center;

  background: #27282c;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 50px;
`;

export const HomeNavLink = styled(NavLink)`
  position: relative;
  background: #fff;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.5em;
  letter-spacing: 0.1em;
  font-weight: 400;
  padding: 10px 30px;
  transition: 0.5s;

  &:hover {
    background: #faff18;
    color: #faff18;
    letter-spacing: 0.25em;
    box-shadow: 0 0 35px #faff18;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 2px;
    background: #27282c;
  }
`;

export const SpanNavLink = styled.span`
  position: relative;
`;

export const INavLink = styled.i`
  position: absolute;
  inset: 0;
  display: block;

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 10px;
    height: 4px;
    background: #27282c;
    transform: translateX(-50%) skewX(325deg);
    transition: 0.5s;
  }

  &::before {
    top: 0;
    left: 80%;
  }

  &:hover::before {
    width: 20px;
    left: 20%;
  }

  &::after {
    bottom: 0;
    left: 20%;
  }

  &:hover::after {
    width: 20px;
    left: 80%;
  }
`;

export const CatalogNavLink = styled(NavLink)`
  position: relative;
  background: #fff;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.5em;
  letter-spacing: 0.1em;
  font-weight: 400;
  padding: 10px 30px;
  transition: 0.5s;

  &:hover {
    background: #1e9bff;
    color: #1e9bff;
    letter-spacing: 0.25em;
    box-shadow: 0 0 35px #1e9bff;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 2px;
    background: #27282c;
  }
`;

export const FavoritesNavLink = styled(NavLink)`
  position: relative;
  background: #fff;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.5em;
  letter-spacing: 0.1em;
  font-weight: 400;
  padding: 10px 30px;
  transition: 0.5s;

  &:hover {
    background: #fff;
    color: #fff;
    letter-spacing: 0.25em;
    box-shadow: 0 0 35px #fff;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 2px;
    background: #27282c;
  }
`;

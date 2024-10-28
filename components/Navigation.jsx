'use client'

import React, { useState } from "react";
import styled from "styled-components";
import Logos from '../app/images/Logo.png'
import Image from "next/image";

const Nav = styled.nav`
  width: 100vw;
  border-radius: 100px;
  padding: 10px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.24) 4px 8px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
    width: 20vw;
`;
const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;

  li:nth-child(2]) {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;

const Link = styled.a`
  color: black;
  text-decoration: none;
  font-weight: 600;

  :hover {
    text-decoration: underline;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;
  color: black;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: black;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`;

const CloseButton = styled.button`
  background: black;
  border: none;
  cursor: pointer;
  z-index: 1000;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 10vw;
    margin: 4vw;
    height: 1vh;
    background-color: black;
    transition: transform 0.3s ease;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${props => (props.open ? "100vh" : 0)};
  width: 100vw;
  background: white;
  border-radius: 50px;
  transition: height 0.4s ease-in-out;
  margin-top: 90vh;
  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
    width: 50vw;
    text-align: center;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }

  li:hover {
    background: black; 
    border-radius: 100px;
    a {
      color: white; 
    }
  }
`;

const Navigation = () => {
  const [toggle, toggleNav] = useState(false);

  const handleClose = () => {
    toggleNav(false);
  };

  return (
    <>
      <Nav>
        <Logo>
            <Image src={Logos} width={100} height={100} alt="" />
        </Logo>
        <Menu>
          <Item>
            <Link target="#" href="https://www.instagram.com/igor_dumencic/">
              HOME
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://www.behance.net/igordumencic">
              PROJECTS
            </Link>
          </Item>
          <Item>
            <Link href="/about">
              ABOUT
            </Link>
          </Item>
          <Item>
            <Link href="/gallery">
              GALLERY
            </Link>
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        {toggle && <CloseButton onClick={handleClose} aria-label="Close menu" />}
        <OverlayMenu open={toggle}>
          <Item>
            <Link target="#" href="https://www.instagram.com/igor_dumencic/">
              HOME
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://www.behance.net/igordumencic">
              PROJECTS
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://github.com/Igor178">
              ABOUT
            </Link>
          </Item>
          <Item>
            <Link target="#" href="https://github.com/Igor178">
              GALLERY
            </Link>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default Navigation;
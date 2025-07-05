'use client';

import React, { useState } from 'react';
import styled from '@emotion/styled';

const HeaderBg = styled.div`
  width: 100%;
  position: relative;
  background: linear-gradient(180deg, #23272f 0%, #181c20 100%);
  @media (max-width: 797px) {
    background: #111;
  }
`;

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  background: transparent;
`;

const HeaderContent = styled.div`
  width: 100%;
  max-width: 1220px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  min-height: 64px;
  box-sizing: border-box;
  position: relative;
  @media (max-width: 797px) {
    padding: 0 16px;
    min-height: 48px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  svg {
    height: 40px;
    width: 40px;
    @media (max-width: 797px) {
      height: 32px;
      width: 32px;
    }
  }
  @media (max-width: 797px) {
    order: 2;
    margin-left: auto;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 40px;
  align-items: center;
  @media (max-width: 900px) {
    gap: 24px;
  }
  @media (max-width: 797px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #fff;
  font-size: 15px;
  text-decoration: none;
  opacity: 0.85;
  transition: opacity 0.2s;
  &:hover {
    opacity: 1;
  }
`;

const Burger = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 28px;
  cursor: pointer;
  @media (max-width: 797px) {
    display: block;
    order: 1;
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #181c20;
  z-index: 100;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 24px;
  gap: 16px;
  @media (max-width: 797px) {
    display: flex;
  }
`;

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <HeaderBg>
      <HeaderContainer>
        <HeaderContent>
          <Burger onClick={() => setOpen((v) => !v)}>&#9776;</Burger>
          <Logo>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="59"
              height="69"
              viewBox="0 0 59 69"
              fill="none"
            >
              <g clip-path="url(#clip0_4001_840)">
                <path
                  d="M17.4423 2.50627C20.1536 0.741663 23.4318 -0.0428093 26.6481 0.00603656C33.2561 0.00855583 39.8615 -0.0170567 46.4669 0.0214321C45.5984 2.96926 43.4927 9.48717 43.4541 9.83959C48.6266 9.83959 53.7965 9.83441 58.9689 9.84476C58.9585 11.0563 59.0256 12.2704 58.9585 13.4794C58.6906 14.9352 58.407 16.4091 57.7678 17.757C55.737 22.2893 50.9743 25.4942 45.977 25.4967C42.2144 25.4967 38.4515 25.5327 34.6914 25.5019C34.7403 25.0543 37.2995 17.0238 38.4618 13.4382C37.7143 13.2556 23.9855 13.1579 17.8878 13.2016C18.1302 14.1687 26.4544 26.7983 30.0291 32.3055C32.4503 32.2699 34.8692 32.1995 37.2912 32.2135C40.753 32.2335 44.4069 32.1884 47.8162 32.836C51.8331 33.5991 55.4967 36.2411 57.4164 39.853C57.9921 40.9363 58.3027 42.0471 58.6336 43.2167C59.4377 46.059 58.8346 49.1122 57.6207 51.7488C55.492 56.2732 50.5876 59.2957 45.5878 59.2082C45.6856 61.5181 44.6702 63.797 42.9667 65.3506C40.3225 67.802 36.6448 68.8771 33.1011 68.9902C26.2431 68.9979 19.3878 69.0108 12.5297 68.9825C13.524 65.8319 14.9827 61.9035 15.8931 59.2159C10.5995 59.1619 5.30333 59.2134 0.00973699 59.1876C0.0149256 58.1227 -0.000640136 57.0604 0.00973699 55.9981C0.275195 52.1294 2.22609 48.3458 5.40388 46.0719C7.65375 44.418 10.4397 43.4457 13.2463 43.5203C16.9188 43.5383 20.5888 43.4791 24.2614 43.5177C24.2304 44.0888 21.6145 52.1604 20.4858 55.6535C21.5759 55.9004 35.3872 55.8592 41.1757 55.8129C40.7092 54.6014 28.8283 36.4056 28.4648 36.3515C23.7356 36.2641 13.9027 36.5272 11.164 36.0224C7.78781 35.4976 4.65392 33.5865 2.63347 30.8419C0.906938 28.4805 -0.0801514 25.5456 0.00482889 22.6184C0.151791 17.7879 3.12834 13.1604 7.52768 11.1078C9.38842 10.1251 11.494 9.89879 13.561 9.76765C13.5739 8.98569 13.5429 8.19856 13.6486 7.42179C14.2518 5.38454 15.6614 3.64834 17.4423 2.50627ZM17.3676 7.29316C16.7903 8.02361 16.963 8.98569 16.9397 9.84742C23.2823 9.81145 38.4156 9.57996 39.6502 9.62615C40.542 7.61983 41.1193 5.48489 41.797 3.39627C36.3256 3.32419 30.8515 3.35261 25.3801 3.3834C22.4009 3.67661 19.0686 4.62582 17.3676 7.29316ZM4.02793 19.5781C3.32944 21.142 3.48678 22.8834 3.5409 24.5476C4.19032 29.1236 8.55881 32.9897 13.2493 32.7402C16.6821 32.7453 24.7044 32.6714 26.2662 32.6058C22.7741 27.3713 19.2722 21.9318 15.8161 16.6716C15.0532 15.5706 14.5918 14.3051 13.9064 13.1605C9.66944 12.875 5.4531 15.5783 4.02793 19.5781ZM41.5728 14.8143C40.8022 17.2038 39.98 19.5781 39.1837 21.9599C41.3588 22.0114 43.5366 21.9753 45.7144 21.983C50.6343 22.4126 55.2372 18.0502 55.4717 13.2041C51.0646 13.15 46.6603 13.2118 42.2532 13.1706C41.9929 13.7057 41.7454 14.2458 41.5728 14.8143ZM32.4169 36.096C36.0045 41.3974 44.3072 54.9769 45.2118 55.8181C47.8406 55.9981 50.5079 54.964 52.4254 53.179C54.2347 51.5457 55.2758 49.2075 55.6031 46.8205C55.8715 44.8632 55.1609 42.6476 54.1687 40.9856C53.1272 39.2409 51.5733 37.7996 49.6806 37.0268C48.4419 36.5212 47.1023 36.2972 45.7677 36.2842C41.6815 36.2443 37.5899 35.9444 33.5032 36.0432C33.3896 36.046 32.462 36.1625 32.4169 36.096ZM3.50725 55.8179C7.88331 55.8437 12.2595 55.8385 16.6381 55.8231C17.63 53.3493 18.4697 50.1392 19.4189 47.0622C16.5917 47.0776 13.762 46.9824 10.9398 47.1265C6.9812 48.0678 3.67735 51.7049 3.50725 55.8179ZM19.5298 59.2262C18.5642 61.6968 18.439 62.6736 17.419 65.667C22.6302 65.6387 27.8439 65.6824 33.055 65.6465C35.5549 65.4792 38.1604 64.8954 40.1706 63.3212C41.4463 62.3489 42.2762 60.8365 42.2453 59.2159C34.6735 59.1772 27.0991 59.1722 19.5298 59.2262Z"
                  fill="url(#paint0_linear_4001_840)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_4001_840"
                  x1="29.4996"
                  y1="0"
                  x2="29.4996"
                  y2="68.9999"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFD145" />
                  <stop offset="1" stop-color="#DE6500" />
                </linearGradient>
                <clipPath id="clip0_4001_840">
                  <rect width="59" height="69" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Logo>
          <Nav>
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">How to play</NavLink>
            <NavLink href="#">Basic strategies</NavLink>
          </Nav>
          {open && (
            <MobileMenu>
              <NavLink href="#">Home</NavLink>
              <NavLink href="#">How to play</NavLink>
              <NavLink href="#">Basic strategies</NavLink>
            </MobileMenu>
          )}
        </HeaderContent>
      </HeaderContainer>
    </HeaderBg>
  );
}

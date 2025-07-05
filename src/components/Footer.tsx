"use client"
import React from "react";
import styled from "@emotion/styled";

const FooterBg = styled.div`
  width: 100%;
  border-top: 1px solid #DDD;
  background: #0C1213;

`;

const Divier = styled.div`
  width: 100%;
  height: 1px;
  background-color: #fff;
  margin: 15px 0px 21px 0px ;
`;

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  background: transparent;
`;

const FooterContent = styled.div`
  width: 100%;
  max-width: 1220px;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 32px 40px 24px 40px;
  box-sizing: border-box;
  position: relative;
  gap: 48px;
  @media (max-width: 879px) {
    display: none;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 220px;
  @media (max-width: 879px) {
    align-items: center;
    min-width: 0;
    text-align: center;
  }
`;

const Slogan = styled.div`
  color: #FFF;
  font-variant-numeric: oldstyle-nums proportional-nums;
  font-family: Inter;
  font-size: 56px;
  max-width: 156px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%; /* 61.6px */
  letter-spacing: -2.24px;
  margin-bottom: 18px;
  @media (max-width: 879px) {
    font-size: 1.5rem;
    margin-bottom: 12px;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 30px;
  @media (max-width: 797px) {
    margin-bottom: 20px;
  }
`;

const NavLink = styled.a`
  color: #fff;
  font-size: 17px;
  text-decoration: none;
  opacity: 0.85;
  transition: opacity 0.2s;
  font-weight: 400;
  &:hover {
    opacity: 1;
  }
`;

const Center = styled.div`
  min-width: 220px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 879px) {
    align-items: center;
    min-width: 0;
    text-align: center;
  }
`;

const ContactTitle = styled.div`
  font-weight: 600;
  margin-bottom: 6px;
  font-size: 15px;
  opacity: 0.7;
`;

const Contact = styled.div`
  font-size: 15px;
  opacity: 0.85;
  line-height: 1.5;
`;

const Right = styled.div`
  min-width: 220px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;
  @media (max-width: 879px) {
    align-items: center;
    min-width: 0;
    text-align: center;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  @media (max-width: 879px) {
    justify-content: center;
  }
`;

const SocialButton = styled.a`
  border: 1px solid #444;
  border-radius: 20px;
  padding: 4px 16px;
  color: #fff;
  font-size: 15px;
  text-decoration: none;
  opacity: 0.8;
  transition: background 0.2s, opacity 0.2s;
  margin-bottom: 4px;
  font-weight: 400;
  &:hover {
    background: #222;
    opacity: 1;
  }
`;

const Copyright = styled.div`
  font-size: 15px;
  opacity: 0.5;
  @media (max-width: 879px) {
    text-align: center;
    margin: 16px 0 0 0;
  }
`;

const Disclaimer = styled.div`
  display: none;
  @media (max-width: 879px) {
    display: block;
    text-align: center;
      color: #fff;
    padding: 11px ;
    border-radius: 8px;
    text-align: center;
    font-size: 15px;
    line-height: 1.5;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 2px 12px #0002;
  }
`;

export default function Footer() {
  return (
    <FooterBg>
      <FooterContainer>
        <FooterContent>
          <Left>
            <Slogan>Join the<br/>great<br/>game!</Slogan>
            
          </Left>
          <Center>
          <Nav>
              <NavLink href="#">Home</NavLink>
              <NavLink href="#">How to play</NavLink>
              <NavLink href="#">Basic strategies</NavLink>
            </Nav>
            <ContactTitle>CONTACT US</ContactTitle>
            <Contact>
              +1 891 989-11-91<br/>
              prolovedcusage-8288@yopmail.com
            </Contact>
          </Center>
          <Right>
            <Copyright>© 2023 — Copyright</Copyright>
            <Socials>
              <SocialButton href="#">Instagram</SocialButton>
              <SocialButton href="#">Whatsapp</SocialButton>
              <SocialButton href="#">Telegram</SocialButton>
            </Socials>
          </Right>
        </FooterContent>
        <Disclaimer>
          <div style={{fontWeight: 879, fontSize: 32, marginBottom: 8}} aria-label="18+ SVG">
            <svg style={{margin: "0px auto"}} xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
              <g clipPath="url(#clip0_4001_1010)">
                <mask id="mask0_4001_1010" style={{maskType:'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="51" height="51">
                  <path d="M50.0062 0.191406H0.00622559V50.1914H50.0062V0.191406Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_4001_1010)">
                  <path d="M15.8231 33.7059V20.1313H12.6851V16.6526H20.1533V33.7059H15.8231Z" fill="white"/>
                  <path d="M36.4275 21.0558C36.4275 22.5397 35.6247 23.8533 34.2868 24.5832C36.1598 25.3616 37.3275 26.9916 37.3275 28.889C37.3275 31.9541 34.6028 33.9003 30.3458 33.9003C26.0885 33.9003 23.364 31.9784 23.364 28.9621C23.364 27.0159 24.6289 25.3616 26.5994 24.5832C25.1642 23.7803 24.2397 22.4182 24.2397 20.9343C24.2397 18.2095 26.6239 16.4824 30.3214 16.4824C34.0677 16.4824 36.4275 18.2583 36.4275 21.0558ZM27.4508 28.5242C27.4508 29.9596 28.4727 30.7624 30.3458 30.7624C32.2189 30.7624 33.2649 29.9841 33.2649 28.5242C33.2649 27.1134 32.2189 26.3104 30.3458 26.3104C28.4725 26.3104 27.4508 27.1134 27.4508 28.5242ZM27.8889 21.2991C27.8889 22.5156 28.7646 23.1965 30.3458 23.1965C31.927 23.1965 32.8028 22.5155 32.8028 21.2991C32.8028 20.0344 31.927 19.3287 30.3458 19.3287C28.7644 19.3287 27.8889 20.0344 27.8889 21.2991Z" fill="white"/>
                  <path d="M44.5329 18.5778C45.2527 20.7025 45.6179 22.9249 45.6179 25.1915C45.6179 36.5567 36.3715 45.8031 25.0061 45.8031C13.6408 45.8031 4.39422 36.5567 4.39422 25.1915C4.39422 13.8259 13.6407 4.57986 25.006 4.57986C27.2729 4.57986 29.4953 4.94475 31.6197 5.66496V1.07809C29.4738 0.489859 27.2575 0.191406 25.0061 0.191406C11.2212 0.191406 0.00622559 11.4064 0.00622559 25.1915C0.00622559 38.9766 11.2212 50.1916 25.0061 50.1916C38.791 50.1916 50.0059 38.9766 50.0059 25.1915C50.0059 22.9402 49.7076 20.7238 49.1194 18.5778H44.5329Z" fill="white"/>
                  <path d="M43.2855 6.89813V2.10449H39.8385V6.89813H35.0736V10.3449H39.8385V15.1384H43.2855V10.3449H48.0788V6.89813H43.2855Z" fill="white"/>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_4001_1010">
                  <rect width="50" height="50" fill="white" transform="translate(0.00622559 0.191406)"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div style={{fontWeight: 879, marginBottom: 8, fontSize: 20}}>Disclaimer</div>
          <div style={{marginBottom: 12}}>
            This game involves financial risk and may be addictive. Play responsibly.
          </div>
          <div style={{marginBottom: 12}}>
            Fantasy Cricket Arena offers fantasy sports for entertainment. These games are not for employment or income. Play within your means and understand the risks. The platform is not liable for any issues arising from gameplay.
          </div>
          <div style={{margin: '12px 0 4px', fontWeight: 600}}>Links</div>
          <div>Cookies Policy<br/>Fair Play Policy<br/>Cancellation and Refund Policy<br/>Legalities</div>
            <Divier />
          <div style={{marginTop: 12, fontSize: 13}}>Terms and Conditions &nbsp; Privacy Policy</div>
          <div style={{marginTop: 8, fontSize: 12}}>© 2024 fantasysportsindia. All Rights Reserved.</div>
        </Disclaimer>
      </FooterContainer>
    </FooterBg>
  );
} 
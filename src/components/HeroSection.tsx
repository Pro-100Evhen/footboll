import React from 'react';
import styled from '@emotion/styled';

const Section = styled.section`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 40px 16px 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 900px) {
    padding: 32px 8px 0 8px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  width: 100%;
  align-items: center;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 12px;
  @media (max-width: 797px) {
    display: none;
  }
`;
const TitleMob = styled.h1`
  color: #fff;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  @media (min-width: 797px) {
    display: none;
  }
`;

const Description = styled.p`
  color: #cfd8dc;
  font-size: 1.1rem;
  margin-bottom: 16px;
  @media (max-width: 797px) {
    display: none;
  }
`;

const Button = styled.a`
  display: block;
  width: 212px;
  background: linear-gradient(180deg, #885df1 0%, #6610f2 100%);
  color: #fff;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 167.3%; /* 25.095px */
  padding: 12px 23px;
  border-radius: 8px;
  text-decoration: none;
  margin-top: 8px;
  transition: background 0.7s;
  &:hover {
    background: linear-gradient(90deg, #f357a8 0%, #7b2ff2 100%);
  }
  @media (max-width: 797px) {
    display: none;
  }
`;

const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Img = styled.img`
  max-width: 100%;
  box-shadow: 0 4px 32px #0003;
`;

export default function HeroSection() {
  return (
    <Section>
      <Grid>
        <Info>
          <Title>What is fantasy football?</Title>
          <TitleMob>Welcome to Fantasy Arena - the best place for fantasy sports</TitleMob>
          <Description>
            Fantasy football opens up a whole world of fantasy football to your game. Join and feel
            football drama, show performance, meet peers, win fantasy, strategize your roster!
          </Description>
          <Button href="#">Sign up in Whatsapp</Button>
        </Info>
        <ImageWrap>
          <Img src="/banner.jpg" alt="Fantasy football field" />
        </ImageWrap>
      </Grid>
    </Section>
  );
}

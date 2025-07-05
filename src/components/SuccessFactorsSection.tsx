import React from 'react';
import styled from '@emotion/styled';

const Section = styled.section`
  width: 100%;
  max-width: 1220px;
  margin: 48px auto 0 auto;
  padding: 0 16px 40px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 120%;
  text-align: center;
  margin-bottom: 32px;
`;

const ContentRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 48px;
  align-items: flex-end;
  justify-content: center;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;

const BigImage = styled.img`
  width: 340px;
  height: auto;
  max-width: 90vw;
  object-fit: contain;
  @media (max-width: 900px) {
    width: 220px;
    margin-bottom: 24px;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const Card = styled.div`
  background: #1F2C3D;
  border-radius: 20px;
  box-shadow: 0 4px 32px #0002;
  padding: 32px 24px 28px 24px;
  min-width: 220px;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CardIcon = styled.img`
  width: 48px;
  height: 48px;
  margin-bottom: 18px;
`;

const CardTitle = styled.div`
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const BlurCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  z-index: -1;
  @media(max-width: 797px){
    display: none;
  }
`;

export const BlurOne = styled(BlurCircle)`
  top: 20%;
  left: 10%;
  width: 200px;
  height: 200px;
  background-color: rgba(43, 112, 151, 1);
`;

export const BlurTwo = styled(BlurCircle)`
  bottom: 2%;
  right: 40%;
  width: 700px;
  height: 700px;
  background-color: rgba(43, 112, 151, 0.5);
`;

const CardDesc = styled.div`
  color: #cfd8dc;
  font-size: 1.05rem;
  line-height: 1.5;
`;

export default function SuccessFactorsSection() {
  return (
    <Section>
      <BlurOne />
      <BlurTwo />
      <Title>Key success factors</Title>
      <ContentRow>
        <BigImage src="/poll.png" alt="Player" />
        <CardsGrid>
          <Card>
            <CardIcon src="/game_1.svg" alt="Player statistics" />
            <CardTitle>Player statistics</CardTitle>
            <CardDesc>
              Analyze the form of players before making a selection. Take into account their recent performances and the average number of points scored per match.
            </CardDesc>
          </Card>
          <Card>
            <CardIcon src="/game_2.svg" alt="Tactics" />
            <CardTitle>Tactics</CardTitle>
            <CardDesc>
              Vary your schemes depending on your opponents. Some matches require a change of formation; if your team is playing against a weaker opponent, be aggressive.
            </CardDesc>
          </Card>
          <Card>
            <CardIcon src="/game_3.svg" alt="Adaptation" />
            <CardTitle>Adaptation</CardTitle>
            <CardDesc>
              Adjust the lineup according to real matches. Injuries, player rotation and disqualifications can change the balance of power.
            </CardDesc>
          </Card>
          <Card>
            <CardIcon src="/game_4.svg" alt="Rewards" />
            <CardTitle>Rewards</CardTitle>
            <CardDesc>
              Join leagues with prizes! Many fantasy leagues offer valuable rewards for the winners: from virtual trophies to real gifts.
            </CardDesc>
          </Card>
        </CardsGrid>
      </ContentRow>
    </Section>
  );
} 
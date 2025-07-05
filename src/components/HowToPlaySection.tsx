import React from 'react';
import styled from '@emotion/styled';

const Section = styled.section`
  width: 100%;
  max-width: 1220px;
  margin: 40px auto 0 auto;
  padding: 0 16px 40px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  width: 100%;
  background: linear-gradient(135deg, #23244a 0%, #1a1b2b 100%);
  border-radius: 18px;
  box-shadow: 0 4px 32px #0002;
  padding: 48px 48px 32px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 900px) {
    padding: 24px 8px 24px 8px;
  }
`;

const Title = styled.h2`
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  color: #cfd8dc;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 32px;
`;

const MainRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;
  margin-bottom: 40px;
`;

const BlockRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 48px;
  width: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

const Block = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 32px;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
    text-align: center;
  }
`;
const BlockReverse = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 32px;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 16px;
    text-align: center;
  }
`;

const BlockContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
  }
`;

const BlockTitle = styled.div`
  color: var(--White, #fff);
  font-family: Montserrat;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 33.8px */
  border-bottom: 1px solid #2c90f7;
`;

const BlockDesc = styled.div`
  color: #cfd8dc;
  font-size: 1.05rem;
  line-height: 1.6;
`;

const StepsGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 18px;
  margin: 32px 0 0 0;
`;

const StepRow = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  background: rgba(255, 255, 255, 0.01);
  border-radius: 12px;
  padding: 22px;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 14px;
  }
`;

const StepNumber = styled.div`
  font-size: 2.2rem;
  font-weight: 700;
  color: #fff;
  min-width: 48px;
`;

const StepIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 8px;
`;

const StepText = styled.div`
  color: #fff;
  font-size: 1.1rem;
  font-weight: 500;
  flex: 1;
`;

const StepButton = styled.a`
  display: inline-block;
  background: linear-gradient(90deg, #7b2ff2 0%, #f357a8 100%);
  color: #fff;
  font-weight: 600;
  padding: 10px 22px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1rem;
  margin-left: 12px;
  transition: background 0.2s;
  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 8px;
    width: 100%;
    text-align: center;
  }
  &:hover {
    background: linear-gradient(90deg, #f357a8 0%, #7b2ff2 100%);
  }
`;

const BannerImg = styled.img`
  width: 100%;
  margin: 32px auto 0 auto;
  display: block;
  border-radius: 16px;
  box-shadow: 0 4px 32px #0003;
`;

const BallImg = styled.img`
  width: 253px;
  height: 253px;
  min-width: 253px;
  min-height: 253px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 16px #0003;
  background: #181c20;
  margin-bottom: 8px;
  @media (max-width: 600px) {
    width: 120px;
    height: 120px;
    min-width: 120px;
    min-height: 120px;
  }
`;

const BallImgBottom = styled.img`
  width: 253px;
  height: 253px;
  min-width: 253px;
  min-height: 253px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 16px #0003;
  background: #181c20;
  margin-bottom: 8px;
  @media (max-width: 797px) {
    width: 120px;
    height: 120px;
    min-width: 120px;
    min-height: 120px;
    margin: 0px auto;
  }
`;

export default function HowToPlaySection() {
  return (
    <Section>
      <Card>
        <Title>How to play fantasy football?</Title>
        <Subtitle>The basics of the game</Subtitle>
        <MainRow>
          <BlockRow>
            <Block>
              <BallImg src="/boll.png" alt="Ball" />
              <BlockContent>
                <BlockTitle>Team formation</BlockTitle>
                <BlockDesc>
                  Choose 11 players, distributing the budget between stars and promising talents.
                  It&apos;s important to find a balance between top-scorers and underrated players
                  when creating a playing XI or points. Don&apos;t forget super substitutes — they
                  will help in case of injuries or disqualifications of the main players.
                </BlockDesc>
              </BlockContent>
            </Block>
          </BlockRow>
          <BlockRow>
            <BlockReverse style={{ justifyContent: 'flex-end' }}>
              <BlockContent>
                <BlockTitle>Scoring</BlockTitle>
                <BlockDesc>
                  Gain points for goals, assists, clean sheets, and other player performance in real
                  matches. Points are also reduced for goals conceded, cards, and missed penalties.
                  Interactions, news and events influence all. The main aim: more points for
                  conceded goals, receiving cards, or missing penalties.
                </BlockDesc>
              </BlockContent>
              <BallImgBottom
                src="/boll.png"
                alt="Ball"
                style={{ alignSelf: 'flex-end', marginTop: '24px' }}
              />
            </BlockReverse>
          </BlockRow>
        </MainRow>
        <StepsGrid>
          <StepRow>
            <StepNumber>01</StepNumber>
            <StepIcon src="/person.svg" alt="person" />
            <StepText>PLAY WITH FRIENDS — CREATE LEAGUES AND COMPETE WITH EVERYONE</StepText>
            <StepButton href="#">START YOUR JOURNEY</StepButton>
          </StepRow>
          <StepRow>
            <StepNumber>02</StepNumber>
            <StepIcon src="/magic.svg" alt="magic" />
            <StepText>STRATEGIC THINKING — LEARN TO ANALYZE MATCHES AND WIN</StepText>
            <StepButton href="#">START YOUR JOURNEY</StepButton>
          </StepRow>
          <StepRow>
            <StepNumber>03</StepNumber>
            <StepIcon src="/magic.svg" alt="magic" />
            <StepText>EMOTIONS AND EXCITEMENT — FEEL THE DRIVE OF EVERY ROUND AND MATCH</StepText>
            <StepButton href="#">START YOUR JOURNEY</StepButton>
          </StepRow>
        </StepsGrid>
        <BannerImg src="/goll.png" alt="Banner" />
      </Card>
    </Section>
  );
}

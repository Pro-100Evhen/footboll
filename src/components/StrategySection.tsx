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
  @media (max-width: 797px) {
    text-align: center;
  }
`;

const BlockDesc = styled.div`
  color: #cfd8dc;
  font-size: 1.05rem;
  line-height: 1.6;
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

const TitleUnderline = styled.div`
  width: 120px;
  height: 3px;
  background: #2c90f7;
  border-radius: 2px;
  margin: 0 auto 32px auto;
`;

const LeaguesRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  width: 100%;
  justify-content: center;
  align-items: stretch;
  margin-bottom: 32px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 24px;
    align-items: center;
  }
`;

const LeagueCard = styled.div`
  background: rgba(24, 28, 32, 0.95);
  border-radius: 20px;
  box-shadow: 0 4px 32px #0002;
  padding: 32px 28px 28px 28px;
  min-width: 260px;
  max-width: 340px;
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  transition:
    box-shadow 0.2s,
    transform 0.2s;
  &:hover {
    box-shadow: 0 8px 40px #0005;
    transform: translateY(-4px) scale(1.03);
  }
`;

const LeagueIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7b2ff2 0%, #f357a8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  position: relative;
`;

const LeagueIconImg = styled.img`
  width: 32px;
  height: 32px;
`;

const LeagueTitle = styled.div`
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const LeagueDesc = styled.div`
  color: #cfd8dc;
  font-size: 1.05rem;
  line-height: 1.5;
`;

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  color: #7b2ff2;
  margin: 0 8px;
  @media (max-width: 900px) {
    transform: rotate(90deg);
    margin: 12px 0;
  }
`;

const SubText = styled.div`
  color: #fff;
  font-family: Montserrat, sans-serif;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 0;
  position: relative;
`;

const SubUnderline = styled.div`
  width: 120px;
  height: 3px;
  background: #2c90f7;
  border-radius: 1px;
  margin: 12px auto 0 auto;
`;

function League({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <LeagueCard>
      <LeagueIcon>
        <LeagueIconImg src={icon} alt={title} />
      </LeagueIcon>
      <LeagueTitle>{title}</LeagueTitle>
      <LeagueDesc>{desc}</LeagueDesc>
    </LeagueCard>
  );
}

export default function StrategySection() {
  return (
    <Section>
      <Card>
        <Title>Basic strategies</Title>
        <Subtitle>
          How to succeed in fantasy football? Plan, analyze, and be one step ahead of your
          opponents.
        </Subtitle>
        <MainRow>
          <BlockRow>
            <Block>
              <BallImg src="/frame.png" alt="Ball" />
              <BlockContent>
                <BlockTitle>Lineup balance</BlockTitle>
                <BlockDesc>
                  It is important to combine top stars and promising players. Star players can bring
                  steady points, but they are expensive, so it is worth complementing them with
                  underrated players who can surprise with their performance.
                </BlockDesc>
              </BlockContent>
            </Block>
          </BlockRow>
          <BlockRow>
            <BlockReverse style={{ justifyContent: 'flex-end' }}>
              <BlockContent>
                <BlockTitle>Transfers and captain</BlockTitle>
                <BlockDesc>
                  Use substitutions wisely and choose your captain strategically. Keep track of
                  players&apos; form, injuries, suspensions, and changes in team lineups on a weekly
                  basis. Don&apos;t keep players who have lost game practice in the lineup.
                </BlockDesc>
              </BlockContent>
              <BallImgBottom
                src="/frame.png"
                alt="Ball"
                style={{ alignSelf: 'flex-end', marginTop: '24px' }}
              />
            </BlockReverse>
          </BlockRow>
        </MainRow>

        <BlockTitle style={{ borderBottom: 'none', paddingBottom: '12px' }}>
          The best leagues for fantasy football
        </BlockTitle>
        <TitleUnderline />
        <LeaguesRow>
          <League
            icon="/leader.svg"
            title="Premier League Fantasy"
            desc="The most popular platform with hundreds of thousands of players."
          />
          <Arrow>&gt;</Arrow>
          <League
            icon="/champion.svg"
            title="UEFA Champions League Fantasy"
            desc="Compete at the level of the best clubs in Europe."
          />
          <Arrow>&gt;</Arrow>
          <League
            icon="/lig.svg"
            title="Super Lig Fantasy"
            desc="Fantasy league for fans of Turkish football."
          />
        </LeaguesRow>
        <SubText>
          If you like sports, pay attention to fantasy cricket - this is <br></br> another way to
          test your analytical skills.
          <SubUnderline />
        </SubText>

        <BannerImg src="/phone.png" alt="Banner" />
      </Card>
    </Section>
  );
}

'use client';

import StrategySection from '@/components/StrategySection';
import HeroSection from '../components/HeroSection';
import HowToPlaySection from '../components/HowToPlaySection';
import SuccessFactorsSection from '@/components/SuccessFactorsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowToPlaySection />
      <StrategySection />
      <SuccessFactorsSection />
    </>
  );
}

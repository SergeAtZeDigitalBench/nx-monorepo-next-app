import { Suspense } from 'react';

import HeroSection, { HeroSectionSkeleton } from '../components/HeroSection';

const Homepage = () => {
  return (
    <>
      <Suspense fallback={<HeroSectionSkeleton />}>
        <HeroSection pathname="home" />
      </Suspense>
    </>
  );
};

export default Homepage;

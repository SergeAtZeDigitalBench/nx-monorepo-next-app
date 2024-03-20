import { Suspense } from 'react';

import HeroSection, { HeroSectionSkeleton } from '../../components/HeroSection';

const GamesPage = () => {
  return (
    <>
      <Suspense fallback={<HeroSectionSkeleton />}>
        <HeroSection pathname="games" />
      </Suspense>
    </>
  );
};

export default GamesPage;

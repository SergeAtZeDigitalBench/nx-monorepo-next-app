import { Suspense } from 'react';

import HeroSection, { HeroSectionSkeleton } from '../../components/HeroSection';

const MoviesPage = () => {
  return (
    <>
      <Suspense fallback={<HeroSectionSkeleton />}>
        <HeroSection pathname="movies" />
      </Suspense>
    </>
  );
};

export default MoviesPage;

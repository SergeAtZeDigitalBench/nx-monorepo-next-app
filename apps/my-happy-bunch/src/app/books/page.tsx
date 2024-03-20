import { Suspense } from 'react';

import HeroSection, { HeroSectionSkeleton } from '../../components/HeroSection';

const BooksPage = () => {
  return (
    <>
      <Suspense fallback={<HeroSectionSkeleton />}>
        <HeroSection pathname="books" />
      </Suspense>
    </>
  );
};

export default BooksPage;

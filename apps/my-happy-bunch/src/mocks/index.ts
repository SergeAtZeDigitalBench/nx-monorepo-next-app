import heroSections from './hero.json';

export const getHeroSection = (pathname: string) => {
  const found = heroSections.find((current) => current.pathname === pathname);
  if (!found) {
    throw new Error(`Hero section not found for the '${pathname}'`);
  }

  return found;
};

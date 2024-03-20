import type { HeroContent } from '../../types';

import { getHeroSection } from '../../mocks';

const getErrorMessage = (error: unknown, defaultError: string) => {
  if (error instanceof Error) {
    return error.message;
  }

  return defaultError;
};

const serveMockData = <D = unknown>({
  data,
  timeout = 800,
  errorMessage,
}: {
  data: D;
  timeout?: number;
  errorMessage?: string;
}): Promise<D> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (errorMessage) {
        reject(new Error(errorMessage));
      } else {
        resolve(data);
      }
    }, timeout);
  });

export const fetchHeroSection = async (
  pathname: string
): Promise<[HeroContent, null] | [null, string]> => {
  try {
    const data = getHeroSection(pathname);
    const resolvedValue = await serveMockData({ data });

    return [resolvedValue, null];
  } catch (error) {
    return [null, getErrorMessage(error, 'Hero section fetch error')];
  }
};

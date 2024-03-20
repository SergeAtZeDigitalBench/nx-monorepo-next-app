import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import HeroSection, {
  HeroSectionSkeleton,
} from '../../src/components/HeroSection';

describe('HeroSection', () => {
  describe('HeroSectionSkeleton', () => {
    it('should match the snapshot', () => {
      const { baseElement } = render(<HeroSectionSkeleton />);

      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('HeroSection', () => {
    it('should render the component', async () => {
      const { baseElement } = render(await HeroSection({ pathname: 'home' }));

      expect(baseElement).toBeDefined();
    });

    it('should render title subtitle and cover image', async () => {
      render(await HeroSection({ pathname: 'home' }));

      const title = screen.getByRole('heading', {
        name: /Welcome/i,
      });

      const subTitle = screen.getByText(/Nothing is more difficult/i);
      const image = screen.getByRole('img');

      expect(title).toBeDefined();
      expect(subTitle).toBeDefined();
      expect(image).toBeDefined();
    });
  });

  it('should handle error response case', async () => {
    render(await HeroSection({ pathname: 'somePageNotFound' }));

    const errorMessage = screen.getByText(/Hero section not found for the/i);
    expect(errorMessage).toBeDefined();
  });
});

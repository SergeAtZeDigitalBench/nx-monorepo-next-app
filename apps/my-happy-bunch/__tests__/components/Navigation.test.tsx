import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Navigation from '../../src/components/Navigation';

describe('Navigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Navigation />);
    expect(baseElement).toBeDefined();
  });
});

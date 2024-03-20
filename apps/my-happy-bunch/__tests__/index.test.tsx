import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Page from '../src/app/page';

describe('Page', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Page />);
    expect(baseElement).toBeDefined();
  });
});

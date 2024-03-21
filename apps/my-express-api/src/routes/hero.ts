import { Router } from 'express';

import { getHeroSection, getHeroSectionsList } from '../mocks';
import { getErrorMessage } from '../libs';

const heroRoute = Router();

heroRoute.get('/', (_, res) => {
  res.status(200).json({ data: getHeroSectionsList() });
});

heroRoute.get('/:slug', (req, res) => {
  const slug = req.params.slug;

  try {
    return res.status(200).json({ data: getHeroSection(slug) });
  } catch (error) {
    return res.status(500).json({
      error: getErrorMessage(
        error,
        'Server error. Failed find the hero section.'
      ),
    });
  }
});

export { heroRoute };

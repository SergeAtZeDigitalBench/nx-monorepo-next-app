import { describe, it, expect } from 'vitest';

import { paths } from '../../src/lib/paths';

describe('Lib > paths', () => {
  it('should return homepage', () => {
    expect(paths.home()).toEqual('/');
  });
  it('should return books page', () => {
    expect(paths.books()).toEqual('/books');
    expect(paths.books('abc')).toEqual('/books/abc');
  });

  it('should return movies page', () => {
    expect(paths.movies()).toEqual('/movies');
    expect(paths.movies('abc')).toEqual('/movies/abc');
  });

  it('should return games page', () => {
    expect(paths.games()).toEqual('/games');
    expect(paths.games('abc')).toEqual('/games/abc');
  });

  it('should return signin and signup pages', () => {
    expect(paths.signin()).toEqual('/signin');
    expect(paths.register()).toEqual('/register');
  });

  it('should return private page', () => {
    expect(paths.private.account()).toEqual('/private/account');
  });
});

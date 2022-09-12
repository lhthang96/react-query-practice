import { ImageSize } from '../interfaces';

// Refs: https://api-docs.igdb.com/#images
export const IGDB_IMG_RATIO: { [key in ImageSize]?: number } = {
  cover_small: 90 / 128,
  screenshot_med: 569 / 320,
  cover_big: 264 / 352,
  logo_med: 284 / 160,
  screenshot_big: 889 / 500,
  screenshot_huge: 1280 / 720,
  thumb: 90 / 90,
  micro: 35 / 35,
  '720p': 1280 / 720,
  '1080p': 1920 / 1080
};

/**
 * Refs: https://api-docs.igdb.com/#endpoints
 * The interfaces is adjusted for adapting the usage of this project
 */

import { GameCategory, GamePlatformCategory, GameStatus, ReleaseDateCategory, ReleaseDateRegion } from '../enums';

export type Game = {
  id: string;
  name?: string;
  summary?: string;
  storyline?: string;
  status?: GameStatus;
  category?: GameCategory;
  cover?: GameCover;
  first_release_date?: number; // Unix time stamp
  game_modes?: GameMode[];
  screenshots?: GameScreenShot[];
  genres: GameGenre[];
  follows?: number;
  total_rating?: number; // Average rating based on both IGDB user and external critic scores
  total_rating_count?: number; // 	Total number of user and external critic scores
  release_dates?: GameReleaseDate[];
  similar_games?: SimilarGame[];
  url?: string; // The website address (URL) of the item
  platforms?: number[];
  themes?: GameTheme[];
};

export type GameCover = {
  animated: boolean;
  width: number;
  height: number;
  url: string;
  image_id: string;
};

export type GameScreenShot = {
  id: string;
  width: number;
  height: number;
  url: string;
  image_id: string;
};

export type GameMode = {
  id: string;
  name: string;
};

export type GameGenre = {
  id: string;
  name: string;
};

export type GameReleaseDate = {
  category: ReleaseDateCategory;
  date: number; // Unix time stamp
  region: ReleaseDateRegion;
};

export type SimilarGame = Pick<Game, 'id' | 'name' | 'cover'>;

export type GamePlatform = {
  name: string;
  category?: GamePlatformCategory;
};

export type GameTheme = {
  name: string;
  id: string;
};

export type ImageSize =
  | 'cover_small' // 90 x 128	Fit
  | 'screenshot_med' // 569 x 320	Lfill, Center gravity
  | 'cover_big' // 264 x 374	Fit
  | 'logo_med' // 284 x 160	Fit
  | 'screenshot_big' // 889 x 500	Lfill, Center gravity
  | 'screenshot_huge' // 1280 x 720	Lfill, Center gravity
  | 'thumb' // 90 x 90	Thumb, Center gravity
  | 'micro' // 35 x 35	Thumb, Center gravity
  | '720p' // 1280 x 720	Fit, Center gravity
  | '1080p'; //1920 x 1080	Fit, Center gravity

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
};

export type GameCover = {
  animated: boolean;
  width: number;
  height: number;
  url: string;
};

export type GameScreenShot = {
  id: string;
  width: number;
  height: number;
  url: string;
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

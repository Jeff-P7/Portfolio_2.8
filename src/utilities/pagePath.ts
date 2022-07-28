// import { categoryList } from '../data/categories.sample';

/**
 * Dictionary paths for pages to void changing locations on dependent files with urls
 */
let PagePath: Record<string, string> = {
  profile: '/user/profile',
  home: '/',
  // home: '/home',
  auth: '/auth',
  // Outer ---------------------------------------------------------------------
  landing: '/',
  // Settings ------------------------------------------------------------------
  settings: '/settings/profile',
  security: '/settings/security',
  // Explore categories
  explore: '/explore/all',
  // programming: '/explore/programming',
};

// categoryList.forEach((item: string) => (PagePath[item] = '/explore/' + item));

export default PagePath;

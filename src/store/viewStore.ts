import { atom } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent';

// Store for view preference (grid vs list)
export const viewMode = persistentAtom<'grid' | 'list'>('viewMode', 'grid');

// Store for current category filter
export const currentCategory = atom<string | null>(null);

// Store for search query
export const searchQuery = atom<string>('');

import { writable } from 'svelte/store';
import type { Theme } from './types';

export const theme = writable<Theme>('dark');

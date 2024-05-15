import { writable } from 'svelte/store';
import type { Theme } from './types';

export const menu_open = writable(false);
export const theme = writable<Theme>('dark');

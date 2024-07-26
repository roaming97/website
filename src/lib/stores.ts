import { writable } from 'svelte/store';
import type { Theme } from './types';
import { localStorageStore } from 'fractils';

export const menu_open = writable(false);
export const theme = localStorageStore<Theme>('theme', 'dark');

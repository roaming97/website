import { localStorageStore } from 'fractils'
import { writable } from 'svelte/store'

export const opacity = writable(1)
export const client_index = localStorageStore('client_index', 0)
export const thumbnailIsActive = writable(false)

import { writable } from "svelte/store"
import type { Writable } from "svelte/store"

export type Theme = "skeleton"
export const selectedTheme: Writable<Theme> = writable<Theme>("skeleton")
export const isDarkMode: Writable<boolean> = writable<boolean>(true)
export const isSidebarOpen: Writable<boolean> = writable<boolean>(true)

import { writable } from "svelte/store"
import type { Writable } from "svelte/store"

type Theme = "skeleton" | "wintry" | "modern" | "gold-nouveau"
const theme: Writable<Theme> = writable<Theme>("skeleton")

function getAllThemes(): { name: string, key: string }[] {
    return [
        { name: "Skeleton", key: "skeleton" },
        { name: "Wintry", key: "wintry" },
        { name: "Modern", key: "modern" },
        { name: "Gold Nouveau", key: "gold-nouveau" }
    ]
}

export { theme, getAllThemes }
export type { Theme }

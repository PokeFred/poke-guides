import { existsSync, rmSync, mkdirSync } from "fs"
import { join as pathJoin } from "path"

const CACHE_FOLDER_PATH: string = pathJoin(process.cwd(), "cache")

export function getCacheFolderPath(): string {
    return CACHE_FOLDER_PATH
}

export function reCreateCacheFolder(): void {
    if (!existsSync(CACHE_FOLDER_PATH)) return
    rmSync(CACHE_FOLDER_PATH, { recursive: true })
    mkdirSync(CACHE_FOLDER_PATH)
}

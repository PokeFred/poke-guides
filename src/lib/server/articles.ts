import { existsSync, statSync, readdirSync, readFileSync } from "fs"
import type { Stats } from "fs"
import { join as pathJoin } from "path"
import type { ArticleLink } from "$utils"

const ARTICLES_FOLDER_PATH: string = pathJoin(process.cwd(), "articles")

function getRawArticlePaths(): string[] {
    if (!existsSync(ARTICLES_FOLDER_PATH)) return []

    const articlesFolderStats: Stats = statSync(ARTICLES_FOLDER_PATH)
    if (!articlesFolderStats.isDirectory()) return []

    let articlesFolderContent: string[] = []
    readdirSync(ARTICLES_FOLDER_PATH, { encoding: "utf-8" })
        .filter((element: string): boolean => element.endsWith(".md"))
        .forEach((element: string): number => articlesFolderContent.push(pathJoin(ARTICLES_FOLDER_PATH, element)))

    return articlesFolderContent
}

function filterValidArticlePaths(rawArticlePaths: string[]): string[] {
    const validArticlePaths: string[] = []
    rawArticlePaths
        .filter((element: string): boolean => existsSync(element.replace(".md", ".json")))
        .filter((element: string): boolean => {
            const g = ""
            // Check here the json File

            return true
        })
        .forEach((element: string): number => validArticlePaths.push(element))

    return validArticlePaths
}

function getArticlesFromPaths() {
    return []
}

export async function getArticles(): Promise<void> {}

export async function getArticlesLinks(): Promise<ArticleLink[]> {
    const rawArticlePaths: string[] = getRawArticlePaths()
    const validArticlePaths: string[] = filterValidArticlePaths(rawArticlePaths)

    //console.log(validArticlePaths)
    return []
}

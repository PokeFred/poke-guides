import type { Database } from 'better-sqlite3'
import { existsSync, statSync, readdirSync } from 'fs'
import type { Stats } from 'fs'
import { join as pathJoin } from 'path'
import { getCacheFolderPath } from './utils'

const RAW_ARTICLE_FOLDER_PATH: string = pathJoin(process.cwd(), 'data', 'articles')
const ARTICLE_FOLDER_PATH: string = pathJoin(getCacheFolderPath(), 'articles')

export type Article = {
    identifier: string
    name: string
    description: string
    categories: string[]
    path: string
}
export type ArticleFilter = {
    identifier: string
    categories: string[]
}

export function getArticle(identifier: string): Article {
    return {
        identifier: '',
        name: '',
        description: '',
        categories: [],
        path: '',
    }
}

export function getArticles(config?: ArticleFilter | undefined): Article[] {
    return []
}

export function setupArticles(db: Database) {
    db.prepare(
        `
        CREATE TABLE article (
            identifier char(255),
            name char(255),
            description char(255),
            -- add categories
            path char(255)
        )
    `,
    ).run()

    if (existsSync(RAW_ARTICLE_FOLDER_PATH)) {
    }

    console.log('T')
}

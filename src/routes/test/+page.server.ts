import type { PageServerLoad } from './$types'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import { existsSync, statSync, readFileSync } from 'fs'
import type { Stats } from 'fs'
import { join as pathJoin } from 'path'

async function getMarkdownContent(): Promise<string> {
    const markdownFilePath: string = pathJoin(process.cwd(), 'src', 'routes', 'test', 'example.md')
    if (!existsSync(markdownFilePath)) return ''

    const markdownFileStats: Stats = statSync(markdownFilePath)
    if (!markdownFileStats.isFile()) return ''
    if (!markdownFilePath.endsWith('.md')) return ''

    const rawMarkdownFile: string = readFileSync(markdownFilePath, { encoding: 'utf-8' })
    const markdownFile = await unified()
        .use((await import('remark-parse')).default) // parse markdown
        .use((await import('remark-gfm')).default) // GitHub flavored Markdown
        .use((await import('remark-rehype')).default, { allowDangerousHtml: true }) // be able to parse Markdown and HTML
        .use((await import('rehype-stringify')).default) // to html
        .process(rawMarkdownFile)

    console.log(markdownFile.toString())

    return markdownFile.toString()
}

export const load: PageServerLoad = async (): Promise<{ content: string }> => {
    return {
        content: await getMarkdownContent(),
    }
}

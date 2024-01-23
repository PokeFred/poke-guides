import type { LayoutServerLoad } from './$types'
import db from '$server/db'
import type { ArticleLink } from '$utils'

function getSidebarLinks(): ArticleLink[] {
    return [
        {
            name: 'Page 1',
            pathname: '/',
        },
        {
            name: 'Page 2',
            pathname: '/test',
        },
        {
            name: 'Page 3',
            pathname: '/test2',
        },
    ]
}

export const load: LayoutServerLoad = async () => {
    db.prepare('SELECT * FROM article').all()

    return {
        links: getSidebarLinks(),
    }
}

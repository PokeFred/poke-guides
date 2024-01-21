import type { LayoutServerLoad } from "./$types"
import type { SidebarLink } from "$utils"

function getSidebarLinks(): SidebarLink[] {
    return [
        {
            name: "Page 1",
            pathname: "/"
        },
        {
            name: "Page 2",
            pathname: "/test"
        },
        {
            name: "Page 3",
            pathname: "/test2"
        }
    ]
}

export const load: LayoutServerLoad = () => {
    return {
        links: getSidebarLinks()
    }
}

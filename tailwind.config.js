import { skeleton } from "@skeletonlabs/tw-plugin"
import { join as joinPath } from "node:path"

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/app.html",
        "./src/routes/**/*.svelte",
        "./src/lib/components/**/*.svelte",,
        joinPath(
            require.resolve("@skeletonlabs/skeleton"),
            "../**/*.{html,js,ts,svelte}"
        )
    ],
    theme: {
        extend: {},
    },
    plugins: [
        import("@tailwindcss/forms"),
        skeleton({
            themes: {
                preset: ["skeleton", "wintry", "modern", "gold-nouveau"]
            }
        })
    ]
}

import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

export const getCombinedPath = (url, ...paths) => {
    const __filename = fileURLToPath(url)
    const __dirname = dirname(__filename)

    return join(__dirname, ...paths)
}
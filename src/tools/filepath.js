import path from 'path'
import { fileURLToPath } from 'url'

const getFilePath = (metaUrl) => {
	const __filename = fileURLToPath(metaUrl)
	const __dirname = path.dirname(__filename)
	return { __filename, __dirname }
}

export { getFilePath }

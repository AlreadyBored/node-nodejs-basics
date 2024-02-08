import fs from 'fs/promises'
import path from 'path'
import { getFilePath } from './tools/filepath.js'

const create = async () => {
	try {
		const fileName = 'fresh.txt'
		const { __dirname } = getFilePath(import.meta.url)
		const fileToCreatePath = path.join(__dirname, 'files', fileName)
		const content = 'Some content!'

		await fs.writeFile(fileToCreatePath, content, { flag: 'wx' })
	} catch {
		throw new Error('FS operation failed')
	}
}

await create().catch((err) => console.error(err))

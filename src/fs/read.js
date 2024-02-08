import fs from 'fs/promises'
import path from 'path'
import { getFilePath } from './tools/filepath.js'
const read = async () => {
	try {
		const filename = 'fileToRead.txt'
		const { __dirname } = getFilePath(import.meta.url)
		const fileToReadPath = path.join(__dirname, 'files', filename)
		const data = await fs.readFile(fileToReadPath, {
			encoding: 'utf8',
		})
		console.log(data)
	} catch {
		throw new Error('FS operation failed')
	}
}

await read().catch((err) => console.error(err))

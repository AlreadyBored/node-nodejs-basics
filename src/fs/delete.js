import fs from 'fs/promises'
import path from 'path'
import { getFilePath } from '../tools/filepath.js'
const remove = async () => {
	try {
		const filename = 'fileToRemove.txt'
		const { __dirname } = getFilePath(import.meta.url)
		const fileToRemovePath = path.join(__dirname, 'files', filename)

		await fs.rm(fileToRemovePath)
	} catch {
		throw new Error('FS operation failed')
	}
}

await remove().catch((err) => console.error(err))

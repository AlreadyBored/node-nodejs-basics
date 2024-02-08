import fs from 'fs/promises'
import path from 'path'
import { getFilePath } from '../tools/filepath.js'

const rename = async () => {
	try {
		const { __dirname } = getFilePath(import.meta.url)
		const wrongFilePath = path.join(__dirname, 'files', 'wrongFileName.txt')
		const properFilePath = path.join(__dirname, 'files', 'properFilename.md')

		await fs.rename(wrongFilePath, properFilePath)
	} catch {
		throw new Error('FS operation failed')
	}
}

await rename().catch((err) => console.error(err))

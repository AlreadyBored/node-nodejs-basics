import fs from 'fs/promises'
import path from 'path'
import { getFilePath } from './tools/filepath.js'

const copy = async () => {
	try {
		const { __dirname } = getFilePath(import.meta.url)

		const sourceFolder = path.join(__dirname, 'files')
		const destinationFolder = path.join(__dirname, 'files_copy')
		await fs.mkdir(destinationFolder)
		const files = await fs.readdir(sourceFolder)
		for (const file of files) {
			const sourceFile = path.join(sourceFolder, file)
			const destinationFile = path.join(destinationFolder, file)
			await fs.copyFile(sourceFile, destinationFile)
		}
	} catch {
		throw new Error('FS operation failed')
	}
}

await copy().catch((err) => console.error(err))

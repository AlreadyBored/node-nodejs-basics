import fs from 'fs/promises'
import path from 'path'
import { getFilePath } from '../tools/filepath.js'

const list = async () => {
	try {
		const { __dirname } = getFilePath(import.meta.url)
		const distPath = path.join(__dirname, 'files')
		const files = await fs.readdir(`${distPath}`)
		console.log(files)
	} catch {
		throw new Error('FS operation failed')
	}
}

await list().catch((err) => console.error(err))

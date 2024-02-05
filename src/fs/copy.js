import fs from 'fs/promises'
import { existsSync } from 'node:fs'
const copy = async () => {
	if (!existsSync('./src/fs/files')) {
		throw new Error('FS operation failed')
	} else if (existsSync('./src/fs/files_copy')) {
		throw new Error('FS operation failed')
	}
	await fs.cp('./src/fs/files', './src/fs/files_copy', { recursive: true })
}

await copy().catch((err) => console.error(err))

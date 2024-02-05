import fs from 'fs/promises'
import { existsSync } from 'node:fs'
const folderToCopy = './src/fs/files'
const copyOfFolder = './src/fs/files_copy'
const copy = async () => {
	if (!existsSync(`${folderToCopy}`)) {
		throw new Error('FS operation failed')
	} else if (existsSync(`${copyOfFolder}`)) {
		throw new Error('FS operation failed')
	}
	await fs.cp(`${folderToCopy}`, `${copyOfFolder}`, { recursive: true })
}

await copy().catch((err) => console.error(err))

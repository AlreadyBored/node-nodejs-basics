import { existsSync } from 'fs'
import fs from 'fs/promises'
const filePath = './src/fs/files/'
const oldFilename = 'wrongFilename.txt'
const newFilename = 'properFilename.md'

const rename = async () => {
	if (!existsSync(`${filePath}${oldFilename}`)) {
		throw new Error('FS operation failed')
	} else if (existsSync(`${filePath}${newFilename}`)) {
		throw new Error('FS operation failed')
	}
	await fs.rename(`${filePath}${oldFilename}`, `${filePath}${newFilename}`)
}

await rename().catch((err) => console.error(err))

import { createHash } from 'node:crypto'
import { createReadStream } from 'node:fs'
const filePath = './src/hash/files/fileToCalculateHashFor.txt'
const calculateHash = async () => {
	const hash = createHash('sha256')
	const stream = createReadStream(filePath)

	stream.on('data', (data) => {
		hash.update(data)
	})

	stream.on('end', () => {
		const fileHash = hash.digest('hex')
		console.log(`SHA-256 Hash for ${filePath}: ${fileHash}`)
	})

	stream.on('error', (error) => {
		console.error(`Error reading file: ${error.message}`)
	})
}

await calculateHash()

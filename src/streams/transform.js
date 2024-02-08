import { Transform } from 'stream'
import { pipeline } from 'stream/promises'

const transform = async () => {
	const reverseText = new Transform({
		transform(chunk, encoding, callback) {
			const reversedText = chunk.toString().split('').reverse().join('')
			callback(null, `${reversedText}\n`)
		},
	})
	await pipeline(process.stdin, reverseText, process.stdout)
}

await transform()

// transform.js - implement function that reads data from process.stdin, reverses text using Transform Stream and then writes it into process.stdout

import * as fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import {createHash} from 'crypto'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const calculateHash = async () => {
	let file = await fs.promises.readFile(`${__dirname}/files/fileToCalculateHashFor.txt`)
		.catch((e) => {
			console.log(e)
		})
	let hash = createHash('sha256').update(`${__dirname}/files/fileToCalculateHashFor.txt`).update(file).digest('hex')
	console.log(hash)
};

await calculateHash();
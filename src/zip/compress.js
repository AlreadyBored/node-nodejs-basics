import * as fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import * as zlib from 'zlib'


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compress = async () => {
	let readStream = fs.createReadStream(`${__dirname}/files/fileToCompress.txt`)
	let writeStream = fs.createWriteStream(`${__dirname}/files/archive.gz`)
	let gZip = zlib.createGzip()
	readStream.pipe(gZip).pipe(writeStream)
};

await compress();
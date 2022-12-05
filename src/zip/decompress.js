import * as fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import * as zlib from 'zlib'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const decompress = async () => {
	let readStream = fs.createReadStream(`${__dirname}/files/archive.gz`)
	let writeStream = fs.createWriteStream(`${__dirname}/files/fileToCompress.txt`)
	const unzip = zlib.createGunzip();

	readStream.pipe(unzip).pipe(writeStream)
};

await decompress();
import * as fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const read = async () => {
	fs.createReadStream(`${__dirname}/files/fileToRead.txt`, 'utf-8').pipe(process.stdout)
};

await read();
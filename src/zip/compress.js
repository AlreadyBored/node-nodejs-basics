import { createGzip } from 'zlib';
import { dirname } from 'path';
import { URL } from 'url';
import fs, {createReadStream, createWriteStream } from 'fs';


const compress = async () => {
    try {
		const gzip = createGzip();
		const __filename = new URL('./files/fileToCompress.txt', import.meta.url).pathname;
		const __dirname = dirname(__filename);
	
		const isDirExists = fs.existsSync(__dirname);

		if (!isDirExists) {
			throw new Error('Error: no such directory');
		}
	
		const isFileExists = fs.existsSync(__filename);
	
		if (!isFileExists) {
			throw new Error('Error: no such file');
		}
	
		const source = createReadStream(__filename);
		const destination = createWriteStream(`${__dirname}/archive.gz`);
		source.pipe(gzip).pipe(destination);
	} catch (error) {
		console.error(error.message);
	}
};

await compress();
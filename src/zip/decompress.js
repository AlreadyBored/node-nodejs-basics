import { createGunzip } from 'zlib';
import { dirname } from 'path';
import { URL } from 'url';
import fs, { createReadStream, createWriteStream } from 'fs';


const decompress = async () => {
    try {
		const unzip = createGunzip();
		const __filename = new URL('./files/archive.gz', import.meta.url).pathname;
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
		const destination = createWriteStream(`${__dirname}/fileToCompress.txt`);

		source.pipe(unzip).pipe(destination);
	} catch (error) {
		console.error(error.message);
	}
};

await decompress();
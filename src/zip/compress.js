import fs from 'fs';
import zlib from 'zlib';

const compress = async () => {
	try {
		if (!fs.existsSync('./files/fileToCompress.txt'))
			throw new Error('Operation failed');
		const input = fs.createReadStream('./files/fileToCompress.txt');
		const output = fs.createWriteStream('./files/archive.gz');
		const gzip = zlib.createGzip();

		input.pipe(gzip).pipe(output);
	} catch (e) {
		console.error(e);
	}
};

await compress();

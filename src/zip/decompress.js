import fs from 'fs';
import zlib from 'zlib';

const decompress = async () => {
	try {
		if (!fs.existsSync('./files/archive.gz'))
			throw new Error('Operation failed');
		const input = fs.createReadStream('./files/archive.gz');
		const output = fs.createWriteStream('./files/fileToCompress.txt');
		const unzip = zlib.createUnzip();

		input.pipe(unzip).pipe(output);
	} catch (e) {
		console.error(e);
	}
};

await decompress();

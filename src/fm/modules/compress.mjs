import fs from 'fs';
import zlib from 'zlib';
import * as errors from './errors.mjs'

const handleCompressCommand = (inputArgs) => {
	if (inputArgs.length !== 3) {
		console.log(errors.invalidInput);
	}

	if (!fs.existsSync(inputArgs[1])) {
		console.log(errors.invalidInput);
		return;
	}

	const readStream = fs.createReadStream(inputArgs[1]);
	const writeStream = fs.createWriteStream(inputArgs[2]);

	let brotli;
	switch (inputArgs[0]) {
		case 'compress':
			brotli = zlib.createBrotliCompress();
			break;
		case 'decompress':
			brotli = zlib.createBrotliDecompress();
			break;
		default:
			console.log(errors.invalidInput);
	}

	readStream.pipe(brotli).pipe(writeStream);
}

export { handleCompressCommand }
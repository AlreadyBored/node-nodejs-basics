import fs from 'fs';
import zlib from 'zlib';

const filesDir = 'src/zip/files/fileToCompress.txt';
const archiveDir = 'src/zip/archive.gz';

const compress = async () => {
	const gzip = zlib.createGzip();
	const inputStream = fs.createReadStream(filesDir);
	const outputStream = fs.createWriteStream(archiveDir);

	inputStream
		.pipe(gzip)
		.pipe(outputStream);
};

await compress();

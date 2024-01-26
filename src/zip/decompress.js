import fs from 'fs';
import zlib from 'zlib';

const decompressedFilesDir = 'src/zip/files/fileToCompress-decompressed.txt';
const archiveDir = 'src/zip/archive.gz';

const decompress = async () => {
	const unzip = zlib.createUnzip();
	const inputStream = fs.createReadStream(archiveDir);
	const outputStream = fs.createWriteStream(decompressedFilesDir);

	inputStream
		.pipe(unzip)
		.pipe(outputStream);
};

await decompress();

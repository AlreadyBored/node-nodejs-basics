import fs, { ReadStream } from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const compress = async () => {
	// Write your code here
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);

	const folderFiles = path.join(__dirname, 'files');
	const archivePath = path.join(__dirname, 'archive.gz');

	const writeStream = fs.createWriteStream(archivePath);

	const gzip = zlib.createGzip();
	gzip.pipe(writeStream);

	fs.readdir(folderFiles, (err, files) => {
		if (err) {
			console.error(`Error reading files folder: ${err}`);
			return;
		}

		files.forEach(file => {
			const pathFile = path.join(folderFiles, file);
			const streamRead = fs.createReadStream(pathFile);

			streamRead.pipe(gzip, { end: false });
		});
		gzip.end();
	});

	writeStream.on('finish', () => {
		console.log('Compression completed.');
	});
};

await compress();

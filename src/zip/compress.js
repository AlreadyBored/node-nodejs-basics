const compress = async () => {
	try {
		const {
			createReadStream,
			createWriteStream
		} = await import('fs');
		const zlib = await import('zlib');
		const pathOf = './files/fileToCompress.txt';
		const readStream = createReadStream(pathOf);
		const writeStream = createWriteStream('./files/archive.gz')
		const gzip = zlib.createGzip();

		readStream.pipe(gzip).pipe(writeStream);

		console.log('File compress operation: success!');
	} catch (error) {
		console.error('Error: ', error.message);
	}
};

await compress();

/* compress.js - implement function that compresses file fileToCompress.txt
 * to archive.gz using zlib and Streams API */

const decompress = async () => {
	try {
		const {
			createReadStream,
			createWriteStream
		} = await import('fs');
		const zlib = await import('zlib');
		const archivePath = './files/archive.gz';
		const readStream = createReadStream(archivePath);
		const writeStream = createWriteStream('./files/fileToCompress.txt');
		const gunzip = zlib.createGunzip();

		readStream.pipe(gunzip).pipe(writeStream);

		console.log('Operations succeded!');
	} catch (error) {
		console.error('Error: ', error.message);
	}
};

await decompress();

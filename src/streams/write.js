const write = async () => {
	try {
		const {
			createWriteStream
		} = await import('fs');
		const filePath = './files/fileToWrite.txt';

		const writeStream = createWriteStream(filePath);

		process.stdin.pipe(writeStream);

		console.log("Writing data...");

		writeStream.on('finish', () => {
			console.log("Data has been written into file.");
		});
	} catch (error) {
		console.error('Error: ', error.message);
	}
};

await write();

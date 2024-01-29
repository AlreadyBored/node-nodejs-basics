const write = async () => {
	try {
		const {
			createWriteStream
		} = await import('fs');
		const filePath = './files/fileToWrite.txt';

		// Writable Stream
		const writeStream = createWriteStream(filePath);

		// Pipes standard input to Writable Stream | stdin being via process.stdin
		process.stdin.pipe(writeStream);

		console.log("Writing data...");

		// Listener for closed stream
		writeStream.on('finish', () => {
			console.log("Data has been written into file.");
		});
	} catch (error) {
		console.error('Error: ', error.message);
	}
};

await write();

/*write.js - implement function that writes process.stdin data into
 * file fileToWrite.txt content using Writable Stream */

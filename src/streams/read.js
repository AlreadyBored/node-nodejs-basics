import fs from 'fs';

const filePath = 'src/streams/files/fileToRead.txt';

const read = async () => {
	const stream = fs.createReadStream(filePath);

	stream.on('readable', function () {
		const data = stream.read()?.toString();
		if (data) {
			process.stdout.write(data);
		}
	});
};

await read();

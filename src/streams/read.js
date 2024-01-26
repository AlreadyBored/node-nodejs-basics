import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const fileDir = path.join(__dirname, 'files/fileToRead.txt');

const read = async () => {
	const stream = fs.createReadStream(fileDir);

	stream.on('readable', function () {
		const data = stream.read()?.toString();
		if (data) {
			process.stdout.write(data);
		}
	});
};

await read();

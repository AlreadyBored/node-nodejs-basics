import {createGzip} from 'zlib';
import {pipeline} from 'stream/promises';
import {createReadStream, createWriteStream} from 'fs';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
const file = join(__dirname, 'files', 'fileToCompress.txt');
	const rs = createReadStream(file);
	const ws = createWriteStream('archive.gz');
	try {
		await pipeline(
			rs,
			createGzip(),
			ws
		);
	} catch (err) {
		console.log(err);
	}
};

await compress();

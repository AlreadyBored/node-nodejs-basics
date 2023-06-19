import {createGunzip} from 'zlib';
import {pipeline} from 'stream/promises';
import {createReadStream, createWriteStream} from 'fs';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
	const rs = createReadStream('archive.gz');
	const ws = createWriteStream('fileToCompress.txt');
	try {
		await pipeline(
			rs,
			createGunzip(),
			ws
		);
	} catch (err) {
		console.log(err);
	}
};

await decompress();

import {access} from 'fs';
import {rename as _rename} from 'fs';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const wrongFile = join(__dirname, 'files', 'wrongFilename.txt');
const properFile = join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
	access(properFile, (err) => {
		if (!err) throw 'Error: FS operation failed';
		_rename(wrongFile, properFile, (err) => {
			if (err) throw 'Error: FS operation failed';
		});
	});
};

await rename();

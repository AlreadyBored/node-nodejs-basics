import fs from 'fs';
import path from 'path';

const filesDir = 'src/fs/files';

const list = async () => {
	if (!fs.existsSync(filesDir)) {
		throw new Error('FS operation failed');
	}

	fs.readdir(path.join(filesDir), { withFileTypes: true }, (error, files) => {
		files.forEach((file) => console.log(file.name));
	});
};

await list();

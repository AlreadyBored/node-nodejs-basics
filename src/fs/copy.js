import fs from 'fs';

const copy = async () => {
	try {
		fs.cp(
			'./files',
			'./files_copy',
			{ recursive: true, errorOnExist: true, force: false },
			err => {
				if (err) throw new Error('FS operation failed');
			}
		);
	} catch (e) {
		console.error(err);
	}
};

await copy();

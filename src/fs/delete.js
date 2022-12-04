import fs from 'fs';

const remove = async () => {
	try {
		fs.rm('./files/fileToRemove.txt', err => {
			if (err) throw new Error('FS operation failed');
		});
	} catch (e) {
		console.error(e);
	}
};

await remove();

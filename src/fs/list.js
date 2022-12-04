import fs from 'fs';

const list = async () => {
	try {
		fs.readdir('./files/', (err, files) => {
			if (err) throw new Error('FS operation failed');
			console.log(files);
		});
	} catch (e) {
		console.error(e);
	}
};

await list();

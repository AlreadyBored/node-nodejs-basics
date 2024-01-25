import fs from 'fs';

const fileDir = 'src/fs/files/fresh.txt';

const create = async () => {
	if (fs.existsSync(fileDir)) {
		throw new Error('FS operation failed');
	}
	fs.appendFile(fileDir, 'I am fresh and young', (err) => console.log(err));
};

await create();

import fs from 'fs';


const list = async () => {
	try {
		const srcPath = new URL('./files', import.meta.url).pathname;

		const isSrcExists = fs.existsSync(srcPath);

		if (!isSrcExists) {
			throw new Error('FS operation failed');
		}

		const files = await fs.promises.readdir(srcPath);
		
		for (const file of files) {
			console.log(file);
		}
	} catch (e) {
		console.error(e.message)
	};
};

await list();
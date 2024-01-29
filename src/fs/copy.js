import fs from 'fs';

const copy = async () => {
	try {
		const srcPath = './files';
		const destPath = './files_copy';

		const isSrcExists = fs.existsSync(srcPath);
		const isDestExists = fs.existsSync(destPath);

		if (!isSrcExists || isDestExists) {
			throw new Error('FS operation failed');
		}

		const files = await fs.promises.readdir(srcPath);

		await fs.promises.mkdir(destPath);
		
		for (const file of files) {
			const buffer = await fs.promises.readFile(`${srcPath}/${file}`);
			await fs.promises.writeFile(`${destPath}/${file}`, buffer);
		}
	} catch (e) {
		console.error(e.message)
	};
};

await copy();

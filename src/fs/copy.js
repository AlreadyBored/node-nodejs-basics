import fs from 'fs';

const copy = async () => {
	try {
		const dir = new URL('./files', import.meta.url).pathname;
		const dirToCopy = new URL('./files_copy', import.meta.url).pathname;;

		const isSrcExists = fs.existsSync(dir);
		const isDestExists = fs.existsSync(dirToCopy);

		if (!isSrcExists || isDestExists) {
			throw new Error('FS operation failed');
		}

		const files = await fs.promises.readdir(dir);

		await fs.promises.mkdir(dirToCopy);
		
		for (const file of files) {
			const buffer = await fs.promises.readFile(`${dir}/${file}`);
			await fs.promises.writeFile(`${dirToCopy}/${file}`, buffer);
		}
	} catch (e) {
		console.error(e.message)
	};
};

await copy();

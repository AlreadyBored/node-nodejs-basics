const create = async () => {
	try {
		const {
			promises: fsPromises,
			constants: fsConstants
		} = await import('fs');
		const {
			join,
			dirname
		} = await import('path');
		const currentFilePath = new URL(import.meta.url).pathname;
		const currentDirPath = dirname(currentFilePath);
		const data = 'I am fresh and young';
		const filePath = join(currentDirPath, './files', 'fresh.txt');

		try {

			await fsPromises.access(filePath);
			throw new Error('FS operation failed');
		} catch (error) {

			try {
				const {
					writeFile
				} = await import('fs').then(module => module.promises);
				await writeFile(filePath, data);
				console.log(`File "${filePath}" has been created with success!`);
			} catch (error) {
				throw new Error(`FS operation failed: ${error.message}`);
			}
		}
	} catch (error) {
		throw new Error(`FS operation failed: ${error.message}`);
	}
};

await create();

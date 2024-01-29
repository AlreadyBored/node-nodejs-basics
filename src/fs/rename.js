const rename = async () => {
	try {
		const {
			promises: fs,
			constants: fsConstants
		} = await import('fs');
		const {
			default: path,
			dirname
		} = await import('path');

		const currentPathToFile = new URL(import.meta.url).pathname;
		const currentPathToFolder = dirname(currentPathToFile);

		const previousPath = path.join(currentPathToFolder, './files/wrongFilename.txt');
		const newPath = path.join(currentPathToFolder, './files/properFilename.md');

		try {
			await fs.access(previousPath, fsConstants.F_OK);
		} catch (error) {
			if (error.code === 'ENOENT') {
				throw new Error('FS operation failed');
			} else {
				throw error;
			}
		}

		try {
			await fs.access(newPath, fsConstants.F_OK);
			throw new Error('FS operation failed');
		} catch (error) {
			if (error.code === 'ENOENT') {

				await fs.rename(previousPath, newPath);
				return true;
			} else {
				throw error;
			}
		}
	} catch (error) {
		console.error(error.message);
		return false;
	}
};

await rename();

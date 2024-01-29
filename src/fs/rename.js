const rename = async () => {
	try {
		const {
			promises: fs,
			constants: fsConstants
		} = await import('fs');
		const {
			default: path,
			dirname
		} = await import('path'); // Dynamically importing path ()

		const currentPathToFile = new URL(import.meta.url).pathname;
		const currentPathToFolder = dirname(currentPathToFile);

		const previousPath = path.join(currentPathToFolder, './files/wrongFilename.txt');
		const newPath = path.join(currentPathToFolder, './files/properFilename.md');

		// Check if source file exists
		try {
			await fs.access(previousPath, fsConstants.F_OK);
		} catch (error) {
			if (error.code === 'ENOENT') {
				throw new Error('FS operation failed');
			} else {
				throw error; // Re-throw if file not found
			}
		}

		// Check if destination file exists
		try {
			await fs.access(newPath, fsConstants.F_OK);
			throw new Error('FS operation failed');
		} catch (error) {
			if (error.code === 'ENOENT') {
				// if destination is non-existent, renaming is the next step
				await fs.rename(previousPath, newPath);
				return true; // Success
			} else {
				throw error; // Re-throw if another type of error (good practice)
			}
		}
	} catch (error) {
		console.error(error.message);
		return false;
	}
};

await rename();

/* rename.js - implement function that renames file wrongFilename.txt to
 * properFilename with extension .md
 * (if there's no file wrongFilename.txt or properFilename.md already
 * exists Error with message FS operation failed must be thrown) */

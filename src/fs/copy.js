const copy = async () => {
	try {
		const {
			promises: fsPromises
		} = await import('fs');
		const {
			join
		} = await import('path');
		const sourceFolder = join('.', 'files');
		const destinationFolder = join('.', 'files_copy');

		try {
			await fsPromises.stat(destinationFolder);
			throw new Error('FS operation failed');
		} catch (error) {
			if (error.code !== 'ENOENT') {
				throw error;
			}
		}

		await fsPromises.mkdir(destinationFolder, {
			recursive: true
		});

		const copyFolderData = async (source, dest) => {
			const files = await fsPromises.readdir(source);

			for (const file of files) {
				const srcPath = join(source, file);
				const destPath = join(dest, file);
				const stats = await fsPromises.stat(srcPath);

				if (stats.isDirectory()) {
					await fsPromises.mkdir(destPath);
					await copyFolderData(srcPath, destPath);
				} else {
					await fsPromises.copyFile(srcPath, destPath);
				}
			}
		}
		await copyFolderData(sourceFolder, destinationFolder);

		console.log('Files copied successfully');
	} catch (error) {
		console.error(`Error: ${error.message}`);
		throw error;
	}
};

await copy();

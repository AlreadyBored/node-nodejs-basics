const read = async () => {
	const {
		default: fs
	} = await import('fs/promises');

	try {
		const fileContent = await fs.readFile('./files/fileToRead.txt', 'utf8');
		console.log(fileContent);
	} catch (error) {
		if (error.code === 'ENOENT') {
			throw new Error('FS operation failed');
		} else {
			throw error;
		}
	}
};

await read();

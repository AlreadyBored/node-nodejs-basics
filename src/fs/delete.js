const remove = async () => {
	try {
		const {
			access,
			unlink
		} = await import('fs').then(module => module.promises);
		const {
			join
		} = await import('path');
		const filePath = join('./files', 'fileToRemove.txt');

		await access(filePath); // Check if it is there
		await unlink(filePath); // Deletes it once found
	} catch (error) {
		throw new Error('FS operation failed') // If no file found
	}
};

await remove();

/* delete.js - implement function that deletes file fileToRemove.txt
 * (if there's no file fileToRemove.txt Error with message
 * FS operation failed must be thrown) */

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

		await access(filePath);
		await unlink(filePath);
	} catch (error) {
		throw new Error('FS operation failed')
	}
};

await remove();

import fs from 'fs';

export const rename = async () => {
	const path = 'files/wrongFilename.txt';

	fs.rename(
		path, 'files/properFilename.md', function (error) {
			if (error) console.log('FS operation failed');
		}
	)
};

rename();
import { access, cp } from 'fs/promises';

export const copy = async () => {
  // Write your code here 

  const PATH = './src/fs/files';
  const COPY_PATH = './src/fs/files-copy';
	const ERROR_MSG = 'FS operation failed';

  try {
		let isExistFolder;

		try {
  		await access(PATH);
  		isExistFolder = true;
		} catch {
  		isExistFolder = false;
		};

		if (!isExistFolder) {
			throw new Error(ERROR_MSG);
		} 

		try {
			await cp(PATH, COPY_PATH, {
				errorOnExist: true,
				recursive: true,
				force: false,
			});
		} catch {
			throw new Error(ERROR_MSG);
		}
	} catch (err) {
		console.log(err);
	}
};

copy();
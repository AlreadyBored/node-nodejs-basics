import { access, rename as renameFS } from 'fs/promises';

export const rename = async () => {
  // Write your code here 
  const PATH = './src/fs/files/wrongFilename.txt';
  const RENAME_PATH = './src/fs/files/properFilename.md';
	const ERROR_MSG = 'FS operation failed';

  try {
    let isWrongFileExist;
    let isProperFileExist;

		try {
  		await access(PATH);
  		isWrongFileExist = true;
		} catch {
  		isWrongFileExist = false;
		};

		try {
  		await access(RENAME_PATH);
  		isProperFileExist = true;
		} catch {
  		isProperFileExist = false;
		};

		if (!isWrongFileExist || isProperFileExist) {
			throw new Error(ERROR_MSG);
		}
			
    renameFS(PATH, RENAME_PATH);
	} catch (err) {
		console.log(err);
	}
};

rename();
import { access, appendFile } from 'fs/promises';
 
export const create = async () => {
    // Write your code here 

  const PATH = './src/fs/files/fresh.txt';
	const DATA = 'I am fresh and young';
	const ERROR_MSG = 'FS operation failed';

	try {
		let isExistFile = false;

		try {
  		await access(PATH);
  		isExistFile = true;
		} catch {
  		isExistFile = false;
		};

		if (isExistFile) {
			throw new Error(ERROR_MSG);
		} else {
			appendFile(PATH, DATA);
		}
	} catch (err) {
		console.log(err);
	}
};

create();
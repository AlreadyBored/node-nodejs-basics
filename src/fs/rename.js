import {rename as rn , access, constants} from 'node:fs/promises';
const error =  new Error('FS operation failed');

const rename = async () => {
	const oldFileName = './fs/files/wrongFilename.txt';
	const newFileName = './fs/files/properFilename .md';
	
	await access(newFileName, constants.F_OK)
		.then(() => {
			console.error(error);
			return;
		})
	await rn(oldFileName, newFileName);
};

await rename();
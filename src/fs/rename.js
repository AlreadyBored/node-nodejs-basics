/*
* implement function that renames file wrongFilename.txt to properFilename with extension .md 
* (if there's no file wrongFilename.txt or properFilename.md already exists 
* Error with message FS operation failed must be thrown)
*/
import fs from "fs";

const rename = async () => {
	const oldName = "./src/fs/files/wrongFilename.txt";
	const newName = "./src/fs/files/properFilename.md";
	
	if (!fs.existsSync(oldName) || fs.existsSync(newName)) {
		throw "FS operation failed";
	} else {
		fs.rename(oldName, newName, (err) => {
			if (err) throw err;
			else console.log('Rename complete!');
		});
	}
};

await rename();

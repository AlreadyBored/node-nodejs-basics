/*
* implement function that deletes file fileToRemove.txt 
* (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)
*/
import fs from "fs";

const remove = async () => {
    const filePath = "./src/fs/files/fileToRemove.txt";

    if (!fs.existsSync(filePath)) {
		throw "FS operation failed";
	} else {
		fs.rm(filePath, (err) => {
			if (err) throw err;
			else console.log('File was deleted!');
		});
	}
};

await remove();

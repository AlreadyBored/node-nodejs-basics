/*
* implement function that prints all array of filenames from files folder into console
* (if files folder doesn't exists Error with message FS operation failed must be thrown)
*/
import fs from "fs";

const list = async () => {
	const dirPath = "./src/fs/files";

	if (!fs.existsSync(dirPath)) {
		throw "FS operation failed";
	} else {
		fs.readdir(
			dirPath,
			{recursive: true},
			(err, files) => {
				if (err) throw err;
				else {
					console.log(files);
				}
			},
		);
	}
};

await list();

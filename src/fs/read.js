/*
* implement function that prints content of the fileToRead.txt into console
* (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)
*/
import fs from "fs";

const read = async () => {
	const filePath = "./src/fs/files/fileToRead.txt"

	if (!fs.existsSync(filePath)) {
		throw "FS operation failed";
	} else {
		fs.readFile(
			filePath,
			"utf8",
			(err, data) => {
				if (err) throw err;
				else console.log(data);
			}
		);
	}
};

await read();

/*
* implement function that creates new file fresh.txt with content
* "I am fresh and young" inside of the files folder 
* (if file already exists Error with message FS operation failed must be thrown)
*/
import fs from "fs";

const create = async () => {
	const filePath = "./src/fs/files/fresh.txt";

	if (fs.existsSync(filePath)) {
		throw "FS operation failed"
	} else {
		fs.writeFile(
			filePath,
			"I am fresh and young",
			(err) => {
				if (err) throw err;
				else console.log("File was created");
			},
		);
	}
};

await create();

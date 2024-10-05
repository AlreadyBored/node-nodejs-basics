/*
* implement function that copies folder files files with all its content
* into folder files_copy at the same level 
* (if files folder doesn't exists or files_copy has already been created 
* Error with message FS operation failed must be thrown)
*/
import fs from "fs";

const copy = async () => {
	const dirSrc = "./src/fs/files";
	const dirDest = "./src/fs/files_copy";

	fs.cp(
		dirSrc,
		dirDest,
		{
			recursive: true,
			force: false,
			errorOnExist: true
		},
		(err) => {
			if (err) {
				if (err.code === "ERR_FS_CP_EEXIST") {
					console.error("FS operation failed");
				} else {
					throw err;
				}
			} else {
				console.log("Directory was copied");
			}
		}
	);
};

await copy();

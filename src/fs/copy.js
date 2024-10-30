import { cp } from "node:fs/promises";
import { join } from "path";

const copy = async () => {
	const sourcePath = join(import.meta.dirname, "files");
	const destinationPath = join(import.meta.dirname, "files_copy");

	try {
		await cp(sourcePath, destinationPath, {
			errorOnExist: true,
			recursive: true,
			force: false
		});

	} catch (error) {
		console.error("FS operation failed");
	}
};

await copy();

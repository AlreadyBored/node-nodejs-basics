import { rename as renameFs } from "node:fs/promises";
import { join } from "path";

const rename = async () => {
	const basePath = join(import.meta.dirname, "files");
	const sourcePath = join(basePath, "wrongFilename.txt");
	const destinationPath = join(basePath, "properFilename.md");

	try {
		await renameFs(sourcePath, destinationPath);
	} catch (error) {
		console.error("FS operation failed");
	}
};

await rename();

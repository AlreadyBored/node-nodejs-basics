import { readFile } from "node:fs/promises";
import { join } from "path";

const read = async () => {
	const filePath = join(import.meta.dirname, "files", "fileToRead.txt");
	try {
		const contents = await readFile(filePath, { encoding: "utf8" });
		console.log(contents);
	} catch (err) {
		console.error("FS operation failed");
	}
};

await read();

import {readFile} from "fs/promises";
import path from "path";
import {fileURLToPath} from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
	const filePath = path.join(__dirname, "files", "fileToRead.txt");

	try {
		const content = await readFile(filePath, "utf-8");
		console.log(content);
	} catch {
		throw new Error("FS operation failed");
	}
};

await read();

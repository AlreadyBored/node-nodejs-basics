import {writeFile, access, mkdir} from "fs/promises";
import {dirname, join} from "path";
import {fileURLToPath} from "url";

const create = async () => {
	const __dirname = dirname(fileURLToPath(import.meta.url));
	const filePath = join(__dirname, "files", "fresh.txt");

	try {
		await access(filePath);
		throw new Error("FS operation failed");
	} catch {
		await mkdir(dirname(filePath), {recursive: true});
		await writeFile(filePath, "I am fresh and young");
		console.log("File created:", filePath);
	}
};

await create();

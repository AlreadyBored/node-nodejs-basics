import { readdir } from "fs/promises";
import { join } from "path";

const list = async () => {
	const dirname = join(import.meta.dirname, "files");
	try {
		const files = await readdir(dirname);
		for (const file of files) console.log(file);
	} catch (err) {
		console.error(err);
	}
};

await list();

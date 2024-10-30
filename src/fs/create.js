import { open } from "node:fs/promises";
import { join } from 'path';

const create = async () => {
	const pathName = join(import.meta.dirname, 'files', "fresh.txt");
	try {
		const fileCreator = await open(pathName, "wx");
		await fileCreator.write("I am fresh and young");
		await fileCreator.close();
	} catch (error) {
		console.error("FS operation failed");
	}
};

await create();

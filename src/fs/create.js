import { appendFile } from "fs/promises";
import { join } from "path";
import { isFileOrFolderExist, throwFsError, BASE_PATH } from "./utils/fs.js";

const filePath = join(BASE_PATH, "fresh.txt");

const create = async () => {
    const isExist = await isFileOrFolderExist(filePath);

    if (isExist) {
        throwFsError();
    }

    await appendFile(filePath, "I am fresh and young");
};

await create();

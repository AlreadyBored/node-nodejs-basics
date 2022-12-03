import fs from 'fs/promises';
import checkFsElementExists from "./utils/checkFsElementExists.js";
import { paths } from "./shared/paths.js";
import { errors } from "./shared/errors.js";

const read = async () => {
    const fileExists = await checkFsElementExists(paths.read);

    if (!fileExists) {
        throw new Error(errors.fs);
    }

    const content = await fs.readFile(paths.read, 'utf-8');

    console.log(content);
};

await read();
import path from 'path';
import checkFsElementExists from "./utils/checkFsElementExists.js";
import createFile from "./utils/createFile.js";
import { errors } from "./shared/errors.js";
import { paths } from "./shared/paths.js";

const textContent = 'I am fresh and young';

const create = async (url) => {
    const exists = await checkFsElementExists(url);

    if (exists) {
        throw new Error(errors.fs);
    }

    await createFile(url, textContent);
};

await create(path.resolve(paths.create));
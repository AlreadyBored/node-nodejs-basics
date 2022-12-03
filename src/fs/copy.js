import fs from 'fs/promises';
import checkFsElementExists from "./utils/checkFsElementExists.js";
import createCopyFromList from "./utils/createCopyFromList.js";
import getDirectoryContentList from "./utils/getDirectoryContentList.js";
import { errors } from "./shared/errors.js";
import { paths } from "./shared/paths.js";

const copy = async (url, newPath) => {
    const copyExist = await checkFsElementExists(newPath);
    const filesExist = await checkFsElementExists(url);

    if (copyExist || !filesExist) throw new Error(errors.fs);

    const content = await getDirectoryContentList(url);

    await fs.mkdir(newPath);

    await createCopyFromList(content, url, newPath);
};

await copy(paths.files, paths.copyFolder);

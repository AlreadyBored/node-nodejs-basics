import fs from 'fs/promises';
import checkFsElementExists from "./utils/checkFsElementExists.js";
import { errors } from "./shared/errors.js";
import { paths } from "./shared/paths.js";

const rename = async () => {
    const sourceExists = await checkFsElementExists(paths.renameBefore);
    const fileModified = await checkFsElementExists(paths.renameAfter);

    if (!sourceExists || fileModified) throw new Error(errors.fs);

    await fs.rename(paths.renameBefore, paths.renameAfter);
};

await rename();
import fs from 'fs/promises';
import checkFsElementExists from "./utils/checkFsElementExists.js";
import { errors } from "./shared/errors.js";
import { paths } from "./shared/paths.js";

const remove = async () => {
    const fileExists = await checkFsElementExists(paths.delete);

    if (!fileExists) throw new Error(errors.fs);

    await fs.unlink(paths.delete);
};

await remove();

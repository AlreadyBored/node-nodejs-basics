import getDirectoryContentList from "./utils/getDirectoryContentList.js";
import checkFsElementExists from "./utils/checkFsElementExists.js";
import { paths } from "./shared/paths.js";
import { errors } from "./shared/errors.js";

const list = async () => {
    const folderExists = await checkFsElementExists(paths.files);

    if (!folderExists) throw new Error(errors.fs);

    const files = await getDirectoryContentList(paths.files);

    console.log(files)
};

await list();

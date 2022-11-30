import {
    getAllFilesFromDirectory,
    isFileOrFolderExist,
    throwFsError,
    BASE_PATH,
} from "./utils/fs.js";

const list = async () => {
    const isExist = await isFileOrFolderExist(BASE_PATH);

    if (!isExist) {
        throwFsError();
    }

    const files = await getAllFilesFromDirectory(BASE_PATH);
    console.log(files);
};

await list();

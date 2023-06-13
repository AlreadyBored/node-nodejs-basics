import { cp } from "fs/promises"

const copy = async () => {
    try {
        await cp("files/", "files_copy/", {recursive: true, force: false, errorOnExist: true})
    } catch (error) {
        throw new Error("FS operation failed")
    }
};

await copy();

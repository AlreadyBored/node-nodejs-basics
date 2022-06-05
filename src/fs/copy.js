import fs from "fs"

export const copy = async () => {
    try {
       await fs.promises.cp('./files', './files_copy', {recursive: true, errorOnExist:true,force: false});
    } catch {
        throw new Error("FS operation failed")
    }
};
import { access, constants, rename as nodeRename } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ERROR_CODE_NOT_EXIST = "ENOENT";

const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const sourceFolder = path.join(__dirname, "files");
    const oldFilePath = path.join(sourceFolder, "wrongFilename.txt");
    const newFilePath = path.join(sourceFolder, "properFilename.md");

    access(oldFilePath, constants.F_OK, (error) => {
        if (error && error.code === ERROR_CODE_NOT_EXIST) {
            throw new Error("FS operation failed");
        } else {
            access(newFilePath, constants.F_OK, (err) => {
                if (!err) {
                    throw new Error("FS operation failed");
                } else if (err.code === ERROR_CODE_NOT_EXIST) {
                    nodeRename(oldFilePath, newFilePath, (renameErr) => {
                        if (renameErr) throw renameErr;
                        console.log("File renamed successfully!");
                    });
                }
            });
        }
    });
};

await rename();
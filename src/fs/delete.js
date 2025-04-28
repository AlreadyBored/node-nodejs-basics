import { access, constants, unlink } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ERROR_CODE_NOT_EXIST = "ENOENT";

const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const folderPath = path.join(__dirname, "files");
    const filePath = path.join(folderPath, "fileToRemove.txt");

    access(filePath, constants.F_OK, (error) => {
        if (error && error.code === ERROR_CODE_NOT_EXIST) {
            throw new Error("FS operation failed");
        } else {
            unlink(filePath, (err) => {
                if (err) throw err;
                console.log("File deleted successfully!");
            });
        }
    });
};

await remove();
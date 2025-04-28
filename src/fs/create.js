import { access, writeFile, constants } from "fs";
import path from "path";
import { fileURLToPath } from "url";
const ERROR_CODE_NOT_EXIST = "ENOENT";

const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const folderPath = path.join(__dirname, "files");
    const filePath = path.join(folderPath, "fresh.txt");
    const fileContent = "I am fresh and young";

    access(filePath, constants.F_OK, (error) => {
        if (error && error.code === ERROR_CODE_NOT_EXIST) {
            writeFile(filePath, fileContent, (err) => {
                if (err) throw err;
                console.log("File created!");
            });
        } else {
            throw new Error("FS operation failed");
        }
    });
};

await create();
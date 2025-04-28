import { access, constants, readdir } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ERROR_CODE_NOT_EXIST = "ENOENT";

const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const folderPath = path.join(__dirname, "files");

    access(folderPath, constants.F_OK, (error) => {
        if (error && error.code === ERROR_CODE_NOT_EXIST) {
            throw new Error("FS operation failed");
        } else {
            readdir(folderPath, (err, files) => {
                if (err) throw err;

                console.log(files);
            });
        }
    }); 
};

await list();
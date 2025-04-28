import { access, constants, mkdir, readdir, copyFile } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ERROR_CODE_NOT_EXIST = "ENOENT";

const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const sourceFolder = path.join(__dirname, "files");
    const destinationFolder = path.join(__dirname, "files_copy");

    access(sourceFolder, constants.F_OK, (error) => {
        if (error && error.code === ERROR_CODE_NOT_EXIST) {
            throw new Error("FS operation failed");
        } else {
            access(destinationFolder, constants.F_OK, (err) => {
                if (!err) {
                    throw new Error("FS operation failed");
                } else if (err.code === ERROR_CODE_NOT_EXIST) {
                    mkdir(destinationFolder, { recursive: true }, (mkdirErr) => {
                        if (mkdirErr) throw mkdirErr;

                        readdir(sourceFolder, (error, files) => {
                            if (error) throw readErr;

                            files.forEach((file) => {
                                const sourceFile = path.join(sourceFolder, file);
                                const destinationFile = path.join(destinationFolder, file);

                                copyFile(sourceFile, destinationFile, (copyErr) => {
                                    if (copyErr) throw copyErr;
                                });
                            });

                            console.log("Folder copied successfully!");
                        });
                    });
                }
            });
        }
    });
};

await copy();

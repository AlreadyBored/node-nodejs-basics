import fs from "fs";
import path from "path";

export const rename = async () => {
    const __dirname = path.resolve();
    // Write your code here 
    fs.rename(
        path.join(__dirname, 'files', 'wrongFilename.txt'),
        path.join(__dirname, 'files', 'properFilename.md'),
        err => {
            try {
                if (err) throw err;
                console.log('Файл переименован');
            } catch (err) {
                console.log("FS operation failed");
            }
        }
    );
};

rename();
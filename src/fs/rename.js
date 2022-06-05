import {join, dirname} from "path";
import {fileURLToPath} from 'url';
import {rename as changeNameFile, existsSync} from 'fs';

export const rename = async () => {
    const directory = dirname(fileURLToPath(import.meta.url));
    const wrong_file_name = join(directory, 'files', 'wrongFilename.txt');
    const right_file_name = join(directory, 'files', 'wrongFilename.txt');
    if (existsSync(right_file_name)) {
        throw new Error("FS operation failed");
    } else {
        await changeNameFile(wrong_file_name, right_file_name, (err) => {
            if (err) throw new Error("FS operation failed");
        })
    }
};

rename();

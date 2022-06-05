import {copyFile, readdir, mkdir, existsSync} from 'fs';
import {join, dirname} from "path";
import {fileURLToPath} from 'url';

export const copy = async () => {
    const directory = dirname(fileURLToPath(import.meta.url));
    const files_dir = join(directory, 'files');
    const files_dir_copy = join(directory, 'files_copy');

    await readdir(files_dir, (err, files) => {
        if (err) {
            throw new Error("FS operation failed");
        } else {
            if (existsSync(files_dir_copy)) {
                throw new Error("FS operation failed");
            } else {
                console.log("1");
                mkdir(files_dir_copy, {recursive: true}, (error) => {
                    if (error) {
                        throw new Error("FS operation failed");
                    } else {
                        console.log("2");
                        files.forEach(file => {
                            copyFile(join(files_dir, file), join(files_dir_copy, file), (e) => {
                                if (e) throw new Error("FS operation failed");
                            })
                        })
                    }
                });
            }
        }
    })

};

copy();

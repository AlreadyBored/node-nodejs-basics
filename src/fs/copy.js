import {access, readdir, copyFile, mkdir} from 'fs';
import {join} from 'path';
import {fileURLToPath} from 'url';
import {createCorrectPath} from "../helper.js";

const copy = async () => {
    const _filename = fileURLToPath(import.meta.url)
    const filesFolder = createCorrectPath(_filename, 'files');
    const targetFilesCopyFolder = createCorrectPath(_filename, 'files_copy');
    const errorMessage = 'FS operation failed';
    try {
        await access(filesFolder, (error) => {
            if (error) {
                throw Error(errorMessage)
            }
        })
        await access(targetFilesCopyFolder, (error) => {
            if (!error) {
                throw Error(errorMessage)
            }
        })
        await readdir(filesFolder, (error, files) => {
            if (error) {
                console.log(errorMessage)
            }
            mkdir(targetFilesCopyFolder, (error) => {
                if (error) {
                    console.log(errorMessage)
                }
            })

            files.forEach(file => {
                copyFile(join(filesFolder, file), join(targetFilesCopyFolder, file), (error) => {
                    if (error) {
                        console.log(error)
                    }
                })
            })
        });
    } catch (error) {}
};

copy();
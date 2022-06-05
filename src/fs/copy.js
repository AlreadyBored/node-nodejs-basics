import fs from "fs/promises";
import {constants} from "fs";
import path from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const Reset = "\x1b[0m";
const FgRed = "\x1b[31m";

export const copy = async () => {
    const from = path.resolve(__dirname, 'files');
    const to = path.resolve(__dirname, 'files_copy');

    try {
        await fs.access(to, constants.F_OK).then(() => {
            throw new Error('FS operation failed');
        }).catch(() => {});

        await fs.access(from, constants.F_OK).then( async () => {
            await fs.mkdir(to);
            const files = await fs.readdir(from);
            for (const file of files) {
                await fs.copyFile(path.resolve(from, file), path.resolve(to, file));
            }
        }).catch(() => {
            throw new Error('FS operation failed');
        })
    } catch (e) {
        console.error(FgRed, e.message, Reset);
    }
};


copy();
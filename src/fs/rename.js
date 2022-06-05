import fs from "fs/promises";
import path from "path";
import {fileURLToPath} from "url";
import {constants} from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const rename = async () => {
    const from = path.resolve(__dirname, 'files', 'wrongFilename.txt');
    const to = path.resolve(__dirname, 'files', 'properFilename.md');

    try {
        await fs.access(from, constants.F_OK).catch(() => {
            throw new Error('FS operation failed');
        });

        await fs.access(to, constants.F_OK).then(() => {
            throw new Error('FS operation failed');
        }).catch(async (e) => {
            await fs.rename(from, to);
        });

    } catch (e) {
        console.error('\x1b[31m', e.message, '\x1b[0m');
    }
};

rename();

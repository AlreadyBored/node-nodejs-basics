import path from "path";
import {fileURLToPath} from "url";
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const rename = async () => {
    const wrongFileName = path.join(__dirname, '/files/wrongFileName.txt');
    const correctFileName = path.join(__dirname, '/files/properFilename.md');
    if (!fs.existsSync(wrongFileName) || fs.existsSync(correctFileName)) {
      throw new Error('FS operation failed');
    }

    fs.renameSync(wrongFileName, correctFileName);
};

rename();;

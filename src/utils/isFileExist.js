import { access } from 'node:fs/promises';

const isFileExist = async (filePath, isFileMustBe = true) => {
    try {
        await access(filePath);

        if (!isFileMustBe) {
            throw new Error('FS operation failed');
        }
    } catch (e) {
        if (e.code !== 'ENOENT') {
            throw e;
        }
        if (isFileMustBe) {
            throw new Error('FS operation failed');
        }
    }
}

export default isFileExist;

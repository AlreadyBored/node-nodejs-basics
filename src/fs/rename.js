import {fileURLToPath} from 'node:url';
import {rename as nodeRename, access, constants } from 'node:fs/promises';
import {join, dirname} from 'node:path';

const rename = async () => {
	const __filename = fileURLToPath(import.meta.url);
	const __dirname = dirname(__filename);

	const directory = join(__dirname, 'files');
	const oldFileName = 'wrongFilename.txt';
	const newFileName = 'properFilename.md'
	const oldFilePath = join(directory, oldFileName);
	const newFilePath = join(directory, newFileName);

	try {
        await access(oldFilePath, constants.F_OK);

		try {
            await access(newFilePath, constants.F_OK);

            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code !== 'ENOENT') {
                throw err;
            }
        }

        await nodeRename(oldFilePath, newFilePath);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            throw error;
        }
    }
};

await rename();
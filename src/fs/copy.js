import {fileURLToPath} from 'url';
import {join, dirname} from 'path';
import {promises as fs} from 'fs';

const copy = async () => {
    // Write your code here
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const copyFrom = join(__dirname, 'files');
    const copyTo = join(__dirname, 'files_copy');

    try {
        await fs.access(copyFrom);
        await fs.access(copyTo)
            .then(() => {
                throw new Error();
            })
            .catch(err => {
                if (err.code !== 'ENOENT') throw err;   // 'ENOENT' - a standard Nodejs error code that means "No such file or directory"
            });

        const copyDir = async (from, to) => {
            // { recursive: true } means: If the parent folders don't exist then create it. If the folder already exists - no error
            await fs.mkdir(to, {recursive: true});
            // { withFileTypes: true } returns an array of Dirent objects (not just names)
            // we can check if it is a file or a directory using methods .isFile() and .isDirectory()
            const dirents = await fs.readdir(from, {withFileTypes: true});

            for (const dirent of dirents) {
                const fromPath = join(from, dirent.name);
                const toPath = join(to, dirent.name);

                dirent.isDirectory()
                    ? await copyDir(fromPath, toPath)
                    : await fs.copyFile(fromPath, toPath);
            }
        };

        await copyDir(copyFrom, copyTo);
    } catch {
        throw new Error('FS operation failed');
    }
};

await copy();

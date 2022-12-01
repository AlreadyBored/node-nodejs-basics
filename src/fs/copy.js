import { access, constants, readdir, mkdir, copyFile } from 'node:fs/promises';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const copy = async () => {
    const baseDir = dirname(fileURLToPath(import.meta.url));
    const sourceDir = join(baseDir, 'files');
    const destinationDir = join(basedir, 'files_copy');
    const errorMessage = 'FS operation failed';

    async function copyFolder(src, dst) {
        const dirEntries = await readdir(src, { withFileTypes: true });
        await mkdir(dst).catch((err) => {
            if (err.code === 'EEXIST') {
                throw new Error(errorMessage);
            }
        });

        let result = [];

        for (const entry of dirEntries) {
            const from = join(src, entry.name);
            const to = join(dst, entry.name);

            result.push(
                entry.isDirectory() ? copyFolder(from, to) : copyFile(from, to)
            );
        }

        return Promise.all(result);
    }

    access(destinationDir, constants.F_OK)
        .then(
            () => { throw new Error(); },
            () => access(sourceDir, fs.constants.F_OK)
        )
        .then(
            () => copyFolder(sourceDir, destinationDir),
            () => { throw new Error(errorMessage); }
        );
};

copy();

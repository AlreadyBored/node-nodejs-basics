import { existsSync as exists } from 'fs';
import fsAsync from 'fs/promises'

const source = `${import.meta.dirname}/files/`;
const destination = `${import.meta.dirname}/files_copy/`;

const copy = async () => {
    if (!exists(source) || exists(destination)) {
        throw Error('FS operation failed');
    }

    await fsAsync.cp(source, destination, { recursive: true });
};

await copy();

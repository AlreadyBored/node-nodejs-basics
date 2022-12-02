import { rename as renaming } from 'fs/promises'

const rename = async () => {
    const oldName = 'src/fs/files/wrongFilename.txt';
    const newName = 'src/fs/files/properFilename.md';

    try {
        await renaming( oldName, newName )
    } catch (err) {
        throw new Error ('FS operation failed')
    }
};

await rename();
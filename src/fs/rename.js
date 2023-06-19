import fs from 'node:fs';

const FILENAME = {
    WRONG: 'src/fs/files/wrongFilename.txt',
    PROPER: 'src/fs/files/properFilename.md',
}

const isWrongFileExists = fs.existsSync(FILENAME.WRONG)
const isProperFileExists = fs.existsSync(FILENAME.PROPER)

const rename = async () => {
    if (!isWrongFileExists && isProperFileExists) {
        throw new Error('FS operation failed')
    }

    await fs.rename(FILENAME.WRONG, FILENAME.PROPER, () => {})
};

await rename();

import { promises as fsPromises } from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname, extname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
    const sourceFolderPath = join(__dirname, './files');
    const sourceFileName = 'wrongFilename.txt';
    const destinationFileName = 'properFilename.md';

    const sourceFilePath = join(sourceFolderPath, sourceFileName);
    const destinationFilePath = join(__dirname, destinationFileName);

    try {
        await fsPromises.access(sourceFilePath);

        await fsPromises.access(destinationFilePath);

        throw new Error('FS operation failed: Destination file already exists.');
    } catch (error) {
        if (error.code !== 'ENOENT') {
            throw error;
        }
    }

    const fileContent = await fsPromises.readFile(sourceFilePath);

    await fsPromises.writeFile(destinationFilePath, fileContent);

    await fsPromises.unlink(sourceFilePath);

    console.log('File renamed successfully.');
}

rename().catch((error) => {
    console.error(error.message);
    process.exit(1);
});

import { promises as fsPromises, constants } from 'node:fs';
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const fileNameToRead = 'fileToRead.txt';
    const sourceFolderPath = path.join(__dirname, 'files');
    const filePathToRead = path.join(sourceFolderPath, fileNameToRead);

    // Check if the file exists and is readable
    try {
        await fsPromises.access(filePathToRead, constants.F_OK);
    } catch (error) {
        throw new Error('FS operation failed');
    }

    // Read the content of the file
    const fileContent = await fsPromises.readFile(filePathToRead, 'utf-8');

    // Print the content to the console
    console.log('Content of "fileToRead.txt":');
    console.log(fileContent);
};

try {
    await read();
} catch (error) {
    console.error(error.message);
}

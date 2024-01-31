import { fileURLToPath } from 'url';
import { promises as fsPromises } from 'fs';
import { resolve, dirname } from 'path';

const compress = async () => {
    const inputFileName = 'fileToCompress.txt';
    const currentModulePath = fileURLToPath(import.meta.url);
    const directoryPath = resolve(dirname(currentModulePath), 'files');
    const inputFilePath = resolve(directoryPath, inputFileName);

    console.log(`Current working directory: ${process.cwd()}`);
    console.log(`Resolved 'files' directory path: ${directoryPath}`);
    console.log(`Resolved 'fileToCompress.txt' path: ${inputFilePath}`);

    try {
        // Check if the input file exists
        await fsPromises.access(inputFilePath);

        console.log(`File exists at: ${inputFilePath}`);

        // Rest of the compression logic can be added here
        // For now, let's print a success message
        console.log('Compression logic will go here.');
    } catch (error) {
        console.error(`Error during compression: ${error.message}`);
    }
};

await compress();

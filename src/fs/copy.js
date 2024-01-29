import { promises } from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
    const sourceFolder = join(__dirname, 'files');
    const destinationFolder = join(__dirname, 'files_copy');

    try {
        await promises.access(sourceFolder);
        await promises.access(destinationFolder);

        throw new Error('FS operation failed: Destination folder already exists.');
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed: Source folder or destination folder does not exist.');
        }

        throw error;
    }

    const files = await promises.readdir(sourceFolder);

    await promises.mkdir(destinationFolder);

    await Promise.all(
        files.map(async (file) => {
            const sourceFilePath = join(sourceFolder, file);
            const destinationFilePath = join(destinationFolder, file);

            const fileContent = await promises.readFile(sourceFilePath);
            await promises.writeFile(destinationFilePath, fileContent);
        })
    );

    console.log('Files copied successfully.');
}

copy().catch((error) => {
    console.error(error.message);
    process.exit(1);
});


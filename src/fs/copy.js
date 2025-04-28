import { promises as fs } from 'fs';
import { join } from 'path';




const copy = async () => {
    // Write your code here
     const sourceFolder = join('files');
     const destinationFolder = join('files_copy');

     try {
        await fs.access(sourceFolder);

        try {
            await fs.access(destinationFolder);
            throw new Error('FS operation failed');
        } catch (error) {
            if (error.code !== 'ENOENT') {
                throw new Error('FS operation failed');
            }
        }

        await fs.cp(sourceFolder, destinationFolder, { recursive: true });


     } catch (error) {
        throw new Error('FS operation failed');
     }
};

await copy();

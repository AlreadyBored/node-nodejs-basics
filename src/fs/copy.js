import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { cp, access, constants } from "node:fs/promises";

const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const sourceDirectory = join(__dirname, 'files');
    const targetDirectory = join(__dirname, 'files_copy');

    try {
        await access(sourceDirectory, constants.F_OK);

        try {
            await access(targetDirectory, constants.F_OK);

            throw new Error('FS operation failed');
        } catch (error) {
            if (error.code !== 'ENOENT') {
                throw error;
            }
        }

        await cp(sourceDirectory, targetDirectory, { recursive: true });
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await copy();

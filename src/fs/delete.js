import fs from 'node:fs';

const remove = async () => {
    try {
        const filename = "./src/fs/files/fileToRemove.txt";
        if (!fs.existsSync(filename)) {
            throw new Error("FS operation failed");
        }

        fs.rmSync(filename);

    } catch (err) {
        console.error(err);
    }
};

await remove();
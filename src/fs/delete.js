import fs from "fs";

const fileToRemove = "./src/fs/files/fileToRemove.txt";

const remove = async () => {
    try {
        const isFileExist = await fs.promises
            .access(fileToRemove, fs.constants.F_OK)
            .then(() => true)
            .catch(() => false);

        if (!isFileExist) {
            throw new Error("FS operation failed: fileToRemove.txt does not exist");
        }

        await fs.promises.unlink(fileToRemove);
        console.log("File fileToRemove.txt deleted successfully.");
    } catch (err) {
        console.error(err.message);
    }
};

await remove();

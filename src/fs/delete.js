import fs from "fs/promises";
import path from "path";

const remove = async () => {
    // Resolve the file path
    const filePath = path.resolve("./files/fileToRemove.txt");

    try {
        // Check if the file exists
        await fs.access(filePath);

        // Delete the file
        await fs.unlink(filePath);
    } catch (e) {
        // Throw an error if the file does not exist
        if (e.code === "ENOENT") {
            throw new Error("FS operation failed");
        } else {
            throw e;
        }
    }
};

// Call the remove function
await remove();
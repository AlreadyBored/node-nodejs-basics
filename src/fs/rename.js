import fs from "fs/promises";
import path from "path";

const rename = async () => {
    const wrongPath = path.resolve("./files/wrongFilename.txt");
    const properPath = path.resolve("./files/properFilename.md");

    try {
        // Check if the old file exists
        await fs.access(wrongPath);

        try {
            // Check if the new file already exists
            await fs.access(properPath);

            // If the new file exists, throw an error
            throw new Error("FS operation failed");
        } catch (e) {
            if (e.code === "ENOENT") {
                // Rename the file
                await fs.rename(wrongPath, properPath);
            } else {
                throw e;
            }
        }
    } catch (e) {
        if (e.code === "ENOENT") {
            throw new Error("FS operation failed");
        } else {
            throw e;
        }
    }
};

// Call the rename function
await rename();
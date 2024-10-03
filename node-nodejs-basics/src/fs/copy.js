import fs from "fs/promises";
import path from "path";

const copy = async () => {
        // Resolve the source and destination directories
        const copySrc = path.resolve("./files");
        const copyDest = path.resolve("./files_copy");

        try {
            // Check if the source directory exists
            await fs.access(copySrc);

            try {
                // Check if the destination directory already exists
                await fs.access(copyDest);

                // If the destination directory exists, throw an error
                throw new Error("FS operation failed");
            } catch (e) {
                if (e.code === "ENOENT") {
                    // Create the destination directory
                    await fs.mkdir(copyDest);

                    // Get the list of files in the source directory
                    const files = await fs.readdir(copySrc);

                    // Copy each file to the destination directory
                    for (const file of files) {
                        const srcFile = path.join(copySrc, file);
                        const destFile = path.join(copyDest, file);
                        await fs.copyFile(srcFile, destFile);
                    }
                } else {
                    throw e;
                }
            }
        } catch
            (e) {
            // Throw an error if the source directory does not exist
            if (e.code === "ENOENT") {
                throw new Error("FS operation failed");
            } else {
                throw e;
            }
        }
    };

// Call the copy function
await copy();
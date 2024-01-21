import fs from "fs/promises";
import path from "path";

const list = async () => {
    // Resolve the folder path
    const folderPath = path.resolve("./files");

    try {
        // Check if the folder exists
        await fs.access(folderPath);

        // Read the filenames in the folder
        const files = await fs.readdir(folderPath);

        // Print the filenames to the console
        console.log(files);
    } catch (e) {
        // Throw an error if the folder does not exist
        if (e.code === "ENOENT") {
            throw new Error("FS operation failed");
        } else {
            throw e;
        }
    }
};

// Call the list function
await list();
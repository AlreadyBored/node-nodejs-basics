import fs from "fs/promises";
import path from "path";

const read = async () => {
    // Resolve the file path
    const readPath = path.resolve("./files/fileToRead.txt");

    try {
        // Check if the file exists
        await fs.access(readPath);

        // Read the content of the file
        const content = await fs.readFile(readPath, "utf-8");

        // Print the content to the console
        console.log(content);
    } catch (e) {
        // Throw an error if the file does not exist
        if (e.code === "ENOENT") {
            throw new Error("FS operation failed");
        } else {
            throw e;
        }
    }
};

// Call the read function
await read();
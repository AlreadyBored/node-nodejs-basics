import fs from "fs/promises";
import path from "path";

const create = async () => {
    // Resolve the file path
    const filePath = path.resolve("./files/fresh.txt");

    try {
        // Check if the file exists
        await fs.access(filePath);

        // If the file exists, throw an error
        throw new Error("FS operation failed");
    } catch (e) {
        // If the file does not exist, create it
        if (e.code === "ENOENT") {
            await fs.writeFile(filePath, "I am fresh and young");
        } else {
            // Throw the error if the FS operation failed, or if it is not an ENOENT error
            throw e;
        }
    }
};
// Call the create function
await create();
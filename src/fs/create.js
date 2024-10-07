import fs from "fs/promises";
import path from "path";
import { IsPathExist, __dirname, __filename } from "./shared.js";

const filePath = path.join(__dirname, "files", "fresh.txt");
const content = "I am fresh and young";

const create = async () => {
    // Write your code here
    try {
        // Check if the file already exists
        const isFileExist = await IsPathExist(filePath);
        if (isFileExist) {
            throw new Error("FS operation failed");
        }

        // Write content to the new file
        await fs.writeFile(filePath, content);
        console.log("File created successfully");
    } catch (error) {
        console.error(error.message);
    }
};

await create();

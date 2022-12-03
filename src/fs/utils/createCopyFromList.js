import fs from "fs/promises";

export default async function createCopyFromList(content, initialPath, newPath) {
    for (const file of content) {
        const initialLink = initialPath + '/' + file;
        const finalLink = newPath + '/' + file;

        await fs.copyFile(initialLink, finalLink);
    }
}
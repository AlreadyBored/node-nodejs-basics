import fs from "fs/promises";

export default async function createFile(url, content) {
    await fs.writeFile(url, content).then(null, () => new Error('Failed to create file "fresh.txt"'));
}
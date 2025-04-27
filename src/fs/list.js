import fs from "fs/promises";

const sourceDir = "src/fs/files";

const list = async () => {
    try {
        const files = await fs.readdir(sourceDir, { recursive: true, encoding: "utf-8" });
        console.log(files);
    } catch {
        throw new Error("FS operation failed");
    }
};

await list();

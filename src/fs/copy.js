import { access, cp } from "fs/promises";

const copy = async () => {
    const sourceDir = "files";
    const destinationDir = "files_copy";
    try {
        await access(sourceDir);
    } catch (e) {
        if (e.code === "ENOENT") {
            throw new Error("FS operation failed");
        }
    }
    try {
        await access(destinationDir);
        throw new Error("FS operation failed");
    } catch (e) {
        if (e.code !== "ENOENT") {
            throw e;
        }
    }

    await cp(sourceDir, destinationDir, { recursive: true });
};

await copy();

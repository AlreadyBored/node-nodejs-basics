import { mkdir, readdir, copyFile } from "fs/promises";

const copy = async () => {
    try {
        const files = await readdir("./files");
        await mkdir("./files_copy");

        const promises = files.map( f => {
            copyFile(`./files/${f}`, `./files_copy/${f}`);
        });

        Promise.all(promises);

    } catch (error) {
        if (error.code === "EEXIST" && error.path === "./files_copy") {
            throw new Error("FS operation failed: <files_copy> folder already exists")
        } else if (error.code === "ENOENT" && error.path === "./files") {
            throw new Error("FS operation failed: <files> folder doesn't exist");
        } else {
            throw error;
        }
    }
};

await copy();

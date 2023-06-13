import { rm } from "fs/promises"

const remove = async () => {
    await rm("files/fileToRemove.txt").catch(() => {throw new Error("FS operation failed")})
};

await remove();
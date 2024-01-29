import { existsSync, writeFileSync } from "fs";

const create = async () => {
    if (existsSync("src/fs/files/fresh.txt")) {
        throw Error("FS operation failed")
    }
    writeFileSync("src/fs/files/fresh.txt", "I am fresh and young",(err) => err && console.error(err))
}


await create();
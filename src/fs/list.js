import { readdirSync } from "fs";
const list = async () => {
    try {
        readdirSync("src/fs/files/").forEach(element => {console.log(element)});
        } catch (error) {
            throw Error(`FS operation failed: ${error}`)
            }
};

await list();
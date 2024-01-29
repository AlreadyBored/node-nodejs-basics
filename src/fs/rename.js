import { cpSync, existsSync, renameSync, writeFileSync } from "fs";

const rename = async () => {
    try {
        renameSync("src/fs/files/wrongFilename.txt", "src/fs/files/properFilename.md",{force:false, errorOnExist:true})
        } catch (error){
            throw Error("FS operation failed")
        }};

await rename();
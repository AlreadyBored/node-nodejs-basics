import { cpSync, existsSync, writeFileSync } from "fs";


const copy = async () => {
    if (!existsSync("src/fs/files")) {
        throw Error("FS operation failed")
    }
    
    try {
    cpSync("src/fs/files", "src/fs/files_copy",{recursive: true, force:false, errorOnExist:true})
    } catch (error){
        throw Error("FS operation failed")
    }
};

await copy();

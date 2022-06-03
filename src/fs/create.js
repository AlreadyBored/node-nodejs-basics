import { access, open, writeFile} from "node:fs/promises";
const fileFullPath = "./src/fs/files/fresh.txt";

export const create = async () => {
    try {
        await open(fileFullPath,"r");

        console.log("FS operation failed, file ", fileFullPath, " exists");
        throw new Error ("FS operation failed");
        
    } catch (err) {
        // throw new Error("FS operation error")
        if (err.code === "ENOENT") {
            let newFile = await open(fileFullPath,'w');
            await newFile.write("I am fresh and young");
            newFile.close();
        }
    }
};

create();
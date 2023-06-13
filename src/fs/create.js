import { existsSync } from "fs";
import { appendFile } from "fs/promises"

const create = async () => {
    if (existsSync("./files/fresh.txt")) {
        throw new Error("FS operation failed")
    }
    
    await appendFile("./files/fresh.txt", "I am fresh and young") 
}; 

await create();
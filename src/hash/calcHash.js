import {createHash} from "crypto";
import fs  from "fs";

const calculateHash = async () => {
    try {
        const file_path = "src/hash/files/fileToCalculateHashFors.txt";
        const data = fs.readFileSync(file_path, "utf-8");
        
        
        if (fs.existsSync(file_path)) {
            const hash = createHash("sha256", data.toString()).digest("hex");
    
            console.log(hash);
            return;
        }
        
    } catch (error) {
        console.log(error.message);
    }
};

await calculateHash();
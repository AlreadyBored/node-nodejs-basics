import fs from "fs";
const remove = async () => {
    // Write your code here 
    fs.rm("./files/fileToRemove.txt", (err)=>{if (err) console.error("FS operation failed!")});
};

await remove();
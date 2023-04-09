import fs from "fs";
const read = async () => {
    // Write your code here 
    fs.readFile("./files/fileToRead.txt", {encoding: "utf8"}, (err, data)=>{
        if(err){
            console.error("FS operation failed!");
            return
        }else if(data){
            console.log(data);
        }
    })
};

await read();
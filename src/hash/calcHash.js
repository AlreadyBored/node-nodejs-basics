import {createHash} from "crypto";
import fs from "fs";
const calculateHash = async () => {
    // Write your code here 
    fs.readFile("./files/fileToCalculateHashFor.txt", {encoding: 'utf8'}, (err, data)=>{
        if(err){
            console.error(err);
            return
        }
        if (data) {
            console.log(createHash("sha256").update(data).digest('hex'));
            //console.log(data);
        }
    })
    
};

await calculateHash();
import fs from "fs";
import crypto from 'crypto'
export const calculateHash = async () => {
  // Write your code here
  try {
    fs.readFile("./files/fileToCalculateHashFor.txt", "utf8", (err, data) => {
      if (err) throw new Error("Error");
      let hash = crypto.createHash("sha256",'rsschool').update(data).digest("hex");
      console.log(hash)
    });  
  } catch (e) {
    console.log(e);
  }
};

calculateHash()
import crypto from 'crypto'
import fs from 'fs'
import {resolve} from "path";

export const calculateHash = async () => {
  fs.readFile(resolve('src','hash','files','fileToCalculateHashFor.txt'),(err,data)=>{
    if(err) return console.log(err)
    const hash = crypto.createHash('sha256')
    const hexText = hash.update(data).digest('hex')
    console.log(hexText)
  })
};
calculateHash()
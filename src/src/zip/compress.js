import {createReadStream, createWriteStream} from "fs";
import { createGzip } from "zlib";

const compress = async () => {
  // Write your code here
  const stream = createReadStream("./files/fileToCompress.txt");
  stream
    .pipe(createGzip())
    .pipe(createWriteStream(`./files/archive.gz`))
    .on("finish", () =>
      console.log(`Successfully compressed!`)
    )
    .on("error", (error)=>{
        console.error(error);
    })
};

await compress();

import fs from "fs";
import path from "path";
import zlib from "zlib";
import {promisify} from "util";
import {pipeline} from "stream";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const asyncPipeline = promisify(pipeline)
const asyncDeleteZip = promisify(fs.unlink)

const decompress = async () => {
    try{
        await asyncPipeline(
            fs.createReadStream(path.join(__dirname,'files','archive.gz')),
            zlib.createUnzip(),
            fs.createWriteStream(path.join(__dirname,'files','fileToCompress.txt'))
        )
        await asyncDeleteZip(path.join(__dirname,'files','archive.gz'))
    }catch (e){
        console.error(e)
    }
};

await decompress();
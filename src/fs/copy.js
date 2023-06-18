import * as fsp from "fs/promises";
import * as fs from 'fs'
import * as path from "path";
import { fileURLToPath } from "url";
const metaUrl = import.meta.url
const __filename = fileURLToPath(metaUrl);
const __dirname = path.dirname(__filename);
const files = path.join(__dirname, "files");
const NewCopy = path.join(__dirname, "files_copy");
const getNoFiles = () => { throw new Error(errorMessage) }
const copy = async () => {
    try {
     if(!fs.existsSync(files)) getNoFiles()
      await fsp.mkdir(NewCopy, { recursive: true });
      const dirnets = await fsp.readdir(files, { withFileTypes: true })
      console.log(fs.readdirSync(NewCopy))
if (fs.readdirSync(NewCopy).length === 0){
for (const dirnet of dirnets) {
              await fsp.copyFile(
                path.join(files, dirnet.name),
                path.join(NewCopy, dirnet.name)
              );
            }}
            else { console.log("directory exists")}}
    catch (error) {
        throw new Error("FS operation failed")
         }
}
// const files = path.join(__dirname, "files");
// const filesCopy = path.join(__dirname, "files_copy");
// // console.log("fl", filesCopy)
// const errorMessage = 'FS operation failed';
// const getFiled = () => { throw new Error(errorMessage) }
// const copy = async () => {
//   // Write your code here

//   try {
//     if(!fs.existsSync(files)) getFiled()
//     await fsp.mkdir(filesCopy, { recursive: true });
//     const dirnets = await fsp.readdir(files, { withFileTypes: true });
//     for (const dirnet of dirnets) {
//       const copyFrom = path.join(files, dirnet.name)
//       const copyTo =   path.join(filesCopy, dirnet.name)
//       if(fs.existsSync(copyTo)) getFiled()
//       await fsp.copyFile(
//         copyFrom,
//         copyTo
//       );
//     }
//   } catch (error) {
//     getFiled()
//   }
// };
await copy();
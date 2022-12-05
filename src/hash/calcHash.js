import {createHash} from "crypto"
import {readFile} from "fs"
import {join} from "path";
const calculateHash = async () => {
    const path = "src/hash/files"
    const fileName = "fileToCalculateHashFor.txt"
    readFile(join(path,fileName), "utf-8", (err, data) => {
        if (err) {
            throw new Error(err)
        }
        const hash = createHash("sha256").update(data).digest("hex")
        console.log(hash)
    })
};

await calculateHash();
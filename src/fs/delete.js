
import fs from 'fs'
const remove = async (file) => {
     fs.unlink(file, (err) => {
                if (err) {
                    console.log('FS operation failed')
                return}
                console.log(`file ${file} deleted!`)
            })

};

await remove('fileToRemove.txt');
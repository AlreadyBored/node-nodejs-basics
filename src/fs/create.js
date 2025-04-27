import fs from 'fs'
const create = async (file, content) => {
   fs.stat(file, (err, stats) => {
       if (err) {
          fs.writeFile(file, content, (err) => {
              console.log(`File ${file} created!`)
          }

          )
       } else console.log('FS operation failed')
   })
}




await create('fresh.txt', 'I am fresh and young');
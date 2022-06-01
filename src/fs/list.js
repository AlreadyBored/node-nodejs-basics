import fs from 'fs';

export const list = async () => {
   try{
       await fs.readFile("./files", function(err, data) {
           if (!err){
               return console.log('FS operation failed ');
           }
           else {
               let files =  fs.readdirSync('./files', {withFileTypes: true})
                   .filter(item => !item.isDirectory())
                   .map(item => item.name)
               console.log(files)
           }
       })
   }
   catch (err) {
       console.log(err)
   }
};

list()

import fs from "fs";
const create = async () => {
    // Write your code here 
    
    const path = './files/fresh.txt';

    fs.readFile(path, (err, data) => {
        if (!err && data) {
          console.error("FS operation failed");
        }
        else{
            fs.writeFile(path, 'I am fresh and young!', function (err) {
                if (err) throw err;
                console.log('Opened a file!');
              });
        }
      })
    
};

await create();
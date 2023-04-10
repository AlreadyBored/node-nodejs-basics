import { error } from "console";
import fs from "fs";
const rename = async () => {
    // Write your code here 

    fs.access("./files/properFilename.md", function(error) {
        if (!error) {
          console.error("FS Operation failed! File with that name exists!");
          return
        }else{
            fs.rename("./files/wrongFilename.txt", "./files/properFilename.md", (error)=>{
        
                if(error){
                    console.error(error);
                }else{
                    console.log("Renamed successfully!");
                }
            });
        }
      })

    
};

await rename();
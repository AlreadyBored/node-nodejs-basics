import fs from "fs";

const copy = async () => {
    fs.access("./files_copy", function(error) {
        if (!error) {
          console.error("FS Operation failed!");
          return
        }
      })

    fs.cp('./files', './files_copy', { recursive: true }, (err, data) => {
        if (err) {
          console.error(err);
        }else{
            console.log("Directory copied successfully!");
        }
      });
};

await copy();

import fs from 'fs';

const rename = async () => {
  fs.rename(
    "./files/wrongFilename.txt",
    "./files/properFilename.md",
    function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("successfully renamed");
      }
    }
  );
};

rename();

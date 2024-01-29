import fs from "fs";

const create = async () => {
  // Write your code here
    if (fs.existsSync("./files/fresh.txt")) {
      throw new Error('FS operation failed')
  }else
    {fs.writeFileSync("./files/fresh.txt", "I am fresh and young", (err) => {});}
};

await create();

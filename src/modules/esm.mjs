import path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import fs from "fs/promises";
import "./files/c.js";

const random = Math.random();

let unknownObject;

const readJSONFile = async (filePath) => {
  try {
    const fileContent = await fs.readFile(filePath, "utf8");
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Error reading JSON file: ${error.message}`);
    throw error;
  }
};

if (random > 0.5) {
  const filePath = path.resolve("files/a.json");
  unknownObject = await readJSONFile(filePath);
} else {
  const filePath = path.resolve("files/b.json");
  unknownObject = await readJSONFile(filePath);
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${path.dirname(import.meta.url)}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };

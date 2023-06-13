import path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import getCurrentFilePath from "../helper/getCurrentFilePath.js";

import "./files/c.js";

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const __filename = getCurrentFilePath(import.meta);
const __dirname = path.dirname(__filename);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}\n`);

const PORT = 3000;
const app = createServerHttp((_, res) => {
  res.end("Request accepted");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

const data = await (() => {
  const random = Math.random();
  const fileName = random > 0.5 ? "a.json" : "b.json";

  return import(`./files/${fileName}`, { assert: { type: "json" } });
})();

console.log(data);

export default {
  data,
  app,
};

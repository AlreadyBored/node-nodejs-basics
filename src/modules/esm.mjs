import { sep } from "node:path";
import { release, version } from "node:os";
import { createServer } from "node:http";
import { fileURLToPath } from "url";
import "./files/c.mjs";

const random = Math.random();
const __filename = fileURLToPath(import.meta.url);
const __dirname = fileURLToPath(new URL(".", import.meta.url));

let unknownObject;

if (random > 0.5) {
  const { default: defaultValue } = await import("./files/a.json", {
    assert: { type: "json" },
  });

  unknownObject = defaultValue;
} else {
  const { default: defaultValue } = await import("./files/b.json", {
    assert: { type: "json" },
  });

  unknownObject = defaultValue;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);
console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServer((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };

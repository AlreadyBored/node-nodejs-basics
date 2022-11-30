import { createReadStream } from "node:fs";

const read = async () => {
  const readable = createReadStream(
    new URL("./files/fileToRead.txt", import.meta.url)
  );

  readable.setEncoding("utf8");

  let data = "";

  for await (const chunk of readable) {
    data += chunk;
  }

  process.stdout.write(data);
};

await read();

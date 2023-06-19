import { stdin, stdout } from "node:process";

const transform = async () => {
  stdin.setEncoding("utf8");
  stdin.on("data", (chunk) => {
    stdout.write(chunk);
  });
  stdin.on("end", () => {
    console.log("end of transforming the stream");
  });
};

await transform();

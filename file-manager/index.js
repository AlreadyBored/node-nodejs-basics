import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";
import path from "node:path";
import { colors } from "./src/utils/colorize.js";
import {
  up as navigationUp,
  cd as goTo,
  ls as listFiles,
} from "./src/navigation/navigation.js";
import {
  read as readFile,
  create,
  rn,
  copy,
  move,
  remove,
} from "./src/operations/operations.js";
import { systemEol } from "./src/os/systemInfo.js";
import { calculateHash } from "./src/utils/hash.js";
import { compress as brotliCompress } from "./src/utils/compress.js";
import { deCompress as brotliDeCompress } from "./src/utils/decompress.js";
import { changeDir } from "./src/utils/changeDir.js";
import os from "node:os";

const rl = readline.createInterface({ input, output, prompt: ">" });

//sets current working directory process to home directory
changeDir(os.homedir());

//sets variable displaying current working directory
const currentWorkingDirectory = path.resolve(process.cwd());
//sets username variable if username if provided
const username = process.argv?.slice(2)[0]?.split("=")[1];

//if username is provided prints welcoming message else greets as anonymous
if (username?.length > 0) {
  console.log(`Welcome to the File Manager, ${username}!`);
  console.log(
    colors.blue +
      `You are currently working in ${currentWorkingDirectory}` +
      colors.reset
  );
} else {
  console.log("Welcome to the File Manager, Anonymous!");

  console.log(
    colors.blue +
      `You are currently working in ${currentWorkingDirectory}` +
      colors.reset
  );
}

rl.prompt();
//Commands of application
const commands = {
  //displays all possible commands
  help() {
    console.log(`Commands ${Object.keys(commands).join(", ")}`);
  },
  //navigation
  up: (...args) => navigationUp(...args),
  cd: (...args) => goTo(...args),
  ls: () => listFiles(),
  //operations
  cat: (...args) => readFile(...args),
  add: (...args) => create(...args),
  rn: (...args) => rn(...args),
  cp: (...args) => copy(...args),
  mv: (...args) => move(...args),
  rm: (...args) => remove(...args),
  //os
  os: (...args) => systemEol(...args),
  //hash
  hash: (...args) => calculateHash(...args),
  //compress
  compress: (...args) => brotliCompress(...args),
  decompress: (...args) => brotliDeCompress(...args),
  //exit
  ".exit"() {
    rl.close();
  },
};

//repl logic
rl.on("line", (name) => {
  let trimmedInput = name.trim();
  let userCommand = trimmedInput.split(" ")[0];
  let userArgs = trimmedInput.split(" ").slice(1);
  if (!trimmedInput) {
    rl.prompt();
    return;
  }
  const command = commands[userCommand];
  if (command) {
    try {
      command(process.cwd(), userArgs);
      console.log(
        colors.blue +
          `You are currently working in ${process.cwd()}` +
          colors.reset
      );
    } catch (err) {
      console.error(colors.red + "Operation failed" + colors.reset);
    }
  } else {
    console.log(colors.red + "Invalid Input" + colors.reset);
  }
  rl.prompt();
}).on("close", () => {
  console.log(
    `Thank you for using File Manager, ${
      username ? `${username}!` : "Anonymous!"
    }`
  ),
    process.exit(0);
});

import { createReadStream } from "fs";
import fs from "fs/promises";
import path from "path";

const USERNAME_ARG = "username";

const parseArguments = (passedArguments) => {
  const usernameArg = passedArguments.find((arg) =>
    arg.startsWith(`--${USERNAME_ARG}=`)
  );
  const username = usernameArg ? usernameArg.split("=")[1] : "User";

  return username;
};

const userName = parseArguments(process.argv);

console.log(`Welcome to the File Manager, ${userName}!`);
console.log(`You are currently in ${process.cwd()}`);

const commands = {
  ".exit": (process) => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    process.exit();
  },
  ls: async (process) => {
    const files = await fs.readdir(process.cwd());

    console.log("--------------------------------------------------");
    console.log("  Index | Name                       | Type");
    console.log("--------------------------------------------------");

    files.forEach(async (file, index) => {
      const filePath = path.join(process.cwd(), file);
      const stats = await fs.stat(filePath);
      const type = stats.isDirectory() ? "directory" : "file";

      console.log(
        `  ${index.toString().padEnd(5)} | ${file.padEnd(25)} | ${type}`
      );
    });
    console.log("--------------------------------------------------");
  },
  up: async () => {
    const currentDir = process.cwd();
    const parentDir = path.dirname(currentDir);

    if (currentDir === parentDir) {
      console.log("You are already in the root directory.");
    } else {
      process.chdir(parentDir);
      console.log(`Changed directory to ${parentDir}`);
    }
  },
  cd: async (process, directoryPath) => {
    if (!directoryPath) return console.log("Directory not provided");

    const targetPath = path.resolve(process.cwd(), directoryPath);
    const stats = await fs.stat(targetPath);

    if (stats.isDirectory()) {
      process.chdir(targetPath);
      console.log(`Changed directory to ${targetPath}`);
    } else {
      console.log("Directory does not exist.");
    }
  },
  cat: async (process, filePath) => {
    const fullPath = path.resolve(process.cwd(), filePath);

    const stats = await fs.stat(fullPath);

    if (stats.isDirectory()) {
      console.log("The specified path is a directory, not a file.");
      return;
    }

    const stream = createReadStream(fullPath, "utf-8");
    stream.on("data", (chunk) => {
      process.stdout.write(chunk);
    });
    stream.on("error", () => {
      console.log("Operation failed: Could not read the file.");
      console.log("");
    });
  },
  add: async (process, fileName) => {
    const fullPath = path.resolve(process.cwd(), fileName);

    await fs.writeFile(fullPath, "");
    console.log(`File '${fileName}' has been created.`);
  },
  error: (process) => {
    throw new Error("Simulated error");
  },
};

process.stdin.on("data", async (data) => {
  const input = data.toString().trim();
  const [command, ...args] = input.split(" ");

  console.log("");
  if (commands[command]) {
    try {
      await commands[command](process, ...args);
    } catch {
      console.log("Operation failed");
    }
  } else {
    console.log("Invalid input.");
  }
  console.log("");
});

//  Ctrl+C
process.on("SIGINT", () => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
  process.exit();
});

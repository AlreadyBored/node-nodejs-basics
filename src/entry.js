import fs from "fs";
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
  ls: (process) => {
    const files = fs.readdirSync(process.cwd());

    console.log("--------------------------------------------------");
    console.log("  Index | Name                       | Type");
    console.log("--------------------------------------------------");

    files.forEach((file, index) => {
      const filePath = path.join(process.cwd(), file);
      const stats = fs.statSync(filePath);
      const type = stats.isDirectory() ? "directory" : "file";

      console.log(
        `  ${index.toString().padEnd(5)} | ${file.padEnd(25)} | ${type}`
      );
    });
    console.log("--------------------------------------------------");
  },
  error: (process) => {
    throw new Error("Simulated error");
  },
};

process.stdin.on("data", (data) => {
  const input = data.toString().trim();

  console.log("");
  if (commands[input]) {
    try {
      commands[input](process);
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

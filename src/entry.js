import { actions } from "./commands/index.js";

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
console.log(``);

const commands = {
  ".exit": (process) => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    process.exit();
  },
  error: (process) => {
    throw new Error("Simulated error");
  },
  ...actions,
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

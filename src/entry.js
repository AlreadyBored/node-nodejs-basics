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
  error: (process) => {
    throw new Error("Simulated error");
  },
};

process.stdin.on("data", (data) => {
  const input = data.toString().trim();

  if (commands[input]) {
    try {
      commands[input](process);
    } catch {
      console.log("Operation failed");
    }
  } else {
    console.log("Invalid input.");
  }
});

//  Ctrl+C
process.on("SIGINT", () => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
  process.exit();
});

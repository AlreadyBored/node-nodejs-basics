import { exec } from "child_process";
import OS from "os";
import { promisify } from "util";

const execPromise = promisify(exec);

const printUserName = async () => {
  try {
    const { stdout } = await execPromise("whoami");
    console.log(`Current System User: ${stdout.trim()}`);
  } catch (error) {
    console.log("Could not retrieve username.");
  }
};

const printCPU = async () => {
  const cpus = OS.cpus();
  console.log(`CPU Info:`);
  cpus.forEach((cpu, index) => {
    console.log(
      `CPU ${index + 1}: Model: ${cpu.model}, Speed: ${(
        cpu.speed / 1000
      ).toFixed(2)} GHz`
    );
  });
  console.log(`Total CPUs: ${cpus.length}`);
};

export const os = async (process, option) => {
  const eolOutput = `Default EOL: '${JSON.stringify(OS.EOL)}'`;
  const homeDirOutput = `Home Directory: ${OS.homedir()}`;
  const architectureOutput = `CPU Architecture: ${OS.arch()}`;

  if (!option) {
    console.log(eolOutput);
    console.log(homeDirOutput);
    console.log(architectureOutput);

    await printCPU();
    await printUserName();
    return;
  }

  switch (option) {
    case "--EOL":
      console.log(eolOutput);
      break;
    case "--cpus":
      await printCPU();
      break;
    case "--homedir":
      console.log(homeDirOutput);
      break;
    case "--username":
      await printUserName();
      break;
    case "--architecture":
      console.log(architectureOutput);
      break;
    default:
      console.log("Invalid OS command option.");
  }
};

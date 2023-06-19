const spawnChildProcess = async (args) => {
  const { spawn } = await import('node:child_process');
  const url = new URL('files/', import.meta.url);
  const child = spawn(`node`, [`./script.js`, ...args], {
    cwd: url,
    stdio: 'inherit',
  });
};
const arg1 = 20;
const arg2 = `hey`;
const arg3 = null;
// Put your arguments in function call to test this functionality
spawnChildProcess([arg1, arg2, arg3]);

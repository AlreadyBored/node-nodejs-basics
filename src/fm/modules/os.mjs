import os from 'os';
import * as errors from './errors.mjs'

const getCPUInformation = () => {
	const cpuObj = os.cpus();
	return `Amount of CPUs: ${cpuObj.length}${os.EOL}${os.cpus()
		.map(cpu => `Model: ${cpu.model}; Speed: ${cpu.speed/1000} GHz${os.EOL}`).join('')}`;
}

const handleOSCommand = (inputArgs) => {
	const availableArgs = {
		'--EOL': os.EOL,
		'--cpus': getCPUInformation(),
		'--homedir': os.homedir(),
		'--username': os.userName,
		'--architecture': os.arch(),
	}
	if (!(inputArgs[1] in availableArgs)) {
		console.log(errors.invalidInput);
		return;
	}

	console.log(availableArgs[inputArgs[1]]);
}

export { handleOSCommand }
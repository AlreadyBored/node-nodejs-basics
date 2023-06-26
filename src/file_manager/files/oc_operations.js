import { arch, cpus, EOL, homedir, userInfo } from 'os';


const printEOL = () => {
    console.log(EOL)
}

const printCpus = () => {
    const cp = cpus();
    console.table(cp);
}

const printHomedir = () => {
    console.log(homedir());
}

const printUserName = () => {
    console.log('username', userInfo().username);
}

const printArchitecture = () => {
    console.log(arch());
}

const handleOcOperations = (param) => {
    console.log(param)
    try {
        if (param === '--EOL') {
            printEOL();
            return;
        }

        if (param === '--cpus') {
            printCpus();
            return;
        }

        if (param === '--homedir') {
            printHomedir();
            return;
        }

        if (param === '--username') {
            printUserName();
            return;
        }

        if (param === '--architecture') {
            printArchitecture();
            return;
        }
    } catch (e) {
        console.log(e)
    }
}

export { handleOcOperations }

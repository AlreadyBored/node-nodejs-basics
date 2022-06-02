export const parseArgs = () => {
    const args = process.argv.slice(2);

    const hashMap = {};

    for (let i = 0; i < args.length; i++) {
        hashMap[args[i].replace('--', '')] = i;
    }

    for (let j = 0; j < args.length; j++) {
        if (hashMap[args[j].replace('--', '')] % 2 === 0) {
            hashMap[args[j].replace('--', '')] = args[j + 1];
        } else {
            delete hashMap[args[j].replace('--', '')];
        }
    }
    
    const arr = [];

    for (let [key, value] of Object.entries(hashMap)) {
        arr.push(`${key} is ${value}`);
    }

    console.log(arr.join(', '))
};

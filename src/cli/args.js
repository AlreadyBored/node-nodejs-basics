export const parseArgs = () => {
    const options = process.argv.slice(2);
    let result = [];
    for(let i = 0; i < options.length; i++) {
        if(!options[i].match(/^--/)){
            continue;
        }
        result.push(`${options[i].slice(2)} is ${++i<options.length ? options[i] : ''}`)
    }
    console.log(result.join(', '));
};
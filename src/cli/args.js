const clArgumentsArray = process.argv.slice(2)
let clArgumentsObject = {}

// Пытался сделать через фильтр, но не вышло. Но по идее оно запарсит и параметры зыпуска, определенные в нодах?
export const parseArgs = () => {
    clArgumentsArray.forEach((element, index) => {
        element.startsWith("--") ? clArgumentsObject[element] = clArgumentsArray[index + 1] : ""
    })
    let message = ``
    for (const varName in clArgumentsObject) {
        message += `${varName.slice(2)} is ${clArgumentsObject[varName]}, `
    }
    return console.log(message)
};
parseArgs()
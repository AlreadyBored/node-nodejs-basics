import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ДЛЯ ЦЕЛЕЙ ТЕСТИРОВАНИЯ РАБОТЫ ПРИЛОЖЕНИЯ СРАЗУ ПОСЛЕ СТАРТА ВВЕСТИ ЛЮБУЮ СТРОКУ
// И НАЖАТЬ ЕНТЕР. ЧТОБЫ ВЫЙТИЁ ИЗ ПРОЦЕССА ВВЕСЬТИ CLOSE именно большими буквами

const spawnChildProcess = async (args) => {
    // Путь к script.js в папке files
    const scriptPath = join(__dirname, 'files', 'script.js');

    const childProcess = spawn('node', [scriptPath, ...args], {
        stdio: ['pipe', 'pipe', 'inherit']
    });

    // Связываем stdin и stdout родительского и дочернего процессов
    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);

    // Обработка завершения дочернего процесса
    childProcess.on('exit', (code) => {
        console.log(`\nChild process exited with code ${code}`);
    });

    return childProcess;
};

// Тестируем с аргументами
spawnChildProcess(['argument1', 'argument2', 'argument3', 'argument4']);
import { fork } from 'child_process';
import { fileURLToPath } from 'url';

const scriptUrl = new URL('./files/script.js', import.meta.url);
const scriptPath = fileURLToPath(scriptUrl);

const spawnChildProcess = async (args) => {
    const childProcess = fork(scriptPath, args, { silent: true });

	process.stdin.pipe(childProcess.stdin);
	childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['1', '2']);

import { fork } from 'child_process';
import { getAbsolutePath } from '../utils.js';

const scriptPath = getAbsolutePath('./files/script.js', import.meta.url);

const spawnChildProcess = async (args) => {
    const childProcess = fork(scriptPath, args, { silent: true });

	process.stdin.pipe(childProcess.stdin);
	childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['1', '2']);

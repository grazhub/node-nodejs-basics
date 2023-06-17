import { cpus } from 'os';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';

const workerUrl = new URL('./worker.js', import.meta.url);
const workerPath = fileURLToPath(workerUrl);
const cpusNum = cpus().length;
const startNum = 10;
const statusResolved = 'resolved';
const statusError = 'error';

const performCalculations = async () => {
	const calcFibonacci = (workerData) => new Promise(resolve => {
		const worker = new Worker(workerPath, { workerData });

		worker.on('message', data => resolve({ status: statusResolved, data }));
		worker.on('error', () => resolve({ status: statusError, data: null }));
	});

	const calcPromises = [];

	for (let index = 0; index < cpusNum; index++) {
		calcPromises.push(calcFibonacci(startNum + index));
	}

	const data = await Promise.all(calcPromises);
	console.log(data);
};

await performCalculations();
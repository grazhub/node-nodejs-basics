import { cpus } from 'os';
import { Worker } from 'worker_threads';
import { getAbsolutePath } from '../utils.js';

const workerPath = getAbsolutePath('./worker.js', import.meta.url);
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
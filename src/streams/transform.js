import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const reverseStr = (str) => str.split('').reverse().join('');

const transform = async () => {
    const newTransformStream = new Transform({
		transform(chunk, encoding, callback) {
		  	callback(null, reverseStr(chunk.toString()))
		},
	});

	await pipeline(process.stdin, newTransformStream, process.stdout);
};

await transform();
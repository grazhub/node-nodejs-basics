import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
import { getAbsolutePath } from '../utils.js';

const filePath = getAbsolutePath('./files/fileToCalculateHashFor.txt', import.meta.url);

const calculateHash = async () => {
	const sha256Hash = createHash('sha256');
	const fileContent = await readFile(filePath);

	sha256Hash.update(fileContent);

	const hashHex = sha256Hash.digest('hex');
	console.log(hashHex);
};

await calculateHash();
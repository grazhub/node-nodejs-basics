import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
import { fileURLToPath } from 'url';

const fileURL = new URL('./files/fileToCalculateHashFor.txt', import.meta.url);
const filePath = fileURLToPath(fileURL);

const calculateHash = async () => {
	const sha256Hash = createHash('sha256');
	const fileContent = await readFile(filePath);

	sha256Hash.update(fileContent);

	const hashHex = sha256Hash.digest('hex');
	console.log(hashHex);
};

await calculateHash();
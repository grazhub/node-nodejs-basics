import { rename as renameFile } from 'fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const currentDirPath = dirname(fileURLToPath(import.meta.url));

const wrongFilenameRelativePath = './files/wrongFilename.txt';
const properFilenameRelativePath = './files/properFilename.md';

const rename = async () => {
    try {
		await renameFile(
			resolve(currentDirPath, wrongFilenameRelativePath),
			resolve(currentDirPath, properFilenameRelativePath)
		);
	} catch (error) {
		console.log(error);
		throw new Error('FS operation failed');
	} 
};

await rename();
import { fileURLToPath } from 'url';

export const getAbsolutePath = (relativePath, currentFileURL) => {
	const newUrl = new URL(relativePath, currentFileURL);
	return fileURLToPath(newUrl);
} 
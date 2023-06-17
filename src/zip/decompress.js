import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';
import { createGunzip } from 'zlib';

const fileURL = new URL('./files/fileToCompress.txt', import.meta.url);
const archiveFileURL = new URL('./files/archive.gz', import.meta.url);
const filePath = fileURLToPath(fileURL);
const archiveFilePath = fileURLToPath(archiveFileURL);

const decompress = async () => {
    await pipeline(createReadStream(archiveFilePath), createGunzip(), createWriteStream(filePath));
};

await decompress();
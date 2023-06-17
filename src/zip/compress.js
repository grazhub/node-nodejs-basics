import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib';

const fileURL = new URL('./files/fileToCompress.txt', import.meta.url);
const archiveFileURL = new URL('./files/archive.gz', import.meta.url);
const filePath = fileURLToPath(fileURL);
const archiveFilePath = fileURLToPath(archiveFileURL);

const compress = async () => {
    await pipeline(createReadStream(filePath), createGzip(), createWriteStream(archiveFilePath));
};

await compress();
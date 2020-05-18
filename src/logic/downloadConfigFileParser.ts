interface DownloadConfigFile {
    host: string;
    port: number;
    savePath: string;
    uuid: string;
}

function validateInputJsonFile(file: File): boolean {
    return file.type === 'application/json';
}

function validateParsedJsonFile(parsedFile: DownloadConfigFile): boolean {
    if (!parsedFile.host || !(parsedFile.port >= 0) || !parsedFile.savePath || !parsedFile.uuid) {
        return false;
    }
    return true;
}

function readJson(file: File): Promise<any> {
    return new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = function() {
            const text: any = reader.result;
            const parsed = JSON.parse(text);
            resolve(parsed);
        }
        reader.readAsText(file);
    });
}


export async function readDownloadConfigFile(inputFile: File): Promise<DownloadConfigFile> {
    if (!validateInputJsonFile(inputFile)) {
        throw new Error('Invalid file format');
    }

    const parsedJsonFile = await readJson(inputFile);

    if (!validateParsedJsonFile(parsedJsonFile)) {
        throw new Error('Invalid data');
    }

    return parsedJsonFile;
}

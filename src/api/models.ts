interface DownloadRequest {
    host: string;
    port: number;
    savePath: string;
    uuid: string;
}

interface DownloadResponse {
    status: string;
}

interface ShareRequest {
    uuid: string;
}

interface ShareResponse {
    host: string;
    port: number;
    uuid: string;
}

interface UploadRequest {
    filePath: string;
}

interface UploadResponse{
    uuid: string;
}

export {
    DownloadRequest, DownloadResponse,
    ShareRequest, ShareResponse,
    UploadRequest, UploadResponse
}

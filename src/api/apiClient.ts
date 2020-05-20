import axios from 'axios';

import { DownloadRequest, DownloadResponse, 
    ShareRequest, ShareResponse, 
    UploadRequest, UploadResponse } from './models';

// API_URL приходит из .env файла
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

export const apiClient = {
    download(payload: DownloadRequest): Promise<DownloadResponse> {
        return axios.post<DownloadResponse>('/download', payload)
            .then(res => res.data);
    },
    share(payload: ShareRequest): Promise<ShareResponse> {
        return axios.post<ShareResponse>('/share', payload)
            .then(res => res.data);
    },
    upload(payload: UploadRequest): Promise<UploadResponse> {
        return axios.post<UploadResponse>('/upload', payload)
            .then(res => res.data);
    }
}

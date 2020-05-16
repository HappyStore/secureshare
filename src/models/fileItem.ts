export interface FileItemModel {
    Name: string;
    Extension: string;
    Path?: string;
    Link?: string;
    Status: 'loading' | 'ready'
}
